// const man = {
//     name : "kodu",
//     height : 6,
//     age : 32,
//     dis : "dinajpur",
//     isHonest : true
// };

// console.log(typeof man)

// const parseValuetoJson = JSON.stringify(man);

const shop = {
    address : {
        streetNo : 4,
        placeName : "Dhaka",
        city : "Dhaka",
    },
    product : ['mik','monitor','kolom','desktop'],
    isOpen : true,
};

const prseJson = JSON.stringify(shop);

const prseString = JSON.parse(prseJson);
console.log(prseString)