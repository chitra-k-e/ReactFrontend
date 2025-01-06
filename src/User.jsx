import React from 'react'
import './User.css'
import {useState} from 'react';
import {Link} from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
const User = () => {
    const [details,setDetails] = useState([])
    useEffect(()=>{
        axios.get('https://reactbackend-trf1.onrender.com/api/user/fetch').then((result)=>{
            console.log(result.data);
            setDetails(result.data.users);
        }).catch((error)=>{console.error(error)})
    },[]);
    const handledelete = (id) =>{
        axios.delete(`https://reactbackend-trf1.onrender.com/api/user/Delete/${id}`).then((res)=>{
            console.log("user deleted");
        }).catch((err)=>{
            console.log(err);
        });
    }
  return (
    <>
        <div>
            <Link className='Link' to="/create" >CreateUser</Link>
           <table className='tbl1'>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>Action</th>
                </tr>
                {
                    details.map((users)=>(
                        <tr className='data'>
                            <td>{users.name}</td>
                            <td>{users.email}</td>
                            <td>{users.address}</td>
                            <td>
                                <Link className='Link' to={`/update/${users._id}`}><button>Edit</button> </Link>
                                <button onClick={(e)=>handledelete(users._id)}>Delete</button>
                            </td>
                        </tr>
                    ))
                }
           </table> 
        </div>
    </>
  )
}

export default User