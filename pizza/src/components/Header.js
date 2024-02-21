import '../styles/header.css'
import CartIcon from '../images/cart.svg'
import UserImg from '../images/user.svg';
import Home from '../images/house.svg';
import LogOut from '../images/logout.svg';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { EmptyState } from '../function/CustomerReducer';
import { useState } from 'react';


function Header()
{
    const dispatch = useDispatch();
    const state = useSelector((state)=>state)
    const navigate = useNavigate()

    const redirectToProfile = ()=>{
        navigate('/Profile');
    }

    const redirectToHome = ()=>{
        navigate('/Home');
    }

    const logOut = ()=>{
        dispatch(EmptyState());
        alert("Confim Logout");
        navigate('/');
    }

    const redirectToCart = (() =>
    {
        navigate('../Cart');
    })

    const [isHovered, setIsHovered] = useState(false);
    
    return(
        <div id="header-body">
            <div id="banner">
                <h1 class="banner-txt">◼◻◾  Pizza Hub 🍕  ◾◻◼</h1>
                <h2 class="banner-txt">Welcome {state.customers[state.login.index].name}, Order now for Delicious pizzas✨</h2>
            </div>
            <div id='home'> 
                <img style={{ cursor: isHovered ? 'pointer' : 'default' }}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    onClick={redirectToHome} id='home-img' 
                    src={Home}>
                </img>
            </div>
            <div id="cart">
                <h3 id='cart-num'>{state.customers[state.login.index].cart.length}</h3>
                <img style={{ cursor: isHovered ? 'pointer' : 'default' }}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    onClick={redirectToCart} id='cart-img'
                    src={CartIcon} alt='cart'>  
                </img>
            </div>
            <div id="user">
                <img
                    style={{ cursor: isHovered ? 'pointer' : 'default' }}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    onClick={redirectToProfile} id='user-img'
                    src={UserImg} alt='user'>
                </img>
            </div>
            <div id='logout'>
                <img
                    style={{ cursor: isHovered ? 'pointer' : 'default' }}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    onClick={logOut} id='logout-img'
                    src={LogOut}>
                </img>
            </div>
        </div>
    );
}
export default Header;