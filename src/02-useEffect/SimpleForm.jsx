import { useEffect, useState } from "react"
import { Message } from "./Message";


export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'strider',
        email: 'fabian@correo.com'
    });

    const { username, email } = formState;

    const onInputChange = ( { target } ) =>{

        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]  :value 
        });
    }


    useEffect( ()=> {
        //console.log( 'when the component is charge, only once !' );
    },[] );

    useEffect( () => {
        //console.log( 'FormState Changed!' );
    },[formState] );

    useEffect( () => {
        //console.log( 'email Changed!' );
    },[email] );


  return (
    <>
        <h1>Simple Form</h1>
        <hr />

        <input type="text"  className="form-control"  placeholder="Username" name="username" 
               value={username}
               onChange={onInputChange } />

        <input type="email" className="form-control mt-2"  placeholder="fabian@correo.com" name="email" 
               value={email}
               onChange={onInputChange } />

        {
            ( username === 'strider2' ) &&  < Message />
        }

    </>
  )
}
