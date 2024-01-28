import { fork } from 'node:child_process';

const spawnChildProcess = async (args) => {
    console.log(args);

    const childProcess = fork('./src/cp/files/script.js', args, {stdio: ['pipe', 'pipe', 'pipe','ipc']});

    process.stdin.pipe(childProcess.stdin);

    childProcess.stdout.pipe(process.stdout);

    childProcess.send('process.stdin');

};

spawnChildProcess(['someArgument1', 'someArgument2']);
