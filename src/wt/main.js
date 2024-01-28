import os from 'os';
import { Worker, workerData } from 'node:worker_threads';
import { fileURLToPath } from 'url';
import path from 'path';

const performCalculations = async () => {
    const workerNameFile = 'worker.js';
    const currentFilename = fileURLToPath(import.meta.url);
    const currentDirname = path.dirname(currentFilename);

    const pathToWorkerFile = path.join(currentDirname, workerNameFile);

    const cpuNumbers = os.cpus();

    const array = await Promise.allSettled(cpuNumbers.map((_, index) => {
        const worker = new Worker(pathToWorkerFile, {workerData: 10 + index});

        return new Promise((resolve, reject) => {

            worker.on('message', (data) => {
                resolve(data);
            })

            worker.on('error', (msg) => {
                reject(msg)
            })
        })
    }))

    const resultArray = array.map(({status, value}) => {
        return {
            status: status === 'fulfilled' ? 'resolved' : 'error',
            data: status === 'fulfilled' ? value : null
        }
    })

    console.log(resultArray);

};

await performCalculations();