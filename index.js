#!/usr/bin/env node

const convert = require('xml-js');
const fs = require('fs');
const program = require('commander');
let filePath = 'config.xml'
const pj = require('./package.json');
const update = require('./lib/update')

let selection = '';
function selector(_, option) {
  if(selection) {
    console.error('Can only select one option')
    process.exit(1)
  }
  selection = option;
}

program
  .description('Semantic versioning updater for cordova config.xml files')
  .usage('[options] <file>')
  .option('-M --major', 'Increments major version', selector, 'major')
  .option('-m --minor', 'Increments minor version', selector, 'minor')
  .option('-p --patch', 'Increments patch version', selector, 'patch')
  .version(pj.version)
  .parse(process.argv);

if(!selection) {
  console.error('Must select one option');
  process.exit(1);
}

if(program.args.length > 0) filePath = program.args[0]

const inputFile = fs.readFileSync(filePath, 'utf-8');
const inputJS = convert.xml2js(inputFile);
const version = inputJS.elements[0].attributes.version;
const newVersion = update[selection](version)
inputJS.elements[0].attributes.version = newVersion
const outputXML = convert.js2xml(inputJS, { spaces: 4 });
fs.writeFileSync(filePath, outputXML, 'utf-8')
console.log(`Updated ${selection}, version is now ${newVersion}`)