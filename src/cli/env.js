const PREFIX = "RSS_";

const parseEnv = () => {
    const envVariables = Object.entries(process.env);

    const rssEnv = envVariables.reduce((acc, [key, value]) => {
        if (key.startsWith(PREFIX)) {
            return [...acc, `${key}=${value}`]
        }
        return acc;
    }, []);

    console.log(rssEnv.join('; '));
};

parseEnv();