import React, { useEffect, useState } from "react";

function App() {
  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: 30 }}>
      <GrowingButton />
    </div>
  );
}

const GrowingButton = () => {
  const [size, setSize] = useState(100)
  const [speed, setSpeed] = useState(true)

let min = 50
let max = 200
let grow = 10

 useEffect(() => {
const timeout = setInterval(() => {
  if (speed && size < max) {
   setSize((pre) => pre + grow)
    } else if (!speed && size > min) {
 setSize((pre) => pre - grow);
 }
  }, 100); 

    return () => clearInterval(timeout);
  }, [size, speed]); 

  const handleClick = () => {
    setSpeed(!speed); 
  };

  return (
    <button
      onClick={handleClick}
      style={{
        width: `${size}px`,
        height: `${size}px`,  
        fontSize: '16px',
        transition: 'all 0.3s ease',  
        backgroundColor: '#4CAF50', 
        color: 'white', 

      }}
    >
      {speed ? 'Küçült' : 'Büyüt'} 
    </button>
  );
};

export default App;
