import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '../styles/App.css';
import Login from './Login';
import Cart from './Cart';
import Home from './Home';
import SignUp from './SignUp';
import Order from './Order';
import Profile from './Profile';


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Login></Login>}></Route>
          <Route path='/SignUp' element={<SignUp></SignUp>}></Route>
          <Route path='/Home' element={<Home></Home>}></Route>
          <Route path='/Cart' element={<Cart></Cart>}></Route>
          <Route path='/Login' element={<Login></Login>}></Route>
          <Route path='/Cart/Orders' element={<Order></Order>}></Route>
          <Route path='/Profile' element={<Profile></Profile>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
