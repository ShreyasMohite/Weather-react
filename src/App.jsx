import React, { useEffect, useState } from "react";
import "./App.css";

const App=()=>{
  const [search,setsearch]=useState("pune");
  const Inputevent=(events)=>setsearch(events.target.value);
  const [city,setcity]=useState(null);
  const [weather,setweather]=useState(null);

  useEffect(()=>{
    const fetchdata=async()=>{
        const data=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=43ee602cd3f013c1a0c2fa793155236e`);
        const report= await data.json();
        setcity(report.main);
        setweather(report.weather);
    }
    fetchdata();
  },[search])
  
  return (
    <>
    <div className="content-center">
      <div className="card">
        <div className="title">
          <h1>Wheather App</h1>
        </div>
        <div className="inputs">
          <input type="search" name="" value={search} onChange={Inputevent} id="" placeholder="please enter city name"/>
        </div>
        <div className="output">
          {!city?(
          <p>No data found</p>
          ):(
            <>
          <h2>{search}</h2>
          <h2>{city.temp}</h2>
          
            </>
          )}
          {!weather?(<p>no data found</p>):(
            <>
            <h2>{weather[0].main}</h2>
            </>
          )}

        </div>
      </div>
    </div>
    </>
  )
}

export default App;