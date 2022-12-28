const str = 'The quick brown fox jumped over the lazy dog.';

const words = str.split(' ');
console.log(words[3]);//should be "fox"

const chars = str.split('');
console.log(chars[8]);//should be "k"