// function multiply (number){
//     let result = 1
//     for(let i = 1; i<number;i++){
//         result = result*i;
//     }
//     return result;
// }


// const number = 7;

// console.log(multiply(number));

function multiply (number) {
    let result = 1;
    let num = 1;
    while(number>=num){
        result = result*num;
        num++;
    }
    return result;
};

const number = 9
console.log(multiply(number));