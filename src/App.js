import React, { useState } from 'react';
import axios from "axios";
import { BrowserRouter as Router, Route , Switch} from "react-router-dom";
import { useEffect } from "react";
import HomePage from './components/HomePage';
import Header from './components/Header';
import ShopingCard from './components/ShopingCard'
import './css/app.css'
import SideBar from './components/SideBar';


function App() {
const [isPending, setIsPending] = useState(true);
const [Products, setProducts] = useState([])
  useEffect(() =>{
    setTimeout(()=>{
       const getData = async () => {
         const result = await axios('https://fakestoreapi.com/products');
          setProducts(result.data)
          setIsPending(false)
    }
        getData() 
    }, 2000)
   
}, [])
  
  return (
    <div className="App">
      <Header />
      
      <Switch>
        <Route exact path = "/">
        {
          isPending? <p className="loading">Loading...</p>
          : <HomePage data={Products} />
        }   
        </Route>
        <Route path = "/">
           <ShopingCard path="/card" />
        </Route>
      </Switch>
        
     
     



    </div>
  );
}

export default App;
