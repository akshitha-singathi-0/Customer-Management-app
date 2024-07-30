import React, { useState } from 'react';
import './App.css';

import CustomerList from "./assets/components/CustomerList";
import CustomerAddUpdateForm from "./assets/components/CustomerAddUpdateForm";
import customer_data from "./assets/data/customers.json";

function App() {

  let blankCustomer = { "id": -1, "name": "", "email": "", "password": "" };

  //const [customerVal, setCustomers] = useState([]);
  const [formObject, setFormObject] = useState(blankCustomer)

  function handleListClick(customer){
    setFormObject(customer);
  }

  return (
    <div>       
      <CustomerList data={customer_data} handleListClick={handleListClick}></CustomerList>
      <CustomerAddUpdateForm formObject={formObject}></CustomerAddUpdateForm>
    </div>
  );
}

export default App;
