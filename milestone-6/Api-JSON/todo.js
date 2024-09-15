function displayTodo () {
    fetch("https://jsonplaceholder.typicode.com/todos")
    .then((res)=>res.json())
    .then((data)=>loadTodo(data))
}

function loadTodo (data) {
    let todoDiv = document.getElementById("todo-section");
    for(let item of data){
        let div = document.createElement("div");
        div.classList.add("post")
        div.innerHTML = `
            <p> user id is ${item.userId} </p> 
            <h2> id is ${item.id}</h2> 
            <h2> title is ${item.title} </h2>
            <h1> ${item.completed===true ? "todo completed" : "not completed"} </h1>
        `

        todoDiv.appendChild(div)
    }
}