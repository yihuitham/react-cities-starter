import React, { useState } from "react";
import "./styles.css";
import imagesArr from "./imageData";
import SmallImage from "./components/SmallImage";

export default function App() {
  const [bigImage, setBigImage] = useState(imagesArr[0].img);

  const enlargeImg = (event) => {
    setBigImage(event.target.getAttribute("src"));
  };

  const smallImages = imagesArr.map((element, index) => {
    return (
      <SmallImage
        key={index}
        img={element.img}
        city={element.city}
        enlargeImg={enlargeImg}
      />
    );
  });
  // CREATE A VARIABLE CALLED images THAT LOOPs OVER THE imagesArr AND RETURNS AN <IMG> ELEMENT
  // ASSIGN ALL OF THE PROPERTIES THAT IT NEEDS: src, alt, className, key INCLUDING AN onClick EVENT THAT CALLS THE HANDLE EVENT FUNCTION AND PASSES IT THE IMG URL

  return (
    <div className="App">
      <h1>Cities Of The World</h1>
      <div id="wrapper">
        <div id="thumbnails">{smallImages}</div>
        <img src={bigImage} id="bigimage" alt="bigImage" />
      </div>
    </div>
  );
}
