const path = require('path');
const Promise = require('bluebird');
const cheerio = require('cheerio');
const zip = require('lodash.zip');
const fs = Promise.promisifyAll(require('fs-extra'));
const { globAsync } = Promise.promisifyAll(require('glob'));
const svgToJsx = require('@balajmarius/svg-to-jsx');

const ROOT_DIR = path.join(__dirname, '..');
const SRC_DIR = path.join(ROOT_DIR, 'src');
const ICONS_DIR = path.join(ROOT_DIR, 'icons');
const DIST_DIR = path.join(ROOT_DIR, 'dist');

const readFile = filename => fs.readFileSync(filename, 'utf8');
const writeFile = (filename, data) => fs.outputFileSync(filename, data);
const copyFile = (source, destination) => fs.copySync(source, destination);

const transformSVGToReactComponent = Promise.coroutine(function*(rawSVGs, componentName) {
  const transformedSVGs = yield Promise.all(rawSVGs.map(svgToJsx));
  return transformedSVGs.map(transformedSVG => {
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
});

const generateSVGs = Promise.coroutine(function*() {
  const iconFoldersToProcess = yield globAsync(`${ICONS_DIR}/*`);
  const iconNames = iconFoldersToProcess.map(folder => folder.split('/').pop());

  iconNames.map(
    Promise.coroutine(function*(name) {
      // Read all the files inside the icon folder and return their names without extension
      const availableIcons = yield globAsync(`${ICONS_DIR}/${name}/*`);
      const availableIconDimensions = availableIcons.map(icon => path.basename(icon, '.svg'));
      const componentName = name.charAt(0).toUpperCase() + name.slice(1);

      const stringifiedSVGComponents = yield Promise.all(availableIcons.map(readFile)).then(rawSVGs =>
        transformSVGToReactComponent(rawSVGs, componentName)
      );

      // Write the newly created Component strings to file
      zip(availableIconDimensions, stringifiedSVGComponents).forEach(([dimension, component]) => {
        const filename = path.join(DIST_DIR, `${name}/${dimension}.js`);
        writeFile(filename, component);
      });

      // Write a simple export index file for easier access
      const index = availableIconDimensions
        .map(dimension => `export Icon${dimension} from './${dimension}';`)
        .join('\n');
      const indexFilename = path.join(DIST_DIR, `${name}/index.js`);
      writeFile(indexFilename, index);
    })
  );

  // Copy other necessary files to DIST_DIR
  copyFile(SRC_DIR, DIST_DIR);

  console.log(`[Teamleader] ${iconNames.length} UI Icons generated 🎉`);
});

fs.remove(DIST_DIR).then(generateSVGs);