
function oddNumber (odd){
    const pushArrayData = [];
    for(let i = 0;i<odd.length;i++){
        let index = i;
        let element = odd[index];
        if(element%2!==0){
            pushArrayData.push(element);
        }
    }
    return pushArrayData;
}


function sumArray (numbers) {
    let sum = 0;

    for(let i = 0; i<numbers.length;i++){
        let index = i;
        let element = numbers[index];
        sum = sum+element;
    }
    return sum;
}

const numbers = [12,49,3,21,54,9,2,23];
const oddNumberArray = oddNumber(numbers);
console.log(oddNumberArray);
console.log(sumArray(oddNumberArray));