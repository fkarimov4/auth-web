import { useState } from 'react'
import Login from './scenes/Login';
import Signup from './scenes/Signup'

function App() {
  const [token, setToken] = useState()
  const [isUser, setIsUser] = useState()

  return (
    <section>
      {!token 
        ? isUser
          ? <Login setToken={setToken} setIsUser={setIsUser}/>
          : <Signup setToken={setToken} setIsUser={setIsUser}/>
        : <h1>User List</h1>
      }
    </section>
  );
}

export default App;
