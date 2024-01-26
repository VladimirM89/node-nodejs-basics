import fs from 'node:fs/promises';
import path from 'node:path';

const ERROR_FAILED = 'FS operation failed';

const read = async () => {
    const srcDir = './files';
    const srcFileName = 'fileToRead.txt';
    const filePath = path.resolve(srcDir, srcFileName);

    try {
        (await fs.stat(filePath)).isFile();
        const data = await fs.readFile(filePath);
        console.log(data.toString());
    } catch {
        throw new Error(ERROR_FAILED);
    }
};

await read();