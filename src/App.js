
// import './App.css';

import { useState } from 'react';
import Header from './components/Layout/Header';
import Meals from './components/Layout/Meals/Meals';
import Cart from './components/Layout/Meals/UI/Cart/Cart';
import CartProvider from './store/CartProvider';

function App() {
  const [cartIsShown,SetCartIsShown] =useState(false);
  const showCartHandler =() =>{
    SetCartIsShown(true);
  };
  const hideCartHandler =() =>{
    SetCartIsShown(false);
  };
  return (
    
     <CartProvider>  
      {cartIsShown && <Cart onClose ={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}/>
      <main>
        <Meals/>
      </main>
     
      </CartProvider>
    
    
  );
};

export default App;
