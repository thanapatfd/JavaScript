function reverseString(value) {
    let reverse = "";


    value.split("").forEach((char) => {
        reverseValue = char + reverseValue;
    });
    return reverseValue;
}

console.log(reverseString("Revers Me"));