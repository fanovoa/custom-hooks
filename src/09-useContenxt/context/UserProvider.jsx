import { useState } from "react"
import { UserContext } from "./userContext"

// const user = {
//     id:123,
//     name: 'Fabian Rodriguez',
//     email:'usuario@correo.com'
// }

export const UserProvider = ({ children }) => {

    const [user, setUser] = useState();


  return (
    // <UserContext.Provider value={{ hola:'mundo', user }}>
    <UserContext.Provider value={{ user, setUser }} >
        { children }
    </UserContext.Provider>
  )
}
