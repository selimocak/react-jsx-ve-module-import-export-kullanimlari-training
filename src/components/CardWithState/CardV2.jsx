import { useState } from "react";
import CardFooter from "./CardFooter";
import CardHeader from "./CardHeader";

export default function CardV2() {
  const [like, setLike] = useState(0)
  
  const handleClick = () => setLike(prev => prev + 1) 

  return (
    <div> 
      <CardHeader like={like} />
      <button onClick={handleClick}>Like</button>
        <ul>
          <li>Lorem.</li>
          <li>Accusamus.</li>
          <li>Harum.</li>
        </ul>
      <CardFooter like={like} />    
    </div>
  )
}