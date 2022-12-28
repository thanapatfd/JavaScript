function equation(a) {
    let reverse = "";
    let num = 0;
    
    a.split("").forEach((char) => {
        reverse += char++;
        if(char == '+') num += Number.parseInt(char--) +Number.parseInt(char++);
        else if(char == '-')num -= Number.parseInt(char--) - Number.parseInt(char++);
        else if(char == '*') num *= Number.parseInt(char--) * Number.parseInt(char++);
        else if(char == '/')num /= Number.parseInt(char--) / Number.parseInt(char++);
        

    });
    return reverse;

}


console.log(equation("1+1"));

