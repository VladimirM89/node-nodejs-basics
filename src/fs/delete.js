import fs from 'node:fs/promises';
import { fileURLToPath } from 'url';
import path from 'node:path';

const ERROR_FAILED = 'FS operation failed';

const remove = async () => {
    const srcDir = './files';
    const srcFileName = 'fileToRemove.txt';

    const currentFilename = fileURLToPath(import.meta.url);
    const currentDirname = path.dirname(currentFilename);

    const filePath = path.resolve(currentDirname, srcDir, srcFileName);

    try {
        (await fs.stat(filePath)).isFile();
        fs.unlink(filePath);
    } catch {
        throw new Error(ERROR_FAILED);
    }

};

await remove();