const path = require('path');
const Promise = require('bluebird');
const cheerio = require('cheerio');
const camelCase = require('lodash/camelCase');
const upperFirst = require('lodash/upperFirst');
const findKey = require('lodash/findKey');
const fs = Promise.promisifyAll(require('fs-extra'));
const { globAsync } = Promise.promisifyAll(require('glob'));
const svgToJsx = require('@balajmarius/svg2jsx');
const clc = require('cli-color');
const constants = require('../src/constants');

const ROOT_DIR = path.join(__dirname, '..');
const SRC_DIR = path.join(ROOT_DIR, 'src');
const ICONS_DIR = path.join(ROOT_DIR, 'icons');
const LIB_DIR = path.join(ROOT_DIR, 'lib');

const readFile = filename => fs.readFileSync(filename, 'utf8');
const writeFile = (filename, data) => fs.outputFileSync(filename, data);
const copyFile = (source, destination) => fs.copySync(source, destination);

const transformSVGToReactComponent = Promise.coroutine(function*(rawSVG, componentName, width, height) {
  const transformedSVG = yield svgToJsx(rawSVG);

  // Cleaning up; we only need the content *between* the <svg> tags
  const $ = cheerio.load(transformedSVG, { xmlMode: true });
  const $svg = $('svg');

  // Traversing the DOM to find all `<g>` and `<path>` tags and make sure they have `fill="currentColor"`
  // Icon source can be whatever color (usually black) but it will always be filled according to its parent element
  $svg.find('g, path').map((idx, tag) => {
    const tagAttrFill = $(tag).attr('fill');
    if (tagAttrFill && tagAttrFill.startsWith('#')) {
      $(tag).attr('fill', 'currentColor');
    }
  });

  const viewBox = $svg.attr('viewBox');

  if (viewBox !== `0 0 ${width} ${height}`) {
    throw new Error('Invalid or missing viewBox attribute');
  }

  // Actual output of the React component
  return `
            import React from 'react';
            import Icon from './IconBase';
            
            const ${componentName} = props => (
              <Icon viewBox="${viewBox}" {...props} width="${width}" height="${height}">
                ${$svg.html()}
              </Icon>
            );
            
            export default ${componentName};`;
});

const generateSVGs = Promise.coroutine(function*() {
  const iconsToProcess = yield globAsync(`${ICONS_DIR}/*`);
  const icons = iconsToProcess.map(folder => path.basename(folder));
  let index = '';
  let logs = '';

  yield Promise.all(
    icons.map(
      Promise.coroutine(function*(fileName) {
        // Map the size (eg.: 14x14) to our constant (eg.: SMALL)
        const width = parseInt(fileName.split('x')[0]);
        const height = parseInt(fileName.split('x')[1]);

        if (width !== height) {
          logs += `⚠️  Unequal width and height is not supported: ${fileName}\n`;
        }

        const dimension = findKey(constants, c => c === width);
        if (typeof dimension === 'undefined') {
          logs += `⚠️  Invalid size prefix for icon: ${fileName}\n`;
          return;
        }

        // Remove '.svg' and the size (eg.: 14x14) from the fileName
        const fileNameWithoutDimension = path.basename(fileName.substring(fileName.indexOf('_') + 1), '.svg');
        const variation = fileNameWithoutDimension.split('_').pop();
        const iconName = fileNameWithoutDimension.substring(0, fileNameWithoutDimension.lastIndexOf('_'));
        const iconNameWithSize = `icon_${iconName}_${dimension}_${variation}`;
        const componentName = upperFirst(camelCase(`${iconNameWithSize}`));

        const rawSVG = readFile(`${ICONS_DIR}/${fileName}`);
        let stringifiedSVGComponent;
        try {
          stringifiedSVGComponent = yield transformSVGToReactComponent(rawSVG, componentName, width, height);
        } catch (e) {
          logs += `⚠️  ${e.message || 'Error'} for icon: ${fileName}\n`;
          return;
        }

        // Write the newly created Component strings to file
        const filename = path.join(LIB_DIR, `${componentName}.js`);
        writeFile(filename, stringifiedSVGComponent);

        // Write a simple export index file for easier access
        index += `export ${componentName} from './${componentName}';\n`;
      }),
    ),
  );

  const indexFilename = path.join(LIB_DIR, `index.js`);
  writeFile(indexFilename, index);

  // Copy other necessary files to LIB_DIR
  copyFile(SRC_DIR, LIB_DIR);

  console.log(clc.green(`[Teamleader] 🎉  ${icons.length} UI Icons generated`));

  if (logs.length) {
    console.log(
      clc.yellow(`\n[Teamleader] 😿  We couldn't generate some component(s) because of the following reason(s):`),
    );
    console.log(clc.red(logs));
  }
});

fs.remove(LIB_DIR).then(generateSVGs);
