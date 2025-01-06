import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import User from "./User";
import CreateUser from "./CreateUser";
import UpdateUser from "./UpdateUser";
let Myroot=()=>{
    return(
        <>
           <div>
                <Router>
                    <Routes>
                        <Route path='/' element={<User />}></Route>
                        <Route path='/create' element={<CreateUser />}></Route>
                        <Route path='/update/:id' element={<UpdateUser />}></Route>
                    </Routes>
                </Router>
           </div>
        </>
    )
}
export default Myroot;