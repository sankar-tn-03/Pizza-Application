import React,{useState} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import {addCustomer} from '../function/CustomerReducer';
import '../styles/login.css'
import { UseSelector } from 'react-redux';

function SignUp(){

    const navigate  = useNavigate();
    
    const [userId,setUserId] = useState(1);
    const [name,setName] = useState("");
    const [password,setPassword] = useState("");
    const [phone,setPhone] = useState("");
    const [address,setAddress] = useState("");

    const dispatch = useDispatch();

    const state = useSelector((state)=>state);

  const submit= async (e) => {
    e.preventDefault();
        await dispatch(addCustomer({
            "userId": userId,
            "name"  : name,
            "password" : password,
            "phone" : phone,
            "address" : address
    }))
    navigate('/Login');
    }

    return(
        <div id='content-body'>
            <div id='login-body'>
            <h1>Sign Up</h1>
            <form onSubmit={submit}>
                <h2>Your auto generated User Id is: {state.userId}</h2>
               
                <label>Enter your Name: </label>
                <br></br>
                <input class="text-box" type='text' id='name' placeholder='Enter your name' value={name} onChange={(e) => setName(e.target.value)}></input>
                <br></br>
                <br></br>
                <label>Enter your Password:</label>
                <br></br>
                <input class="text-box" id='password' type='password' placeholder='*****' value={password} onChange={(e) => setPassword(e.target.value)}></input>
                <br></br>
                <br></br>
                <label>Re-enter your Password:</label>
                <br></br>
                <input class="text-box" type='password' placeholder='*****'></input>
                <br></br>
                <br></br>
                <label>Enter your Mobile number:</label>
                <br></br>
                <input class="text-box" id='phone' type='text' placeholder='ex: 9875641236' value={phone} onChange={(e) => setPhone(e.target.value)}></input>
                <br></br>
                <br></br>
                <label>Enter your Address:</label>
                <br></br>
                <input class="text-box" id='address' type='text' placeholder='Enter your Address' value={address} onChange={(e) => setAddress(e.target.value)}></input>
                <br></br>
                <br></br>
                <input class='action' type='submit' value="Submit"></input>
            </form>
            </div>
        </div>
    );
}

export default SignUp;