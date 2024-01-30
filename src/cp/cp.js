import { fork } from 'node:child_process';
import { dirname } from "path";
import { fileURLToPath } from "node:url";

const spawnChildProcess = async (args) => {
    const __dirname = dirname(fileURLToPath(import.meta.url));

    const childProcess = fork(`${__dirname}/files/script.js`, args, {stdio: ['pipe', 'pipe', 'pipe', 'ipc']});

    process.stdin.on('data', (msg) => childProcess.stdin.write(msg));

    childProcess.stdout.on('data', (msg) => process.stdout.write(msg));

    childProcess.on('exit', () => process.exit())

};

spawnChildProcess(['--someArgument1', '--someArgument2']);
