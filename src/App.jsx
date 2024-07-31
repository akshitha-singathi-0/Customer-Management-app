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

  const handleInputChange = function (event) {
    console.log("in handleInputChange()");
    const name = event.target.name;
    const value = event.target.value;
    let newFormObject = { ...formObject }
    newFormObject[name] = value;
    setFormObject(newFormObject);
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

  function onSaveClick(){
    console.log("in onSaveClick()");
  }  

  return (
    <div>       
      <CustomerList data={customer} formObject={formObject} handleListClick={handleListClick}></CustomerList>
      <CustomerAddUpdateForm formObject={formObject} handleInputChange={handleInputChange} onCancelClick={onCancelClick} onDeleteClick={onDeleteClick} onSaveClick={onSaveClick}></CustomerAddUpdateForm>
    </div>
  );
}

export default App;
