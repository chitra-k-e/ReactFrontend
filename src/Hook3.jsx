import {useEffect,useState} from 'react'
let Hooks3 = () =>{
    let [text,setText] = useState(""); 
    let [submit, setSubmit] = useState("");
    let handleSubmit = (e) =>{
        setSubmit(text);
        e.preventDefault();
    }
    useEffect(()=>{
        if(submit)
        console.log(text);
    },[submit])
    return(
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={(e)=>{setText(e.target.value)}}/>
                <button type='submit' >Submit</button>
            </form>
            {submit && 
                <h1>{text}</h1>
            }
            
        </>
    )
}
export default Hooks3;