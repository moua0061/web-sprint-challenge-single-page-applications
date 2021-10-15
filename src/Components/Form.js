import React from 'react'
import styled from 'styled-components'

const DivStyled = styled.h3`
    background: grey;
`;


export default function Form (){
    return (
        <div className='build'>
            <h2>Build Your Own</h2>
            
                <form id='pizza-form'>
                    <label>Name:
                        <input 
                        name='name-input'
                        type='text'
                        id='name-input'
                        />
                    </label>

                    <div className='size'>
                        <h3 >Choice of Size</h3>
                        <h4>Required:</h4>
                    
                            <label>
                                <select id='size-dropdown'>
                                    <option value=''>Select</option>
                                    <option value='small'>Small 8"</option>
                                    <option value='medium'>Medium 12"</option>
                                    <option value='large'>Large 16"</option>
                                    <option value='xl'>Xtra Large 20"</option>
                                </select>
                            </label>
                    </div>
                    
                    <div className='sauce'>
                        <h3>Choice of Sauce</h3>
                        <h4>Required:</h4>
                            <label>Original Red
                                <input
                                type='radio'
                                name='original'
                                value='original'
                                checked={true}
                                />
                            </label>
                            <label>Garlic Ranch
                                <input
                                type='radio'
                                name='ranch'
                                value='ranch'
                                />
                            </label>
                            <label>BBQ Sauce
                                <input
                                type='radio'
                                name='bbq'
                                value='bbq'
                                />
                            </label>
                            <label>Spinach Alfredo
                                <input
                                type='radio'
                                name='alfredo'
                                value='alfredo'
                                />
                            </label>
                    </div>

                    <div className='toppings'>
                        <h3>Add Toppings</h3>
                        <h4>choose up to 10:</h4>
                            <label>pepperoni
                                <input 
                                type='checkbox'
                                name='pepperoni'
                                />
                            </label>
                            <label>sausage
                                <input 
                                type='checkbox'
                                name='sausage'
                                />
                            </label>
                            <label>spinach
                                <input 
                                type='checkbox'
                                name='spinach'
                                />
                            </label>

                            <label>three cheese
                                <input 
                                type='checkbox'
                                name='cheese'
                                />
                            </label>
                            <label>pineapple
                                <input 
                                type='checkbox'
                                name='pineapple'
                                />
                            </label>
                    </div>

                    <div className='substitute'>
                        <h3>Choice of Substitute</h3>
                            <label id='special-text'>Gluten Free Crust +$3.00
                                <input 
                                    type='checkbox'
                                    name='gluten-free'
                                />
                            </label>
                    </div>

                    <div className='instructions'>
                        <h3>Special Instructions:</h3>
                            <input 
                            name='instructions'
                            type='text'
                            
                            />
                    </div>

                    <div className='submit'>
                        <button disabled={true} id='order-button'>Add to Order</button>

                    </div>

                </form>
        </div>
        
    )
}