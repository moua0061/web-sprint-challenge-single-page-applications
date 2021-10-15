import React from "react";
import pizza from './Pizza.jpg';
import styled from 'styled-components';










const App = () => {
  return (
    <div className='header'>
      <h1>Lambda Eats</h1>
      <div className='img-logo-container'>
        <img src={pizza} alt='pizza logo' />
      </div>

      <div className='main-container'>
        <div className='order-button'>
          <button id='orderBtn'>Order Now!</button>
        </div>
          
      </div>
        <p>Food Delivery in Gotham City</p>
    </div>
    
  );
};
export default App;
