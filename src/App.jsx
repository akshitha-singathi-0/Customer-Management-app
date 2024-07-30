import React, { useState } from 'react';
import './App.css';

import CustomerList from "./assets/components/CustomerList";
import CustomerAddUpdateForm from "./assets/components/CustomerAddUpdateForm";
import customer_data from "./assets/data/customers.json";

function App() {

  let blankCustomer = { "id": -1, "name": "", "email": "", "pass": "" };

  const [formObject, setFormObject] = useState(blankCustomer)

  function handleListClick(customer){
    if(formObject.id === customer.id)
      setFormObject(blankCustomer);
    else
      setFormObject(customer);
  }

  function onCancelClick(){
    setFormObject(blankCustomer);
  }

  return (
    <div>       
      <CustomerList data={customer_data} formObject={formObject} handleListClick={handleListClick}></CustomerList>
      <CustomerAddUpdateForm formObject={formObject} onCancelClick={onCancelClick}></CustomerAddUpdateForm>
    </div>
  );
}

export default App;
