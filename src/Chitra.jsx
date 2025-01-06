import Func from "./Func"
import Hook from "./Hooks"
import List from "./List"
import Add from "./Add"
import Home from "./Home"
import Aboutus from "./Aboutus"
import Contactus from "./Contactus"
import {Link} from "react-router-dom"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import './Chitra.css'
import { createContext, useState } from "react"
import logo from './assets/logo.jpeg'
import Hook2 from "./Hook2"
import Hook3 from "./Hook3"
import Hen from "./Hen"
// import Book from "./Book"
export let nameContext = createContext();
function Chitra(){
    let [val,setVal]  = useState(false);
    let handleChange = () =>{
        setVal(!val);
    }
    return(
        <>
           {/* <Book /> */}
           {/* <Func name="Chitra"/> */}
           {/* <Hook /> */}
           {/* <List /> */}
           {/* <Hook3 /> */}
           <button onClick={handleChange}>Change</button>
           <nameContext.Provider value={val}>
            <Hen />
           </nameContext.Provider>
           
           {/* <Add num={10}/> */}
           {/* <Router>
           <header>
                <nav className="navbar">
                    <div className="logo-container">
                        <Link className="link" to="/">
                            <img src={logo}alt="Logo" className="logo-img" />
                            <span className="logo-text">ABC Tech</span>
                        </Link>
                    </div>
                    <ul className="nav-links">
                        <li>
                            <Link className="link" to="/">Home</Link>
                        </li>
                        <li>
                            <Link className="link" to="/Aboutus">Aboutus</Link>
                        </li>   
                        <li>
                            <Link className="link" to="/Contactus">Contactus</Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/Aboutus" element={<Aboutus/>}/>
                <Route path="/Contactus" element={<Contactus/>}/>
            </Routes>
            <footer className="simple-footer">
                <p>© 2024 ABC Tech. All rights reserved.</p>
            </footer>
                
          
           </Router> */}
        </>
    )
}
export default Chitra;