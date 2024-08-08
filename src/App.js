import React from 'react';
import {Routes,Route, BrowserRouter} from 'react-router-dom'
import Home from './Home';
import Productsvision from './Productsvision';
import Productssports from './Productssports';
import Productssunglass from './Produtssunglass';
import ContactPage from './Navbar/ContactPage';
import ShoppingCart from './Navbar/ShoppingCart';
import Signup from './Signup';
import Login from './Login';
import AboutUs from './Navbar/AboutUs';
import BrowseInventory from './Home/Browse Inventory';
const App = () => {
    return (
       <BrowserRouter>
       <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/category/1' element={<Productsvision/>}/>
       <Route path='/category/2' element={<Productssports/>}/>
       <Route path='/category/3' element={<Productssunglass/>}/>
       <Route path='/contactpage' element={<ContactPage/>}/>
       <Route path='/aboutus' element={<AboutUs/>}/>
       <Route path='/shop' element={<ShoppingCart/>}/>
       <Route path='/signup' element={<Signup/>}/>
       <Route path='/login' element={<Login/>}/>
       <Route path='/Browse Inventory' element={<BrowseInventory/>}/>
       </Routes>
       </BrowserRouter>
    );
}

export default App;
 