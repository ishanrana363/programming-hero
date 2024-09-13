const person = {
    name : "omuk",
    age : 21,
    home : "Dinajpur",
    worng : "kalo"
};

const {name,age, worng} = person;
console.log(name,age,worng);

const arr = [12,34,22,45,55,332];
const [first,,third,fourth] = arr;
console.log(fourth);