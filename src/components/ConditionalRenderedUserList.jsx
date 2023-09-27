// https://react.dev/learn/conditional-rendering

import { USERS } from "../data"

function ConditionalRenderedUserList(props) { 
  if (props.isActive === false) {
    // notActive = false 
    return <></>
  }
   
  if (props.isLoading) {
    return <div>[Conditional Rendered] Veriler Yukleniyor...</div> 
  }

  return (
  <> 
    <h2>Conditional Rendered User List</h2> 

    <ul>
      {USERS.map((user, index) => <li key={index}>{user}</li>)} 
    </ul>  
  </>
  ) 
}

export default ConditionalRenderedUserList