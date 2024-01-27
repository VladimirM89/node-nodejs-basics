import { Transform } from 'node:stream'

const transform = async () => {
    const readStream = process.stdin;
    const writeStream = process.stdout;

    const transforming = new Transform({
        transform(chunk, encoding, callback) {
            const upperString = `${chunk.toString().trim().split('').reverse().join('')}\n`;

            callback(null, upperString);
        }
    });

    readStream.pipe(transforming).pipe(writeStream);
};

await transform();