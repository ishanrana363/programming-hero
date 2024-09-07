const sentence = "i am learning wev dev";
// let reverse = ''
// for(const letter of sentence){
//     reverse = letter+reverse;
// }

// console.log(reverse)
// let reverse = ''
// for(let i = 0; i<sentence.length;i++){
//     reverse = sentence[i] + reverse
// }
// console.log(reverse);

const data = sentence.split('').reverse().join('');
console.log(data);