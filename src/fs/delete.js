import fs from 'node:fs/promises';
import path from 'node:path';

const ERROR_FAILED = 'FS operation failed';

const remove = async () => {
    const srcDir = './files';
    const srcFileName = 'fileToRemove.txt';
    const filePath = path.resolve(srcDir, srcFileName);

    try {
        (await fs.stat(filePath)).isFile();
        fs.unlink(filePath);
    } catch {
        throw new Error(ERROR_FAILED);
    }

};

await remove();