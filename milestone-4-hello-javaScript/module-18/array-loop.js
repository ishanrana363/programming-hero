var numbers = [12, 23, 45, 60, 87, 24];

for (let i = 0; i < numbers.length; i++) {
    var number = numbers[i];
    if (number>=87) {
        continue;
    }
    console.log(number);
}
