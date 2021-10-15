import React, { useState, useEffect } from 'react'
import { Route, Link } from "react-router-dom"
import axios from 'axios'
import schema from './Components/formSchema'



//component folders being imported
import Form from './Components/Form';
import Eats from './Components/Eats'
import Customer from './Components/Customer'
import Home from './Components/Home'


//initial states
const initialFormValues = {

  customer: '',
  size: '',
  sauce: '',
  pepperoni: false,
  sausage: false,
  spinach: false,
  cheese: false,
  pineapple: false,
  instructions: '',
}


const initialFormValuesErrors = {
  customer: '',
  size: '',
  sauce: '',
}

const initialCustomers = []
const initialDisabled = true

const formSubmit = () => {

}

export default function App() {

  const [customers, setCustomers] = useState(initialCustomers)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormValuesErrors)
  const [disabled, setDisabled] = useState(initialDisabled)


  const inputChange = (event) => {
    const name = event.target.value
    setFormValues({ ...formValues, customer: name })
    console.log(name)
  }

  const sizeInputChange = (event) => {
    const sauce = event.target.value
    setFormValues({...formValues, sauce: sauce})
    console.log(sauce)
  }

  const postNewCustomer = newCustomer => {
    axios.post('https://reqres.in/api/orders`', newCustomer)
      .then(resp => {
        setCustomers([resp.data, ...customers]);
      })
      .catch(err => {
        console.error(err);
      })
      .finally(() => {
        setFormValues(initialFormValuesErrors);
      })
  }

  useEffect(() => {
    
  }, [])

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
                sizeInputChange={sizeInputChange}
                disableButton={!formValues.size && !formValues.sauce ? true : false} 
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
