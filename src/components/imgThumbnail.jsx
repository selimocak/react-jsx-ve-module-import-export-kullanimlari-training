export default function ImgThumbnail({imgSrc, imgAlt}) {
  return ( 
    <img 
      src={imgSrc} 
      alt={imgAlt}
      style={{padding: "4px", borderRadius: "8px", border: "1px solid #bdc3c7", width: "100%"}} 
    />    
  ) 
}   