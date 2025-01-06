import { useRef } from 'react';
import { useEffect } from 'react';
import {useState} from 'react'
let Hook2 = () =>{
    let [Count,setCount] = useState(0);
    // useEffect(()=>{
    //     console.log("value Updated");
    //     return(()=>{
    //         console.log("Code cleanup");
    //     })
    // },[Count]);
    let CountRef = useRef(0);
    let increament = () =>{
        setCount(Count+1);
        CountRef.current++;
        console.log("State: ",Count);
        console.log("Ref: ",CountRef.current);
    }

    return(
        <>
            <h1>Count: {Count}</h1>
            <button onClick={increament}>Increament</button>
            <button onClick={()=>{setCount(Count-1)}}>Decreament</button>
        </>
    )
}
export default Hook2;