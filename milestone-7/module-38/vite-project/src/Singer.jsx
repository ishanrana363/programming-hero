
const Singer = ({singer}) => {
    console.log(singer);
    const {name,age,nationality} = singer;
    const singerList = {
       backgroundColor: "purple",
       color : "white",
       padding : "15px",
       marginTop : "20px",
       borderRadius : "10px",
       border : "2px solid blue"
    }
  return (
    <div style={singerList} >
        <h1  > Name is : {name} </h1>
        <h2> Age is :  {age}</h2>
        <p> Nationality is : {nationality} </p>
    </div>
  )
}

export default Singer
