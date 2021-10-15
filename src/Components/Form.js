
import React from 'react'



export default function Form (props) {

    const { values, change,  disabled, submit, errors, } = props 

    const onSubmit = event => {
        event.preventDefault()
        submit()
    }

    const onChange = event => {
        const {name, value, checked, type} = event.target;
        const valueToUse = type === 'checked' ? checked : value;
            change(name, valueToUse)
    }

    return (
        <div className='build'>
            <h2>Build Your Own</h2>
            
            <div className='errors'>
                    <div> {errors.customer} </div> 
                    <div> {errors.size} </div>
                    <div> {errors.pepperoni} </div>
                    <div> {errors.sausage} </div>
                    <div> {errors.spinach} </div>
                    <div> {errors.cheese} </div>
                    <div> {errors.pineapple} </div>
            </div>

                <form id='pizza-form' onSubmit={onSubmit}>
                    <label>Name:&nbsp;&nbsp;
                        <input 
                        name='name-input'
                        onChange={onChange}
                        type='text'
                        id='name-input'
                        value={values.customer}
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
                    

                    <div className='toppings'>
                        <h3>Add Toppings</h3>
                        <h4>choose up to 10:</h4>
                            <label>pepperoni
                                <input 
                                type='checkbox'
                                name='pepperoni'
                                values={values.pepperoni}
                                onChange={onchange}
                                />
                            </label>
                            <label>sausage
                                <input 
                                type='checkbox'
                                name='sausage'
                                values={values.sausage}
                                onChange={onchange}
                                />
                            </label>
                            <label>spinach
                                <input 
                                type='checkbox'
                                name='spinach'
                                values={values.spinach}
                                onChange={onchange}
                                />
                            </label>

                            <label>three cheese
                                <input 
                                type='checkbox'
                                name='cheese'
                                values={values.cheese}
                                onChange={onchange}
                                />
                            </label>
                            <label>pineapple
                                <input 
                                type='checkbox'
                                name='pineapple'
                                values={values.pineapple}
                                onChange={onchange}
                                />
                            </label>
                    </div>

                    <div className='substitute'>
                        <h3>Choice of Substitute</h3>
                            <label id='special-text'>Gluten Free Crust +$3.00
                                <input 
                                    type='checkbox'
                                    name='gluten-free'
                                    values={values.instructions}
                                    onChange={onchange}
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
                        <button disabled={disabled} id='order-button'>Add to Order</button>

                    </div>
                </form>
        </div>
        
    )
}