import { createGzip } from 'node:zlib';
import fs from 'node:fs';
import { fileURLToPath } from 'url';
import path from 'node:path';

const compress = async () => {
    const srcDir = './files';
    const srcFileName = 'fileToCompress.txt';
    const dstFileName = 'archive.gz';

    const currentFilename = fileURLToPath(import.meta.url);
    const currentDirname = path.dirname(currentFilename);

    const fullSrcFilePath = path.resolve(currentDirname, srcDir, srcFileName);
    const fullDstFilePath = path.resolve(currentDirname, srcDir, dstFileName);

    try {
        const readStream = fs.createReadStream(fullSrcFilePath);
        const writeFileStream = fs.createWriteStream(fullDstFilePath, {flags: 'wx+'});

        const gzip = createGzip();

        readStream.pipe(gzip).pipe(writeFileStream);
    } catch(error) {
        throw error
    }

};

await compress();