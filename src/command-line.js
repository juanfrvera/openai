import readline from 'readline';

export function readCommand() {
    return new Promise((resolve) => {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
        });
        rl.question(`Insert query: `, query => {
            rl.close();
            resolve(query);
        });
    });
}