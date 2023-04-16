
import './App.css';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar  from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import React from "react";
import { CartProvider } from './context/CartContext';

const App = () => {

  
  return (
    <div className="App">
       <BrowserRouter>
       <CartProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/marca/:marcaId" element={<ItemListContainer greeting={''}/>}/>
          <Route path="/item/:itemId" element={<ItemDetailContainer />}/>
          <Route path="/cart" element={<h1 className='text-white'>Cart</h1>}/>
          <Route path="/checkout" element={<h1>Checkout</h1>}/>
        </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
