import React, { useState, useEffect } from 'react';
import './App.css';

import CustomerList from "./assets/components/CustomerList";
import CustomerAddUpdateForm from "./assets/components/CustomerAddUpdateForm";
// import customer_data from "./assets/data/customers.json";

import * as lib from "./memdb";

function App() {

  let blankCustomer = { "id": -1, "name": "", "email": "", "pass": "" };

  const [customers, setCustomers] = useState([]);
  const [formObject, setFormObject] = useState(blankCustomer);

  useEffect = (() => {getCustomer() }, [formObject]);

  const getCustomer = function (){
    console.log("in getCustomer()");
    setCustomers(lib.getAll());
  }

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
      <CustomerList data={customers} formObject={formObject} handleListClick={handleListClick}></CustomerList>
      <CustomerAddUpdateForm formObject={formObject} onCancelClick={onCancelClick}></CustomerAddUpdateForm>
    </div>
  );
}

export default App;
