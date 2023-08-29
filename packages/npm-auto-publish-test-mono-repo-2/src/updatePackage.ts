import * as fs from 'fs';

// Read the current package.json
const packageData = fs.readFileSync('package.json', 'utf8');
const packageJson = JSON.parse(packageData);

// Modify the fields
packageJson.name = 'npm-auto-publish-test-mono-repo-2';
packageJson.version = '2.0.0';

// Write back the modified package.json
fs.writeFileSync('package.json', JSON.stringify(packageJson, null, 2), 'utf8');

console.log('package.json has been updated.');
