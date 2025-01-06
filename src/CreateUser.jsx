import axios from 'axios';
import React from 'react'
import './CreateUser.css'
import {useState} from 'react';
import {useNavigate} from 'react-router-dom'
const CreateUser = () => {
  const navigate = useNavigate();
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [address,setAddress] = useState("");
  const handleSubmit = (e) =>{
     e.preventDefault();
     axios.post('https://reactbackend-trf1.onrender.com/api/user/create',{name,email,address}).then((res)=>{
      console.log(res.data);
      navigate('/');
     }).catch((err)=>{
      console.log(err);
     });
  }
  return (
    <>
        <div className='forms'>
            <form onSubmit={handleSubmit}>
                <h1 className='form-title'>Create New User</h1> <br />
                <label htmlFor="">Name: </label>
                <input type="text" onChange={(e)=>{setName(e.target.value)}}/>
                <label htmlFor="">Email: </label>
                <input type="text" onChange={(e)=>{setEmail(e.target.value)}}/>
                <label htmlFor="">Address: </label>
                <input type="text" onChange={(e)=>{setAddress(e.target.value)}}/>
                <button type="submit">Create</button>
            </form>
        </div>
    </>
  )
}

export default CreateUser