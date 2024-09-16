import "./App.css";
import Todo from "./Todo";
import Person from "./Person";
import Singer from "./Singer";
import Book from "./Book";

function App() {
  // let singer = ["salman", "sakiv", "Sofiful raj", "josim", "bapraj"];
  // let actorNames = [ "saruk khan" , "salman khan" , "rikkiti roson", "Amir khan" ]
  // const singers = [
  //   { name: "Arijit Singh", age: 36, nationality: "Indian" },
  //   { name: "Adele", age: 35, nationality: "British" },
  //   { name: "Bruno Mars", age: 38, nationality: "American" },
  //   { name: "Shreya Ghoshal", age: 40, nationality: "Indian" },
  //   { name: "Beyoncé", age: 42, nationality: "American" },
  //   { name: "Ed Sheeran", age: 33, nationality: "British" },
  //   { name: "Taylor Swift", age: 34, nationality: "American" },
  //   { name: "Sonu Nigam", age: 50, nationality: "Indian" },
  //   { name: "Rihanna", age: 36, nationality: "Barbadian" },
  //   { name: "Billie Eilish", age: 22, nationality: "American" }
  // ];
  const bookItems = [
    { bookname: "The Alchemist", writter: "Paulo Coelho", price: 15 },
    { bookname: "1984", writter: "George Orwell", price: 12 },
    { bookname: "To Kill a Mockingbird", writter: "Harper Lee", price: 18 },
    { bookname: "The Great Gatsby", writter: "F. Scott Fitzgerald", price: 10 },
    { bookname: "The Catcher in the Rye", writter: "J.D. Salinger", price: 14 },
    { bookname: "Pride and Prejudice", writter: "Jane Austen", price: 16 },
    { bookname: "Moby Dick", writter: "Herman Melville", price: 20 },
    { bookname: "War and Peace", writter: "Leo Tolstoy", price: 22 },
    { bookname: "Crime and Punishment", writter: "Fyodor Dostoevsky", price: 17 },
    { bookname: "The Odyssey", writter: "Homer", price: 13 },
    { bookname: "Brave New World", writter: "Aldous Huxley", price: 14 },
    { bookname: "The Lord of the Rings", writter: "J.R.R. Tolkien", price: 25 },
    { bookname: "Harry Potter and the Sorcerer's Stone", writter: "J.K. Rowling", price: 19 },
    { bookname: "The Hobbit", writter: "J.R.R. Tolkien", price: 15 },
    { bookname: "The Brothers Karamazov", writter: "Fyodor Dostoevsky", price: 18 },
    { bookname: "One Hundred Years of Solitude", writter: "Gabriel Garcia Marquez", price: 16 },
    { bookname: "Anna Karenina", writter: "Leo Tolstoy", price: 20 },
    { bookname: "The Divine Comedy", writter: "Dante Alighieri", price: 21 },
    { bookname: "Don Quixote", writter: "Miguel de Cervantes", price: 22 },
    { bookname: "The Iliad", writter: "Homer", price: 13 }
  ];
  
  return (

    <>

    {
      bookItems?.map((book, index) => {
        return (
          <div key={index}>
            <Book book={book}></Book>
          </div>
        )
      })
    }

    {/* {
      singers?.map((singer, index) => {
        return (
          <div key={index}>
            <Singer singer={singer} ></Singer>
          </div>
        )
      })
    } */}
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
