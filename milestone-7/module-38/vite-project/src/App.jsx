
import './App.css'

function App() {

  return (
    <>
      
      <h1>Vite + React</h1>
      
      <h1>Hello react js</h1>

      <Student></Student>
      <Student></Student>
      <Device></Device>
      
    </>
  )
}

export default App;


function Student () {
  const styleList = {
    color : "red",
    fontSize : "50px",
    backgroundColor : "blue",
    padding : "20px",
    borderRadius : "120px",
    border : "2px solid red",
    marginTop : "20px"
  }
  return (
    <div  >
      <h1  >name : ishan</h1>
    </div>
  )
}

function Device () {
  return(
    <div>
      <h1>Laptop</h1>
    </div>
  )
}
