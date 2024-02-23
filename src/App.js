
// import './App.css';

import { Fragment } from 'react';
import Header from './components/Layout/Header';
import Meals from './components/Layout/Meals/Meals';
function App() {
  return (
    
     <Fragment>  
      <Header/>
      <main>
        <Meals/>
      </main>
     
      </Fragment>
    
    
  );
};

export default App;
