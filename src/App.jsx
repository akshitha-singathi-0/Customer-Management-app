import React, { useState, useEffect } from 'react';
import './App.css';

import CustomerList from "./assets/components/CustomerList";
import CustomerAddUpdateForm from "./assets/components/CustomerAddUpdateForm";
// import customer_data from "./assets/data/customers.json";

import * as lib from "./memdb.js";

function App() {

  let blankCustomer = { "id": -1, "name": "", "email": "", "pass": "" };

  const [customer, setCustomer] = useState([]);
  const [formObject, setFormObject] = useState(blankCustomer);

  function handleListClick(customer){
    if(formObject.id === customer.id)
      setFormObject(blankCustomer);
    else
      setFormObject(customer);
  }

  useEffect(() => {getCustomers()}, [formObject])
  
  const getCustomers = function () {
    console.log("fetching");
    setCustomer(lib.getAll);
  }

  function onCancelClick(){
    setFormObject(blankCustomer);
  }

  function onDeleteClick(){
    lib.deleteById(formObject.id);
  }

  

  return (
    <div>       
      <CustomerList data={customer} formObject={formObject} handleListClick={handleListClick}></CustomerList>
      <CustomerAddUpdateForm formObject={formObject} onCancelClick={onCancelClick} onDeleteClick={onDeleteClick}></CustomerAddUpdateForm>
    </div>
  );
}

export default App;
