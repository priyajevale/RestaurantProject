
// import './App.css';

import { Fragment } from 'react';
import Header from './components/Layout/Header';
import Meals from './components/Layout/Meals/Meals';
import Cart from './components/Layout/Meals/UI/Cart/Cart';
function App() {
  return (
    
     <Fragment>  
      <Cart/>
      <Header/>
      <main>
        <Meals/>
      </main>
     
      </Fragment>
    
    
  );
};

export default App;
