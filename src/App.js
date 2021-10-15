import React, { useState, useEffect } from 'react'
import { Route, Link } from "react-router-dom"
import axios from 'axios'
import schema from './Components/formSchema'
import * as yup from 'yup'



//component folders being imported
import Form from './Components/Form';
import Eats from './Components/Eats'
import Customer from './Components/Customer'
import Home from './Components/Home'


//initial states
const initialFormValues = {

  customer: '',
  size: '',
  instructions: '',
  pepperoni: 'false',
  sausage: 'false',
  spinach: 'false',
  cheese: 'false',
  pineapple: 'false',
}


const initialFormValuesErrors = {
  customer: '',
  size: '',
}

const initialCustomers = []
const initialDisabled = true


export default function App() {

  const [customers, setCustomers] = useState(initialCustomers)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormValuesErrors)
  const [disabled, setDisabled] = useState(initialDisabled)

  const postNewCustomer = newCustomer => {
    axios.post('https://reqres.in/api/users', newCustomer)
      .then(resp => {
        setCustomers([resp.data, ...customers])
      })
      .catch(err => {
        console.error(err);
      })
      .finally(()=> {
        setFormValues(initialFormValues)
      })
  }

  const validate=(name, value) => {
    yup.reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({...formErrors, [name]: '' }))
      .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0]}))
  }

  const inputChange = (name, value) => {
    validate(name,value);
    setFormValues({ ...formValues, [name]: value })
  }

  const formSubmit = () => {
    const newCustomer = {
      customer: formValues.customer.trim(),
      sauce: formValues.toppings,
      size: formValues.size,
    }
    postNewCustomer(newCustomer);
  }

  useEffect(() => {
    schema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])

  

  // console.log(formValues.size)
  // console.log(formValues.sauce)

  return (
    <div className='App'>
            <header className='header'>
                <h1>Lambda Eats</h1>
                    <nav>
                        <Link to='/'>Home</Link>
                        <Link to='/form'>Order</Link>
                        <Link to='/customers'>Customers</Link>
                    </nav>
            </header>


              <Route> 
                <Home exact path='/' />
              </Route>

              <Route path='/form'>
                <Form 
                inputChange={inputChange}
                disabled={!formValues.size && !formValues.sauce ? true : false} 
                submit={formSubmit}
                errors={formErrors}
                />
              </Route>

            <Route path='/customers'>
              <Customer />
            </Route>

      <div className='main-container'>
        <Eats />
      </div>
      
    </div>
  );
}
