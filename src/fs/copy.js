import fs from 'node:fs/promises';
import { fileURLToPath } from 'url';
import path from 'path'

const ERROR_FAILED = 'FS operation failed';

const copy = async () => {
    const src = './files';
    const dest = './files_copy';

    const currentFilename = fileURLToPath(import.meta.url);
    const currentDirname = path.dirname(currentFilename);

    const srcPath = path.join(currentDirname, src);
    const destPath = path.join(currentDirname, dest);

    try {
        await fs.cp(srcPath, destPath, { recursive: true, errorOnExist: true, force: false });
    } catch {
        throw new Error(ERROR_FAILED);
    }
};

await copy();
