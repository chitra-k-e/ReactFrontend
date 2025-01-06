import React from "react";
import Egg from './Egg';
let Hen = (props) =>{
    return (
        <>
            <h1>Hen</h1>
            <Egg name={props.name}/>
        </>
    )
}
export default Hen;