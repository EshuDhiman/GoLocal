import ReactDOM from "react-dom/client";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home  from "./pages/Home";
import { Navbar } from "./components/Navbar";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Product from "./pages/Product";
import Products from "./components/Products";
import { useSelector } from "react-redux";

import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import OrderDetail from "./pages/OrderDetails";
const stripePromise = loadStripe(process.env.STRIPE_KEY);
const App = () => {
  const user = useSelector((state) => state.user.currentUser);
  // if user is alearady logged in return to homepage
  return (
   
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/products/:category" element={<ProductList />}></Route>
        <Route path="/product/:id" element={<Product />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        {user ? (
          <Route path="/login" element={<Navigate to="/" />} />
        ) : (
          <Route path="/login" element={<Login />} />
        )}
        <Route path="/register" element={<Register />}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path="/order" element={<OrderDetail/>}></Route>
        
      </Routes>
    </Router>
  
  );
};

export default App;
