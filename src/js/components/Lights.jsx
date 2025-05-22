import React, { useState } from 'react'
import '../../styles/lights.css'

const Lights = () => {

   const [light, setLight] = useState("red");
   const [color, setColor] = useState('colorRed');

  const changeLight = () => {
    if (light === "red") {
      setLight("yellow")
      setColor("colorYellow");
    } else if (light === "yellow") {
      setLight("green")
      setColor("colorGreen");
    } else {
      setLight("red")
      setColor("colorRed");
    }
  };

  return (
    <div className='page-container'>
        <h1>Traffic Light Project</h1>
        <h4>Click the button below to chage the light</h4>
        <div className='lights-container'>
            <div className={`light red ${light === "red" ? "on" : "off"}`}></div>
            <div className={`light yellow ${light === "yellow" ? "on" : "off"}`}></div>
            <div className={`light green ${light === "green" ? "on" : "off"}`}></div>
        </div>
          <button onClick={changeLight} className={`color ${color === "colorRed" ? "colorRedOn" : "colorOff"} ${color === "colorYellow" ? "colorYellowOn" : ""} ${color === "colorGreen" ? "colorGreenOn" : ""}`}>Click Me!</button>
       
    </div>
  )
}

export default Lights;