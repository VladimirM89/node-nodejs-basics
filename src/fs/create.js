import fs from 'node:fs/promises';
import { fileURLToPath } from 'url';
import path from 'node:path';

const ERROR_FAILED = 'FS operation failed';
const TEXT = 'I am fresh and young';

const create = async () => {
    const srcDir = './files';
    const newFileName = 'fresh.txt';

    const currentFilename = fileURLToPath(import.meta.url);
    const currentDirname = path.dirname(currentFilename);

    const newFilePath = path.resolve(currentDirname, srcDir, newFileName);
    const newFileDir = path.resolve(currentDirname, srcDir);

    console.log('newFilePath', newFilePath);

    try {
        const files = await fs.readdir(newFileDir);

        if (!files.includes(newFileName)) {
            fs.writeFile(newFilePath, TEXT);
        } else {
            throw new Error(ERROR_FAILED);
        }
    } catch {
        throw new Error(ERROR_FAILED);
    }

};

await create();