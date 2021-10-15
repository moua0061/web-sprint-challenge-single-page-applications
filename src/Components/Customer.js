import React from 'react'

function Customer (props){
    // if (!details){
    //     return <h3>Working fetching your customers details ... </h3>
    // }

    return (
        <div className='customer-container'>
            <h2>Customers' Order Details</h2>
            <p>Name: {props.name}</p>
            <p>Size: </p>
            <p>Toppings: </p>
            <p>Special Instructions:</p>
        </div>
    )
}

export default Customer 