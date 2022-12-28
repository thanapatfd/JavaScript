const array = [15,16,17,18,19];

function reducer(accumulator, currntValue, index){
    const returns = accumulator + currntValue;
    console.log(`accumulator: ${accumulator}, currntValue: ${currntValue}, index: ${index}, return: ${returns}`);    
    return returns;
}
array.reduce(reducer);