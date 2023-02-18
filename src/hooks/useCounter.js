import { useState } from "react"

export const useCounter = ( initialValue = 10 ) => {

    const [counter, setCounter] = useState(initialValue)

    const increment = (value = 1) => {
        setCounter(counter + value );
    }

    const decrement = ( value = 1, minimo =0 ) => {

        if(counter === minimo) return;

        setCounter(counter - value );
    }

    const reset = () => {
        setCounter(10);
    }

    

    return{
        counter,
        increment,
        decrement,
        reset
    }
}