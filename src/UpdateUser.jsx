import React from 'react'
import axios from 'axios';
import {useParams,useNavigate} from 'react-router-dom';
import {useState, useEffect} from 'react'

const UpdateUser = () => {
  let {id} = useParams();
  const navigate = useNavigate();
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [address,setAddress] = useState("");
  useEffect(() => {
    axios.get(`https://reactbackend-trf1.onrender.com/api/user/${id}`)
        .then((response) => {
            const { name, email, address } = response.data.users;
            setName(name);
            setEmail(email);
            setAddress(address);
        })
        .catch((error) => console.error(error));
  }, [id]);
  const handleUpdate = (e) =>{
    e.preventDefault();
    axios.put(`https://reactbackend-trf1.onrender.com/api/user/update/${id}`,{name,email,address}).then((res)=>{
      console.log(res.data);
      navigate('/');
    }).catch((err)=>{
      console.log(err);
    })
  }
  return (
    <>
        <div className="forms">
            <form action="" onSubmit={handleUpdate}>
                <h1 className="form-title">Update the user</h1>
                <label htmlFor="">Name: </label>
                <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}}/>
                <label htmlFor="">Email: </label>
                <input type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                <label htmlFor="">Address: </label>
                <input type="text" value={address} onChange={(e)=>{setAddress(e.target.value)}}/>
                <button type="submit">Update</button>
            </form>
        </div>
    </>
  )
}

export default UpdateUser