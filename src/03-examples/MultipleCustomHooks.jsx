import { useFetch, useCounter  } from "../hooks";
import { LoadingQuote,Quote } from "./index";


export const MultipleCustomHooks = () => {

     const{ counter, increment, decrement} = useCounter(1);

    const { data, isLoading, hasError } = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${counter}`);
  

  return (
   <>
        <h1>Breaking Bad Quotes  #{ counter }</h1>
        <hr />

        {
            ( isLoading ) ? <LoadingQuote /> : (
            
                data.map( (dato) =>(
                <Quote quote={dato.quote} author={ dato.author }  key={dato.quote}/>

                ))
        )

                
        }

        <button className="btn btn-primary"  onClick={ () =>increment()} disabled ={ isLoading } >Add quote</button>
        <button className="btn btn-primary"  onClick={ () =>decrement(1,1)} disabled ={ isLoading } >Sustact quote</button>

   </>
  )
}
