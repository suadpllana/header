import React, { useState, useEffect, useRef } from 'react';
import video from "./assets/video.mp4";
import image1 from "./assets/first.png";
import image2 from "./assets/second.png";
import image3 from "./assets/third.png";

const Header = () => {
  const [count, setCount] = useState(0);
  const [playStatus , setPlayStatus] = useState(false)  

  const intervalRef = useRef(null); 

  const image_array = [image1, image2, image3];

  const text = [
    {
      text1: "Dive into",
      text2: "What you love"
    },
    {
      text1: "Indulge",
      text2: "your passion"
    },
    {
      text1: "Give in",
      text2: "To your passions"
    }
  ];

  
  const startInterval = () => {
    clearInterval(intervalRef.current); 
    intervalRef.current = setInterval(() => {
      setCount(prev => (prev + 1) % 3); 
    }, 4000);
  };

  useEffect(() => {
    startInterval(); 

    return () => clearInterval(intervalRef.current); 
  }, []);

  const handleButtonClick = (index) => {
    setCount(index); 
    startInterval();
    setPlayStatus(false)
  };



  return (
    <div className="container">
        {!playStatus ?   <img className="background" src={image_array[count]} alt="" /> : <></>}
    
      {playStatus ? <video autoPlay muted loop controls className="background">
        <source src={video} type="video/mp4"/>
         </video> : <></>}
      <nav className="navContainer">
        <h2>EV-olution</h2>
        <div className="links">
          <a href="#">Home</a>
          <a href="#">Explore</a>
          <a href="#">About</a>
          <button>Contact</button>
        </div>
      </nav>
      <h1>
        {text[count].text1} <br />
        {text[count].text2}
      </h1>
      <div className="dotsContainer">
        <button onClick={() => handleButtonClick(0)} className={count === 0 ? "dots orange" : "dots"}>&#9675;</button>
        <button onClick={() => handleButtonClick(1)} className={count === 1 ? "dots orange" : "dots"}>&#9675;</button>
        <button onClick={() => handleButtonClick(2)} className={count === 2 ? "dots orange" : "dots"}>&#9675;</button>
      </div>
      <h2 onClick={() => setPlayStatus(!playStatus)}>{playStatus ? "⏸️Stop the video" : "▶️Play the video"}</h2>
    </div>
  );
};

export default Header;
