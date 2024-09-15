function dataLoad () {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then((res)=>res.json())
    .then(data=>dataOtherFun(data))
};

function dataOtherFun (data) {
    console.log(data)
}


function dataList () {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res)=>res.json())
    .then((data)=>otherData(data))
}

function otherData (data) {
    for(let item of data){
        let ulList = document.getElementById("ul-data");
        let li = document.createElement("li");
        li.innerText = item.name ;
        ulList.appendChild(li)
    }
}