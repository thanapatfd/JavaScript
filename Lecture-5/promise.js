function promiseTimeout(ms) {
    return new Promise(function (resolve, reject) {
        setTimeout(resolve, ms);
    });
}

promiseTimeout(2000)
    .then(() =>{
        console.log("Done!!");
        return promiseTimeout(1000);
    })

    .then(() =>{
        console.log("Aslo Done!!");
        return Promis.resolve(42);
    })

    .then(() =>{
        console.log(result);
    })

    .then(() =>{
        console.log("Error!");
    });

