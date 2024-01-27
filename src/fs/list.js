import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'url';

const ERROR_FAILED = 'FS operation failed';

const list = async () => {
    const srcDir = './files';

    const currentFilename = fileURLToPath(import.meta.url);
    const currentDirname = path.dirname(currentFilename);

    const srcPath = path.join(currentDirname, srcDir);

    try {
        (await fs.stat(srcPath)).isDirectory();
        const files = await fs.readdir(srcPath);
        console.log(files);
    } catch {
        throw new Error(ERROR_FAILED);
    }
};

await list();