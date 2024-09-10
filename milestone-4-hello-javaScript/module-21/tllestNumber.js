function tallestNumber(numbers) {
    let num = numbers[0]; // Start with the first number
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > num) {
            num = numbers[i]; // Update num if current element is larger
        }
    }
    return num; // Return the largest number after loop finishes
}

let numbers = [30, 40, 190, 200, 100, 150, 180,1000];
const tallestNum = tallestNumber(numbers);

console.log(`Tallest number is ${tallestNum}`);
