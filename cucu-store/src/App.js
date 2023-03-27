
import './App.css';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar  from './components/Navbar/Navbar';
import Catalog from './pages/Catalog';
import About from './pages/About';
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
          <Route path='/catalog' element={<Catalog/>}></Route>
          <Route path="/category/:marcaId" element={<ItemListContainer/>}/>
          <Route path='/about' element={<About></About>}></Route>
          <Route path="/item/:itemId" element={<ItemDetailContainer />}/>
         
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
