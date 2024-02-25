
// import './App.css';

import { Fragment,useState } from 'react';
import Header from './components/Layout/Header';
import Meals from './components/Layout/Meals/Meals';
import Cart from './components/Layout/Meals/UI/Cart/Cart';
function App() {
  const [cartIsShown,SetCartIsShown] =useState(false);
  const showCartHandler =() =>{
    SetCartIsShown(true);
  };
  const hideCartHandler =() =>{
    SetCartIsShown(false);
  };
  return (
    
     <Fragment>  
      {cartIsShown && <Cart onClose ={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}/>
      <main>
        <Meals/>
      </main>
     
      </Fragment>
    
    
  );
};

export default App;
