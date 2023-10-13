import { useState } from "react";
import ImgThumbnail from "./imgThumbnail";

// useState Ornegi

export default function MultipleImages() {
  const [imageCounter, setImageCounter] = useState(1)

  // function handleAddImage() {
  // //   setImageCounter(
  // //     (prev) => {
  // //       return prev + 1
  // //     }
  // //   )
  // setImageCounter(prev => prev + 1)
  // } 

  
  // function handleSubtrackImage() {
  //   setImageCounter()
  // }

  function handleClick(event) {
    console.log(event.target.id)
    // 1> id bilgisine bak ve add ise prev + 1 degilse prev - 1 calissin.
    // 2> prev -1 0 dan buyukse calissin.
    event.target.id === "add" ? 
      setImageCounter(prev => prev + 1) : 
      setImageCounter(prev => prev > 0 ? prev - 1 : prev  ) 
    console.log(imageCounter); 
  }

  return(<>
  <button id="add" onClick={handleClick}>Yeni gorsel ekle</button>
  <button id="subtrack" onClick={handleClick}>Sil</button> 
  <hr /> 
  {
    [...Array(imageCounter)].map((item, index) => <ImgThumbnail key={index} imgSrc={`https://picsum.photos/id/${100 + index}/110/100`}/> )  
  }     
  </>)
 } 











