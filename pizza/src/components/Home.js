import { useEffect, useState } from 'react';
import '../styles/home.css';
import Menu from './Menu';
import Header from './Header';

function Home(){

    const [pizzaMenu,setData] = useState(null);
    
    const [flag,setFlag] = useState(false);

    useEffect( () => {
        const fetchData = async () => {
            const response = await fetch('https://react-fast-pizza-api.onrender.com/api/menu'); 
            const result = await response.json();
            setData(result.data);
            setFlag(true)
            console.log(result.data)
         }
         fetchData();
    },[])
    
    if(flag)
    {
        return(
            <div id="home-body"> 
                <Header>
                </Header>
                <br></br>
                <Menu data={pizzaMenu}>
                </Menu>
            </div>
        );
    }

   
}

export default Home;