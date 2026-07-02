import Product from "./components/Product";
import Cart from "./components/Cart.jsx";
import { Routes,Route } from "react-router-dom";
import Navbar from './components/Navbar.jsx';
import Home from "./components/Home.jsx";
import Buy from "./components/Buy.jsx";
import Order from "./components/Order.jsx";
import Profile from "./components/Profile.jsx";
import OrderDetails from "./components/OrderDetails.jsx"
import ProfileDetails from "./components/ProfileDetails.jsx";
 function App(){
    return (
    <>
      <Navbar/>
      <Routes>
         <Route path="/" element={<Home/>}/>
        <Route path="/products" element={<Product/>}/>
         <Route path="/cart" element={<Cart/>}/>
         <Route path="/buy" element={<Buy/>}/>
         <Route path="/order" element={<Order/>}/>
        <Route path="/orderdetails/:id" element={<OrderDetails />} />
        <Route path="/profile" element={<ProfileDetails />} />
          <Route path="/profile/edit" element={<Profile />} />

      </Routes>
    </>
  );
 }
 export default App;

