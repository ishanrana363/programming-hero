import { useState } from "react";

const Country = ({ countryData,handleVisitCountry,handleFlagCountry }) => {
    const { name, flags ,capital,population} = countryData;
    const [viisted, setVisited] = useState(false);
    
    const handleVisit = () => {
        setVisited(!viisted);
    }

  
  return (
    <>
      <div >
        <div className="border p-8 " >
          <img src={flags.png} alt="" />
          <h3> {name?.common} </h3>
          <p>Capital city : {capital}</p>
          <p> Population : {population} </p>
          <button onClick={handleVisit} className="btn my-4 btn-primary " > { viisted ? "Visited" : "OnGoing" } </button>
          <button onClick={()=>{handleVisitCountry(countryData)}} className="btn btn-outline" >Mark visited</button>
          <button className="btn btn-danger" onClick={(()=>{handleFlagCountry(countryData)})} >Get flag img </button>
          {
            viisted ? "I already visited" : "I am not visited this   country"
          } 
        </div>
      </div>
    </>
  );
};

export default Country;
