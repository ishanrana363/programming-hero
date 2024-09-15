function displayData () {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res)=>res.json())
    .then((data)=>dataList(data));
}

function dataList(data){
    let postContainer = document.getElementById("post-container");
    for(let item of data){
        let div = document.createElement("div");
        div.innerHTML = `
        <h4> User id : ${item.userId}   </h4>
        <h1> title : ${item.title} </h1> <br/>

        `
        postContainer.appendChild(div);
    }
}

displayData()