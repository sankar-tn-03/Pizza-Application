import React from "react"; 
import { UseSelector, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { useState,useEffect } from "react";
import '../styles/order.css';
import '../styles/login.css';
import { useNavigate } from "react-router-dom";
import Header from "./Header";

function Order(){

    const navigate = useNavigate();
    const state = useSelector((state)=>state);
    const [data,setData] = useState(null);
    const [flag,setFlag] = useState(false);

    const navigateToHome = ()=>{
        navigate('/Home');
    }

    useEffect( () => {
        const fetchData = async () => {
            const response = await fetch(`https://react-fast-pizza-api.onrender.com/api/order/${state.response}`); 
            const result = await response.json();
            setData(result.data);
            setFlag(true);
            console.log("le2bd1jcfi")
            console.log(result.data)
         }
         fetchData();
    },[])
    
    if(flag)
    {
        return(
            <>
            <Header></Header>
            <div id="order-body">
                <h1>Order Summary</h1>
                <h2>Order Id: {data.id}</h2>
                {data.cart && data.cart.map((item)=>(
                    <>
                    <div id="order-list">
                        <h4>Pizza: {item.name}</h4>
                        <h4>Unit Price: {item.unitPrice}$</h4>
                        <h4>Quantity: {item.quantity}</h4>
                    </div>
                    </>
                ))}
                <div>
                    <h3>Total Order Price: {data.orderPrice}$</h3>
                    <h3>Status: {data.status}</h3>
                </div>
                <div>
                    <button class='action' onClick={navigateToHome}>Go to Home</button>
                    <br>
                    </br>
                    <br></br>
                </div>
            </div>
            </>           
        );
    }
}

export default Order;