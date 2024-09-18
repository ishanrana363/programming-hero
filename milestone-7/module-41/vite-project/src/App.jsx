import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Watch from './components/watch/Watch'

function App() {
  const [watchData, setWatchData] = useState(0)

  useEffect(()=>{
    fetch("watch.json")
     .then(response => response.json())
     .then((data)=>{setWatchData(data)})
  },[])

  return (
    <>
      
      <h1>Vite + React</h1>

      {
        watchData&&watchData?.map((watch, index)=>{
          return(
            <div key={index} >
              <Watch watch = {watch} ></Watch>
            </div>
          )
        })
      }


      
      
    </>
  )
}

export default App
