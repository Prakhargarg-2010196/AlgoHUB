// This script changes the name of the package name in package.json to the project name.
import { readFile, writeFile } from 'fs'; // for file operations
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
import process from 'node:process'; // using the process variable
const projectName = process.argv[2]; // Pass the project name as a command-line argument
const templateFilePath = [
    `${path.resolve(__dirname, '../../package.json')}`,
    `${path.resolve(__dirname, '../../package-lock.json')}`,
]; // Path to your package.json file
console.log(templateFilePath);
for (let tempPath of templateFilePath) {
    readFile(tempPath, 'utf-8', (err, data) => {
        if (err) {
            console.error(err);
            return;
        }

        const updatedData = data.replace(
            /"name": "prakhar-template"/,
            `"name": "${projectName}"`
        );
        writeFile(tempPath, updatedData, (err) => {
            if (err) {
                console.error(err);
                return;
            }
            console.log(
                `Package name in package.json updated to "${projectName}"`
            );
        });
    });
}
