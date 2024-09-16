
import './App.css'

function App() {

  return (
    <>
      
      <h1>Vite + React</h1>
      
      <h1>Hello react js</h1>

      <Student></Student>
      <Student></Student>



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


function Student () {
  // const styleList = {
  //   color : "red",
  //   fontSize : "50px",
  //   backgroundColor : "blue",
  //   padding : "20px",
  //   borderRadius : "120px",
  //   border : "2px solid red",
  //   marginTop : "20px"
  // }
  return (
    <div  >
      <h1  >name : ishan</h1>
    </div>
  )
}

function Device (props) {
  return(
    <div>
      <h1>Laptop name is : {props.name} price is : ${props.price} </h1>
      
    </div>
  )
}
