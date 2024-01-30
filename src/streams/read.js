import fs from 'node:fs';
import { fileURLToPath } from 'url';
import path from 'path'
import { stdout } from 'node:process';

const read = async () => {
    const srcDir = '/files';
    const fileName = 'fileToRead.txt';

    try {
      const currentFilename = fileURLToPath(import.meta.url);
      const currentDirname = path.dirname(currentFilename);
      const pathToFile = path.join(currentDirname, srcDir, fileName);

      const data = fs.createReadStream(pathToFile);

      data.pipe(stdout);

      data.on('error', (error) => console.log('Error reading file: ', error));
    } catch(error) {
        throw error;
    }
};

await read();