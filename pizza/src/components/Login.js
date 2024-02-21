import React from "react";
import Home from "./Home";
import {Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from "react";
import { LoginReducer } from "../function/CustomerReducer";
import '../styles/login.css';

function Login()
{
    const navigate = useNavigate();

    const [id,setUserId] = useState();
    const [pass,setPassword] = useState();

    const dispatch = useDispatch();

    const state = useSelector((state)=> state);

    const navigateToHome = async (e)=>{
        e.preventDefault();
        var loginId;
       var bool = false;
       console.log("bdeif")
        await state.customers.map((customer)=> {
        console.log(customer.userId +" ->"+id+" / "+customer.password+" ->"+pass);
         if(customer.userId == id && customer.password == pass)
         {
            loginId = customer.userId;
            bool = true;
         }
       })
       if(bool)
       {
        var ind;
        for(let i=0;i<state.customers.length;i++ )
        {
            if(state.customers[i].userId == id)
            {
                ind = i;
                break;
            }
        }
        await dispatch(LoginReducer(loginId,ind));
        navigate('/Home');
       }
       else
       {
        window.alert("Invalid UserId or Password")
       }
    }

    const navigateToSignup = (e) =>{
        e.preventDefault();
        navigate('/SignUp');
    }

    return(
    <div id="content-body">
        <div  id="login-body">
        <h1>Welcome to Pizza Application 🍕</h1>
        <form onSubmit={navigateToHome}>
            <label>Enter your UserId</label>
            <br></br>
            <input class="text-box" type="text" placeholder="UserID" value={id} onChange={(e) => setUserId(e.target.value)}></input>
            <br></br>
            <br></br>
            <label>Enter your Password</label>
            <br></br>
            <input class="text-box" type="password" placeholder="********" value={pass} onChange={(e) => setPassword(e.target.value)}></input>
            <br></br>
            <br></br>
            <input class="action" type="submit" value='login'></input>
        </form>
        <br></br>
        <p>Don't had an Account? <button class="action" onClick={navigateToSignup}>Sign up</button></p>
    </div>
    </div>
    );
}

export default Login;