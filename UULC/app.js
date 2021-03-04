let a = Math.PI
let b = 0
let c = (a / b)

if (c > a) {
    console.log("\x1b[32m" ,'Universe status is OK. Do your job, buddy.');
}
else {
    console.log("\x1b[41m", "\x1b[30m" ,'OH NOES. UNIVERSE WAS CONVERTED INTO A REALITY, WHERE YOU CAN DIVIDE BY ZERO. RUN.');
}
process.stdin.resume();