import { useEffect, useState } from "react";
import "./App.css";
import DataLoad from "./DataLoad";
import Even from "./Even";

function App() {
  const [datas, setData] = useState([]);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);
  return (
    <>
      <h1>Vite + React</h1>
      <Even></Even>
      {
        datas.map((post,i)=>{
          return <div key={i} >
            <DataLoad post={post} ></DataLoad>
          </div>
        })
      }
    </>
  );
}

export default App;
