import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
 import Header from './components/layouts/Header';
 import Footer from './components/layouts/Footer';
import Affiliate from './components/affiliate/Affiliate';
import Price from "./components/Pricing";
import  Main from './components/Main'
function App() {
  return (
    <div className="App">
     <Header/>
    <Switch>
     
        <Route exact path="/" component={Main}/>
        <Route  path="/price" component={Price}/>
        <Route  path="/affiliate" component={Affiliate}/>
        
    </Switch>

    <Footer/>
    </div>
  );
}

export default App;
