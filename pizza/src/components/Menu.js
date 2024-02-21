import '../styles/menu.css'
import {  useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../function/CustomerReducer';
import React from 'react';
import { useState } from 'react';



function Menu({data})
{
    const dispatch = useDispatch();
    const state = useSelector((state)=>state);

    const add = async (obj) =>{
        const foundItem = state.customers[state.login.index].cart.find(item => item.pizzaId === obj.id);

        if(!foundItem)
        {
            dispatch(addToCart({
                "pizzaId": obj.id,
                "name": obj.name,
                "quantity": 1,
                "unitPrice": obj.unitPrice,
                "totalPrice": obj.unitPrice
            }, state.login.index));
        alert("Item added to cart!");
        }
        else
        {
            alert("Item already in the cart!");
        }
       
             
    }
    
    return(
        <div id="menu-list">
            {data && data.map((pizza) => (
                <div id="menu">
                    <h3>{pizza.name}</h3>
                    <h4>Price: {pizza.unitPrice}$</h4>
                    <img src={pizza.imageUrl}></img>
                    <h4>Ingredients:</h4>
                    {pizza.ingredients.map((ing) => (
                        <>
                            <label>{ing}, </label>
                        </>
                    ))}
                    <br></br>
                    <br></br>
                    <button id='add-cart' onClick={() => add(pizza)}>Add to Cart</button>
                </div>
            ))}
        </div>
    );
}

export default Menu;