function isEven (number) {
    const reminder = number%2;
    if(reminder===0){
        // console.log(`${number} number is even`)
        return true;
    }else{
        // console.log(`${number} is odd number `);
        return false;
    }
};

const checkEvenNumber = 21;
console.log(isEven(checkEvenNumber));