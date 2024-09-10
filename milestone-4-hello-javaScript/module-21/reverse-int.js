// let name = "ishan rana";
// let splitData = name.split('')
// let reverseData = splitData.reverse()
// console.log(reverseData)

let name = "ishan rana";
let splitData = name.split('');
let reverseData = [];

for (let i = splitData.length - 1; i >= 0; i--) {
    reverseData.push(splitData[i]); // Push each character in reverse order
}

console.log(reverseData.join('')); // Join the reversed array back into a string
