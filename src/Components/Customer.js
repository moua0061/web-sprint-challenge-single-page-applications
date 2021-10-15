import React from 'react'

function Customer (props){

    return (
        <div className='customer-container'>
            <h2>Customers' Order Details</h2>
            <p>Name: {props.name}</p>
            <p>Size: {props.size}</p>
            <p>Toppings: {props.toppings} </p>
            <p>Special Instructions: {props.instructions} </p>
        </div>
    )
}

export default Customer 