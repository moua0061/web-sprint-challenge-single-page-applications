import React from "react";
import pizza from './Pizza.jpg';


//component folders being imported
import Form from './Components/Form';
import Eats from './Components/Eats'
import { Link } from "react-router-dom";



const App = () => {

  return (
    <div className='App'>
      <header className='header'>
        <h1>Lambda Eats</h1>
          <Link to='/'>Home</Link>
          <Link to='/help'>Help</Link>

      <div className='img-logo-container'>
        <img src={pizza} alt='pizza logo' />
      </div>

        <div className='main-container'>
          <div className='order-button'>
          <Link to='/pizza'><button id='orderBtn'>Order Now!</button></Link>

              

          </div>  
        </div>      

      </header>  
      <Form />
      <Eats />
    </div>
  );
};

export default App;
