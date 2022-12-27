const start = Date.now();
// Output : starting timeer...


setTimeout(() => {
    const millis = Date.now() - start;

    console.log(`second elapsed = ${Math.floor(millis / 1000)}`);

    //Output : seconds elapsed = 2
}, 2000);