import fs from 'node:fs/promises';

const ERROR_FAILED = 'FS operation failed';

const copy = async () => {
    const src = './files';
    const dest = './files_copy';

    try {
        await fs.cp(src, dest, { recursive: true, errorOnExist: true, force: false });
    } catch {
        throw new Error(ERROR_FAILED);
    }
};

await copy();
