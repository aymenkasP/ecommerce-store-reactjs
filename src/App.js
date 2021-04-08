import { Route , Switch} from "react-router-dom";
import HomePage from './components/HomePage';
import Header from './components/Header';
import ShopingCard from './components/ShopingCard'
import './css/app.css'



function App() {

  
  return (
    <div className="App">
      <Header />
      
      <Switch>
        <Route exact path = "/">
      
           <HomePage  />
         
        </Route>
        <Route path = "/card">
           <ShopingCard />
        </Route>
      </Switch>
        
     
     



    </div>
  );
}

export default App;
