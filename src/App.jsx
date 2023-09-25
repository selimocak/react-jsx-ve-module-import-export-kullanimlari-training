import React from "react"
import './App.css'
// import UserList, { SingleUser, ITEMS } from "./components/UserList"  
import AsdUserList, {SingleUser, ITEMS } from "./components/UserList"  
import ButtonComponent from "./components/Button"

function App() {
  // 1: Return ederken HTML yapisini Return etmen gerekiyor. (JSX) 
  // 2: Return ile sadece bir parent element gonderebilirsin.
  // 2.1: Fragment kullanilabilir <> .. </>
  // 3: {susluParantez ici javascript yapisi calistirmak icin kullanilir.}
  // 4: Bir etiketin muhakkak bitisi olmalidir (<etiket>..</etiket> -- <etiket />) 
  // 5: class bilgisi className diye yazilmali.. 
  // 6: return icinde aciklama icin yine susluParantez kullanilmali {/* aciklama */}
  // 7: style bilgisi {js icinde{obj olacak sekilde yazilmalidir}} -> {{backgroundColor: "yellowgreen", listStyle: "none", margin: 0, padding: 0}} ---- ayrica css taglari camelCase yazilmalidir.
  // 8: map kullanirken muhakkak key bilgisini gondermemiz gerekir.
  // 9: React componentlerinin ilk harfleri her zaman buyuk olmali.. HerKelimeninIlkHarfiBuyukOlmali
  const userName = "Selim"
  const users = ["Lorem", "Ipsum", "Dolor"]

  const products = [
    {id: 1,name: "MacBook Pro 14", inStock: false}, 
    {id: 2,name: "MacBook Pro 13", inStock: true}, 
    {id: 3,name: "iPad", inStock: false}, 
    {id: 4,name: "Lenovo", inStock: true}, 
    {id: 5,name: "Dell XPS", inStock: true}, 
  ]

  const mapUsers = users.map((item , index) => <li key={index}>{item}</li>) 
  
  const isActive = true

  const styles = {
    h2Style: {backgroundColor: "blue", fontSize: "26px"}  
  }

  return (
  <>
    <div className="bg-red">Div icindeki bilgi..</div> 
    <h1 style={{backgroundColor: `${isActive ? "gray" : "orange"}`}}>Merhaba (2 + 2 string bilgi) {2 + 2} {userName}</h1>
    <h2 style={styles.h2Style}>Kullanicilarin sayisi : {users.length}</h2>
    <div className="bg-red">BG Red Class ile eklendi</div>
    {/* asagidaki kullanim dogru degil.. */}
    <ul>
      <li>{users[0]}</li>
      <li>{users[1]}</li>
      <li>{users[2]}</li> 
    </ul>
    {/* dogru kullanim v1 */}
    <ul>
      {users.map((item, index) => <li key={index}>{item}</li>)}  
    </ul>
    {/* dogru kullanim v2 */}
    <ul style={{backgroundColor: "yellowgreen", listStyle: "none", margin: 0, padding: 0}}>  
      {mapUsers}
    </ul>

    <ul>
      {products
       .filter(item => item.inStock)
       .map(item =>
         <li key={item.id}>{item.name.toUpperCase()}</li>
         )
       } 
    </ul> 
    <ImgThumbnail />
    <AsdUserList />
    <SingleUser /> 
    <SingleUser /> 
    {/* 10 adet Single User component nasil olusturulur? */}
      {[...Array(10)].map((item, index) => <SingleUser key={index} /> )}       
    {ITEMS.map((item, index) => <span key={index}>{item}</span>)}
      <hr /> 
        <span btn="info" data="1111">normal html component</span>
      <hr />          
    <ButtonComponent className="btn btn-primary" info="deneme" dataId="1" />     
  </> 
  )  
}  
 

// // Yeni Component 
// function ImgThumbnail() {
//   return <img src="https://picsum.photos/600/250" alt="" style={{padding: "4px", borderRadius: "8px", border: "1px solid #bdc3c7"}} />  
// }



export default App

