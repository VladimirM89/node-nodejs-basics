import fs from 'node:fs/promises';

const ERROR_FAILED = 'FS operation failed';

const list = async () => {
    const srcDir = './files';

    try {
        (await fs.stat(srcDir)).isDirectory();
        const files = await fs.readdir(srcDir);
        console.log(files);
    } catch {
        throw new Error(ERROR_FAILED);
    }
};

await list();