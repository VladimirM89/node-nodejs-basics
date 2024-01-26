import fs from 'node:fs/promises';
import path from 'node:path';

const ERROR_FAILED = 'FS operation failed';
const TEXT = 'I am fresh and young';

const create = async () => {
    const srcDir = './files';
    const newFileName = 'fresh.txt';
    const newFilePath = path.resolve(srcDir, newFileName);

    const files = await fs.readdir(srcDir);

    if (!files.includes(newFileName)) {
        fs.writeFile(newFilePath, TEXT);
    } else {
        throw new Error(ERROR_FAILED);
    }
};

await create();