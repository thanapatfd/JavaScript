const status1 = 500;
if(status1 === 200){
    console.log('OK!');
} else if(status1 === 400 || status1 === 500){
    console.log('Error');
} else {
    console.log('Unknow status');
}