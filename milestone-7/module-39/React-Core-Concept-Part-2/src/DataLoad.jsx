import "./App.css"

const DataLoad = ({post}) => {
    const {userId,it,title,body} = post;
    console.log(`it is ${it}`)
  return (
    <div className="postData" >
        <p> user id : {userId} </p>
        <p> id : {it} </p>
        <p> title : {title} </p>
        <p> body : {body} </p>

    </div>
  ) 
}

export default DataLoad
