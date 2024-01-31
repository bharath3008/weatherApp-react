import axios from "axios";
import { useState } from "react";

function App() {

    const [deg,setDeg] = useState("143");
    const [city,setCity] = useState("Ranipet");
    const [desc,setDesc] = useState("Raining");
    const [enteredValue,setEnteredvalue] = useState("");

    function handleInput(event){
        console.log(event.target.value);
        setEnteredvalue(event.target.value);
    }

    function getData(){
        var weather = axios(`https://api.openweathermap.org/data/2.5/weather?q=${enteredValue}&appid=ee949cc184264765ad2f53c854eb1a81`)

        weather.then(function(dalta){
            console.log(dalta.data)
            setDeg(dalta.data.main.temp)
            setCity(dalta.data.name)
            setDesc(dalta.data.weather[0].description)
        })
    }
  return (
    <div className="flex flex-row justify-center h-[100vh] items-center">
      <div
        style={{
          backgroundImage: "linear-gradient(120deg, #a6c0fe 0%, #f68084 100%)",
        }} className="p-2 rounded-md shadow"
      >
        <h2 className="font-medium">Hey!⛅</h2>
        <p className="text-xs">Do you want to know the weather report :)</p>
        <input onChange={handleInput} type="text" className="rounded-md h-6 text-sm mt-2 p-1 outline-none" placeholder="City Name?"></input>
        <br />
        <button onClick={getData} className="bg-black text-white rounded-lg p-1 text-xs mt-2">Get Report ⚡</button>

        <p className="text-xs mt-2">Degree: {deg} | City: {city} | Weather: {desc}</p>
      </div>

    </div>
  );
}

export default App;
