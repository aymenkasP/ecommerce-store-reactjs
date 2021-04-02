import React, { useState } from 'react';
import axios from "axios";
import { useEffect } from "react";
import HomePage from './components/HomePage';
import Header from './components/Header';



function App() {
const [Products, setProducts] = useState([])
  useEffect(() =>{
    const getData = async () => {
         const result = await axios('https://fakestoreapi.com/products?limit=5');
          setProducts(result.data)
         
    }
        getData() 
}, [])
  
  return (
    <div className="App">
      <Header />
      <HomePage data={Products} />



    </div>
  );
}

export default App;
