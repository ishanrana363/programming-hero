import { useEffect } from "react";
import { useState } from "react";
import Country from "../country/Country";

const Countries = () => {
  const [data, setData] = useState([]);
  const [visitedCountry, setVisitedCountry] = useState([]);
  const [flagCountry, setFlagCountry] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error:", error));
  }, []);

  const handleVisitCountry = (countryCode) => {
    console.log("visited country list");
    setVisitedCountry([...visitedCountry,countryCode])
  };

  const handleFlagCountry = (flagData)=>{
    console.log(flagData.flags.png)
    setFlagCountry([...flagCountry, flagData])
  }
  

  return (
    <>
    <div>
        <h1>visited countery</h1>
        {
            visitedCountry.map((country, index) => (
              <div key={index}>
                {country.name.official}
              </div>
            ))
        }
        <h1>Visited country flag img</h1>
        {
            flagCountry.map((flag, index) => (
              <div key={index}>
                <img src={flag.flags.png} alt="flag" />
              </div>
            ))
        }
        
    </div>
      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-10  ">
        {data.map((item, i) => {
          return (
            <div key={i}>
              <div className="">
                <Country
                handleFlagCountry = {handleFlagCountry}
                  handleVisitCountry={handleVisitCountry}
                  countryData={item}
                ></Country>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Countries;
