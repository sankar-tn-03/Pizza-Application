import { UseSelector, useSelector } from "react-redux";
import '../styles/login.css';
import Header from "./Header";

function Profile()
{
    const state = useSelector((state)=>state);
    return(
        <>
        <Header></Header>
        <div>
            
            <div id="login-body">
            <h1>User Details</h1>
            <h3>Name: </h3>
            <label>{state.customers[state.login.index].name}</label>
            <h3>Id: </h3>
            <label>{state.customers[state.login.index].userId}</label>
            <h3>Phone: </h3>
            <label>{state.customers[state.login.index].phone}</label>
            <h3>Address: </h3>
            <label>{state.customers[state.login.index].address}</label>
            </div>
        </div>
        </>
        
        
    );
}

export default Profile;