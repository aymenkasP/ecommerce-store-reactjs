import React, { useState } from 'react';
import axios from "axios";
import { BrowserRouter as Router, Route} from "react-router-dom";
import { useEffect } from "react";
import HomePage from './components/HomePage';
import Header from './components/Header';
import ShopingCard from './components/ShopingCard'



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
      <Router>
      <switch>
        <Route exact path = "/">
           <HomePage data={Products} />
        </Route>
        <Route path = "/">
           <ShopingCard path="/card" />
        </Route>
      </switch>
        
      </Router>
     



    </div>
  );
}

export default App;
