import fs from 'node:fs/promises';
import { fileURLToPath } from 'url';
import path from 'node:path';

const ERROR_FAILED = 'FS operation failed';

const rename = async () => {
    const srcDir = './files';
    const oldFileName = 'wrongFilename.txt';

    const currentFilename = fileURLToPath(import.meta.url);
    const currentDirname = path.dirname(currentFilename);

    const srcPath = path.join(currentDirname, srcDir);

    const oldFilePath = path.join(currentDirname, srcDir, oldFileName);

    const newFileName = 'properFilename.md';
    const newFilePath = path.join(currentDirname, srcDir, newFileName);

    try {
        const files = await fs.readdir(srcPath);

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