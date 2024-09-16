// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(5)


// setTimeout(()=>{
//     console.log(6)
// },4000)


let num=0

const id = setInterval(()=>{
    num++
    if(num>10){
        clearInterval(id)
    }
    console.log(id,num)
},1000)