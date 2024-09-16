import "./App.css";
import Todo from "./Todo";
import Person from "./Person";
import Singer from "./Singer";

function App() {
  // let singer = ["salman", "sakiv", "Sofiful raj", "josim", "bapraj"];
  // let actorNames = [ "saruk khan" , "salman khan" , "rikkiti roson", "Amir khan" ]
  const singers = [
    { name: "Arijit Singh", age: 36, nationality: "Indian" },
    { name: "Adele", age: 35, nationality: "British" },
    { name: "Bruno Mars", age: 38, nationality: "American" },
    { name: "Shreya Ghoshal", age: 40, nationality: "Indian" },
    { name: "Beyoncé", age: 42, nationality: "American" },
    { name: "Ed Sheeran", age: 33, nationality: "British" },
    { name: "Taylor Swift", age: 34, nationality: "American" },
    { name: "Sonu Nigam", age: 50, nationality: "Indian" },
    { name: "Rihanna", age: 36, nationality: "Barbadian" },
    { name: "Billie Eilish", age: 22, nationality: "American" }
  ];
  return (

    <>
    {
      singers?.map((singer, index) => {
        return (
          <div key={index}>
            <Singer singer={singer} ></Singer>
          </div>
        )
      })
    }
      {/* <Person name="khail" />
      {
        singer?.map((name, index) =>{
          return(
            <div key={index} >
              <Person name= {name}></Person>
            </div>
          )
        })
      }

      {
        actorNames?.map((actor, index) =>{
          return(
            <div key={index} >
              <Person actor= {actor}></Person>
            </div>
          )
        })
      } */}

      {/* <h1>Vite + React</h1>
      
      <h1>Hello react js</h1>

      <Student grade = "4" name  = "khail" ></Student>
      <Student grade = "5" name = "jodu" ></Student>



      <Device name = "lenavo" price = "20k" ></Device>
      <Device name = "hp" price = "30k" ></Device>
      <Device name = "asus" price = "55k" ></Device>
      <Device name = "walton" price="60k" ></Device>
      <Device name = "samsung" price = "65k" ></Device>
      <Device name = "mackbook" price = "100k" ></Device> */}

      {/* <Todo name = "React js" isDone = {true} ></Todo>
      <Todo name = "React js core concepts" isDone = {false} ></Todo>
      <Todo name = "Html" isDone = {true} ></Todo>
      <Todo name = "css" isDone = {false} ></Todo>
      <Todo name = "Tailwind CSS" isDone = {true} ></Todo>
      <Todo name = "NodeJs" isDone = {true} ></Todo>
      <Todo name = "Express JS" isDone = {false} ></Todo> */}
    </>
  );
}

export default App;

// function Student ({name,grade}) {
//   const styleList = {
//     color : "white",
//     fontSize : "30px",
//     backgroundColor : "gray",
//     padding : "20px",
//     borderRadius : "20px",
//     border : "2px solid red",
//     marginTop : "20px"
//   }
//   return (
//     <div style={styleList} >
//       <h1  >name : {name} grade : {grade} </h1>
//     </div>
//   )
// }

// function Device ({name,price}) {
//   return(
//     <div>
//       <h1>Laptop name is : {name} price : {price}  </h1>

//     </div>
//   )
// }
