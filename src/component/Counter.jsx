import { useEffect,useState } from "react";

function Counter(){
    const [ count, setCounter ] = useState(0);

    useEffect(() => {
        document.title =`Counter : ${count}`;
    }, [count]);

    

    return(
        <div className="container">
            <div className="counter">
            <p>Count : {count}</p>
            <button onClick={()=> setCounter(count + 1)}>Tekan</button>
            </div>
            
        </div>
    );
}
 
export default Counter;