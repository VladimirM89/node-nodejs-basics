import fs from 'node:fs/promises';
import path from 'node:path';

const ERROR_FAILED = 'FS operation failed';

const rename = async () => {
    const srcDir = './files';
    const oldFileName = 'wrongFilename.txt';
    const oldFilePath = path.resolve(srcDir, oldFileName);

    const newFileName = 'properFilename.md';
    const newFilePath = path.resolve(srcDir, newFileName);

    const files = await fs.readdir(srcDir);

    try {
        if (!files.includes(newFileName)) {
            await fs.rename(oldFilePath, newFilePath);
        } else {
            throw new Error();
        }
    }
    catch {
        throw new Error(ERROR_FAILED);
    }
};

await rename();