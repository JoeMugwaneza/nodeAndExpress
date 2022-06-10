
// OS MODULE
const os = require('os');
const user = os.userInfo();
// console.log(user);

// console.log(`the system uptime ${os.uptime}`);

const currentOS = {
    name: os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMemo:os.freemem()
}
// console.log(currentOS)

// PATH MODULE
const path = require('path');
// console.log(path.sep);

const filePath = path.join('/content', "subfolder", "test.txt");
// console.log(filePath);

const base = path.basename(filePath);
// console.log(base);

const obsulute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(obsulute);