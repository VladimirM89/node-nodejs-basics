const PREFIX = "--";

const parseArgs = () => {
    const argsVariable = process.argv.slice(2);

    const result = argsVariable.reduce((acc, value, index) => {
        const nextValue = argsVariable[index + 1];
        if (nextValue && value.startsWith('--')) {
            return [...acc, `${value.slice(2)} is ${nextValue}`]
        }
        return acc
    }, [])


    console.log(result.join('; '));
};

parseArgs();