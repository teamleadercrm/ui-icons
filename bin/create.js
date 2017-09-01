const path = require('path');
const Promise = require('bluebird');
const cheerio = require('cheerio');
const camelCase = require('lodash.camelcase');
const upperFirst = require('lodash.upperfirst');
const findKey = require('lodash.findkey');
const fs = Promise.promisifyAll(require('fs-extra'));
const {globAsync} = Promise.promisifyAll(require('glob'));
const svgToJsx = require('@balajmarius/svg-to-jsx');
var clc = require('cli-color');
const constants = require('../src/constants');

const ROOT_DIR = path.join(__dirname, '..');
const SRC_DIR = path.join(ROOT_DIR, 'src');
const ICONS_DIR = path.join(ROOT_DIR, 'icons');
const DIST_DIR = path.join(ROOT_DIR, 'dist');

const readFile = filename => fs.readFileSync(filename, 'utf8');
const writeFile = (filename, data) => fs.outputFileSync(filename, data);
const copyFile = (source, destination) => fs.copySync(source, destination);

const transformSVGToReactComponent = Promise.coroutine(function*(rawSVG, componentName) {
  const transformedSVG = yield svgToJsx(rawSVG);

  // Cleaning up; we only need the content *between* the <svg> tags
  const $ = cheerio.load(transformedSVG, { xmlMode: true });
  const $svg = $('svg');
  const viewBox = $svg.attr('viewBox');

  // Actual output of the React component
  return `
            import React from 'react';
            import Icon from '../IconBase';
            
            const ${componentName} = props => (
              <Icon viewBox="${viewBox}" {...props}>
                ${$svg.html()}
              </Icon>
            );
            
            export default ${componentName};`;
});

const generateSVGs = Promise.coroutine(function* () {
  const iconsToProcess = yield globAsync(`${ICONS_DIR}/*`);
  const icons = iconsToProcess.map(folder => folder.split('/').pop());
  let index = '';
  let logs = '';

  yield Promise.all(
    icons.map(
      Promise.coroutine(function* (fileName) {
        // Read all the files inside the icon folder and return their names without extension
        const dimension = findKey(constants, c => c === parseInt(fileName.split('x')[0]));
        if (typeof dimension === 'undefined') {
          logs += `⚠️  Invalid size prefix for icon: ${fileName}\n`;
          return;
        }

        const fileNameWithoutExtension = fileName.substring(fileName.indexOf('_') + 1).split('.')[0];
        const variation = fileNameWithoutExtension.split('_').pop();
        const iconName = fileNameWithoutExtension.substring(0, fileNameWithoutExtension.lastIndexOf('_'));
        const iconNameWithSize = `icon_${iconName}_${dimension}_${variation}`;
        const componentName = upperFirst(camelCase(`${iconNameWithSize}`));

        const rawSVG = readFile(`${ICONS_DIR}/${fileName}`);
        const stringifiedSVGComponent = yield transformSVGToReactComponent(rawSVG, componentName);

        // Write the newly created Component strings to file
        const filename = path.join(DIST_DIR, `${componentName}.js`);
        writeFile(filename, stringifiedSVGComponent);

        // Write a simple export index file for easier access
        index += `export ${componentName} from './${componentName}';\n`;
      })
    )
  );

  const indexFilename = path.join(DIST_DIR, `index.js`);
  writeFile(indexFilename, index);

  // Copy other necessary files to DIST_DIR
  copyFile(SRC_DIR, DIST_DIR);

  console.log(clc.green(`[Teamleader] 🎉  ${icons.length} UI Icons generated`));

  if (logs.length) {
    console.log(clc.yellow(`\n[Teamleader] 😿  We couldn't generate some component(s) because of the following reason(s):`));
    console.log(clc.red(logs));
  }
});

fs.remove(DIST_DIR).then(generateSVGs);
