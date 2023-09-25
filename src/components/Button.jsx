// export default function Button() {
//   return <button>Button Component</button> 
// } 


// // 1. yontem: 
// export default function Button(props) {
//   // props = object 
//   console.log(props)
//   return <button className={props.className} data-id={props.dataId}>{props.info}</button>   
// }

// // 2. yontem :
// export default function Button(props) {
//   // props = object
//   const {className, dataId, info} = props
//   return <button className={className} data-id={dataId}>{info}</button>  
// }

// 3. yontem : 
export default function Buttoni( {className, dataId, info} ) {
  return <button className={className} data-id={dataId}>{info}</button> 
} 

// export default Button  (Bu yontem ile ustteki yontem arasinda bir fark yok. ama bu yontemi kullanmayi tercih edebiliriz.) 

