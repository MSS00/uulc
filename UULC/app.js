var colors = require('colors');
colors.enable();
colors.setTheme({
    run: ['black', 'bgRed']
});
colors.setTheme({
    check: ['black', 'bgYellow']
});

let a = Math.PI
let b = 0
let c = (a / b)
let d = Number.POSITIVE_INFINITY

if (c = d) {
    console.log('Universe status is OK. Do your job, buddy.'.green);
}
else {
    console.log('OH NOES. SOMETHING TERRIBLE HAPPENING IN YOUR UNIVERSE. RUN AS FAST AS YOU CAN.'.run);
}
setTimeout(() => console.log('Ok for real, just check whats behind your window. If you see nothing - run.'.check), 40000);
process.stdin.resume();
