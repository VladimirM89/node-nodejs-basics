import { createHash } from 'node:crypto';
import fs from 'node:fs';
import { fileURLToPath } from 'url';
import path from 'path'
import { stdout } from 'node:process';

const calculateHash = async () => {
  const srcDir = '/files';
  const fileName = 'fileToCalculateHashFor.txt';

  try {
    const currentFilename = fileURLToPath(import.meta.url);
    const currentDirname = path.dirname(currentFilename);
    const pathToFile = path.join(currentDirname, srcDir, fileName);

    const data = fs.createReadStream(pathToFile);
    const hash = createHash('sha256');

    data.pipe(hash).setEncoding('hex').pipe(stdout)
  } catch(error) {
      throw error;
  }

};

await calculateHash();