import React from "react";
import pizza from './Pizza.jpg';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

//component folders being imported
import Form from './Components.js/Form';








const App = () => {
  return (
    <div className='header'>
      <h1>Lambda Eats</h1>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>

        <li>
          <Link to='/help'>Help</Link>
        </li>

        <li>
          <Link to='/Form'>Order</Link>
        </li>
      </ul> 

      <div className='img-logo-container'>
        <img src={pizza} alt='pizza logo' />
      </div>

      <div className='main-container'>
        <div className='order-button'>

          <Link to='/Form'>
            <button id='orderBtn'>Order Now!</button>
          </Link>
          
        </div>
          
      </div>
        <p>Food Delivery in Gotham City</p>
    </div>
    
  );
};
export default App;
