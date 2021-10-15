import React from 'react'
import { Link } from "react-router-dom"
import pizza from '../Pizza.jpg'
import Eats from './Eats'

const Home = () => {
    return (
            <div>
                <div className='img-logo'>
                    <img src={pizza} alt='pizza logo' />
                </div>

                <div className='order-button'>
                    <button id='orderBtn' to='/pizza'>Order Now!</button>
                </div> 
                
                <div className='main-container'>
                    <Eats />
                </div>
            </div>

    )
}

export default Home;