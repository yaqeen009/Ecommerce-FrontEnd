import { Routes, Route } from 'react-router-dom'
import Home from "./pages/home";
import Shop from "./pages/shop";
import About from "./pages/about";
import Contact from "./pages/contact";
import Cart from "./pages/cart";
import Account from "./pages/account";
import Login from "./pages/login";
import ErrorPage from './pages/error';
import Product from './pages/product';

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/account" element={<Account />} />
        <Route path="/login" element={<Login />} />
        <Route path='*' element={<ErrorPage/>}/>
        <Route path="/product/:productId" element={<Product/>}/>
      </Routes>
    </div>
  );
};

export default AppRoutes;
