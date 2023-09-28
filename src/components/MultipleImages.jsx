import { useState } from "react";
import ImgThumbnail from "./imgThumbnail";

// useState Ornegi

export default function MultipleImages() {
  const [imageCounter, setImageCounter] = useState(1)

  function handleAddImage() {
    setImageCounter(imageCounter + 1)
  }
  
  function handleSubtrackImage() {
    setImageCounter(imageCounter - 1)
  }

  return(<>
  <button id="add" onClick={handleAddImage}>Yeni gorsel ekle</button>
  <button id="subtrack" onClick={handleSubtrackImage}>Sil</button> 
  <hr /> 
  {
    [...Array(imageCounter)].map((item, index) => <ImgThumbnail key={index} imgSrc={`https://picsum.photos/id/${100 + index}/110/100`}/> )  
  }     
  </>)
} 