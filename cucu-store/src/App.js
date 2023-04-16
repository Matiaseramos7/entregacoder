
import './App.css';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar  from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import React from "react";


const App = () => {

  
  return (
    <div className="App">
       <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/category/:marcaId" element={<ItemListContainer greeting={'Productos por marca'}/>}/>
          <Route path="/item/:itemId" element={<ItemDetailContainer />}/>
          <Route path="/cart" element={<h1 className='text-white'>Cart</h1>}/>
          <Route path="/checkout" element={<h1>Checkout</h1>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
