"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
// Read the current package.json
var packageData = fs.readFileSync('package.json', 'utf8');
var packageJson = JSON.parse(packageData);
// Modify the fields
packageJson.name = 'new-package-name';
packageJson.version = '2.0.0';
// Write back the modified package.json
fs.writeFileSync('package.json', JSON.stringify(packageJson, null, 2), 'utf8');
console.log('package.json has been updated.');
