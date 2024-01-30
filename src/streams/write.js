import fs from 'node:fs';
import { fileURLToPath } from 'url';
import path from 'path'
import { stdin } from 'node:process';

const write = async () => {
    const srcDir = '/files';
    const fileName = 'fileToWrite.txt';

    try {
      const currentFilename = fileURLToPath(import.meta.url);
      const currentDirname = path.dirname(currentFilename);
      const pathToFile = path.join(currentDirname, srcDir, fileName);

      const data = fs.createWriteStream(pathToFile);

      stdin.pipe(data);

      data.on('error', (error) => console.log('Error writing file: ', error));
    } catch(error) {
        throw error;
    }
};

await write();