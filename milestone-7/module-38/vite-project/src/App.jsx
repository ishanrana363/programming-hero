
import './App.css'

function App() {

  return (
    <>
      
      <h1>Vite + React</h1>
      
      <h1>Hello react js</h1>

      <Student grade = "4" name  = "khail" ></Student>
      <Student grade = "5" name = "jodu" ></Student>



      <Device name = "lenavo" price = "20k" ></Device>
      <Device name = "hp" price = "30k" ></Device>
      <Device name = "asus" price = "55k" ></Device>
      <Device name = "walton" price="60k" ></Device>
      <Device name = "samsung" price = "65k" ></Device>
      <Device name = "mackbook" price = "100k" ></Device>
      

    </>
  )
}

export default App;


function Student ({name,grade}) {
  const styleList = {
    color : "white",
    fontSize : "30px",
    backgroundColor : "gray",
    padding : "20px",
    borderRadius : "30px",
    border : "2px solid red",
    marginTop : "20px"
  }
  return (
    <div style={styleList} >
      <h1  >name : {name} grade : {grade} </h1>
    </div>
  )
}

function Device ({name,price}) {
  return(
    <div>
      <h1>Laptop name is : {name} price : {price}  </h1>
      
    </div>
  )
}
