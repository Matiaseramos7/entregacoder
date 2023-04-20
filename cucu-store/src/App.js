
import './App.css';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar  from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
import React from "react";
import { CartProvider } from './context/CartContext';
import { NotificationProvider } from './notification/NotificationService';
import Footer from './components/Footer/Footer';


const App = () => {

  
  
  return (
    <div className="App">
       <BrowserRouter>
       <NotificationProvider>    
        <CartProvider>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/marca/:marcaId" element={<ItemListContainer greeting={''}/>}/>
              <Route path="/category/:categoryId" element={<ItemListContainer greeting={''}/>}/>
              <Route path="/item/:itemId" element={<ItemDetailContainer />}/>
              <Route path="/cart" element={<Cart />}/>
              <Route path="/checkout" element={<Checkout />}/>
            </Routes>
          </CartProvider>
        </NotificationProvider>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
