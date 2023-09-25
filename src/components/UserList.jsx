// https://react.dev/learn/importing-and-exporting-components 

import Button from "./Button"
import USERS from "../data/users" 

const ITEMS = [
  1,2,3
] 

function UserList() {
  return (
  <> 
    <h2>Kullanici List</h2> 
    {/* <ul>
      <li>Lorem.</li>
      <li>Dicta.</li>
      <li>Labore.</li>
      <li>Dolorem?</li>
      <li>Rerum!</li>
    </ul> */}
    <ul>
      {USERS.map((user, index) => <li key={index}>{user}</li>)} 
    </ul>
    <hr />
    <Button /> 
    <hr /> 
  </>
  ) 
}

// Not : Bir component dosyasi icinde genellikle 1 component bekleriz.. ikincisini baska dosyaya almamiz gerekir. 
function SingleUser() {
  //aciklama
  return (
    <>
    <h3>SingleUser component icindeki bilgi</h3>
    <div></div>
    </>
  )
}

export {ITEMS, SingleUser}

export default UserList 