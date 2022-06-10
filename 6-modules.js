const os = require('os');
const user = os.userInfo();
console.log(user);

console.log(`the system uptime ${os.uptime}`);

const currentOS = {
    name: os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMemo:os.freemem()
}
console.log(currentOS)