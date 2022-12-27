const ArrayOfNumber = [1,2,3,4];

const sum = ArrayOfNumber.reduce((accumulator, currntValue) => {
    return accumulator + currntValue;
})
console.log(sum); // 10