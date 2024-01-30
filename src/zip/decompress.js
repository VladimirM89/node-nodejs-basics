import { createGunzip } from 'node:zlib';
import fs from 'node:fs';
import { fileURLToPath } from 'url';
import path from 'node:path';

const decompress = async () => {
    const srcDir = './files';
    const srcFileName = 'archive.gz';
    const dstFileName = 'fileToCompress.txt';

    const currentFilename = fileURLToPath(import.meta.url);
    const currentDirname = path.dirname(currentFilename);

    const fullSrcFilePath = path.resolve(currentDirname, srcDir, srcFileName);
    const fullDstFilePath = path.resolve(currentDirname, srcDir, dstFileName);

    try {
        const readStream = fs.createReadStream(fullSrcFilePath);
        const writeFileStream = fs.createWriteStream(fullDstFilePath);

        const gunzip = createGunzip();

        readStream.pipe(gunzip).pipe(writeFileStream);
    } catch(error) {
        throw error;
    }
};

await decompress();