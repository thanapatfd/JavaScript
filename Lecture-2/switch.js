const status1 = 700;

switch (status1) {
    case 200:
        console.log('OK!');
        break;
    case 400:
    case 500:
        console.log('Error');
        break;
    default:
        console.log('Unkonw status');
}