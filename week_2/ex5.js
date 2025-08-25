const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function isShortsWeather(temp) {
    return temp >= 35 ? true : false;
}

rl.question("Enter the temperature: ", (num) => {
    console.log(isShortsWeather(Number(num)));
    rl.close();
});