import {  useDispatch, useSelector } from "react-redux";
import '../styles/cart.css'
import { useState } from "react";
import { UseDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { increment, setResponse } from "../function/CustomerReducer";
import Header from "./Header";
import { Decrement } from "../function/CustomerReducer";
import { Remove } from "../function/CustomerReducer";


function Cart()
{
   const navigate = useNavigate();
   const dispatch = useDispatch();

    const state = useSelector((state)=>state); 

    const postVal = {
        "customer": state.customers[state.login.index].name,
        "phone": Number(state.customers[state.login.index].phone),
        "address": state.customers[state.login.index].address,
        "cart": state.customers[state.login.index].cart
    };
    const order = async ()=>{

        
        console.log(postVal);
            try {
              const response = await fetch('https://react-fast-pizza-api.onrender.com/api/order', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(postVal),
              });
        
              if (!response.ok) {
                throw new Error('Network response was not ok');
              }
              
              const responseData = await response.json();
              console.log('Response Data:', responseData.data);
              await dispatch(setResponse(responseData.data.id));
              navigate('./Orders');
            } catch (error) {
              console.error('Error:', error.message);
            }
          
    };

    async function reduce(ind){
      console.log(state.customers[state.login.index])
      if(state.customers[state.login.index].cart[ind].quantity  > 1)
      await dispatch(Decrement(ind))
    }

    async function increase(ind){
      console.log(state.customers[state.login.index])
      await dispatch(increment(ind))
    }

     function remove(ind){
       dispatch(Remove(ind));
    }
    return(
     
        <div id="cart-body">
             <Header>
        
             </Header>
            <div id="cart-list">
              <h1 id="cart-header">Cart List 🛒</h1>
              {state.cartNum == 0 && (
                <>
                  <h2>Empty Cart!</h2>
                </>
              )}
            {
            state.customers[state.login.index].cart.map((pizza,index) => (
                    <div id="cart-menu">
                        <h3>{pizza.name}</h3>
                        <h4>Price: {pizza.unitPrice}$</h4>
                        <button onClick={()=>reduce(index)}>-</button>
                        <label> Quantity {state.customers[state.login.index].cart[index].quantity} </label>
                        <button onClick={()=>increase(index)}>+</button>
                        <br>
                        </br>
                        <br></br>
                        <button id="cart-remove" onClick={()=>remove(index)}>Remove</button>
                    </div>
            ))}
            </div>
            <div id="center-button">
            {state.customers[state.login.index].cart.length > 0 && (
                <>
                  <button id="order-button" onClick={order}>Order Now!!!</button>
                  <br></br>
                  <br></br>
                </>
              )}
               <div>
                    <p>






                      
                    </p>
               </div>
            </div>
        </div>
        
    );
    
}
export default Cart;