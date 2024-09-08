let sum = 0
function arraySum(numbers){
    for(let i=0; i<numbers.length;i++){
        let index = i;
        let element = numbers[index];
        sum = sum+element
    }
    return sum;
}

const numbers = [12,20,49,10,50,32,9];

console.log(arraySum(numbers));