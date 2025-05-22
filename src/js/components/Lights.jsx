import React, { useState } from 'react'
import '../../styles/lights.css'

const Lights = () => {

   const [light, setLight] = useState("red");

  const changeLight = () => {
    if (light === "red") {
      setLight("yellow");
    } else if (light === "yellow") {
      setLight("green");
    } else {
      setLight("red");
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
          <button onClick={changeLight} className='btn btn-primary'>Click to change the light</button>
       
    </div>
  )
}

export default Lights;