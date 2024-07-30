import React from 'react';
import './App.css';

import CustomerList from "./assets/components/CustomerList";
import CustomerAddUpdateForm from "./assets/components/CustomerAddUpdateForm";
import customer_data from "./assets/data/customers.json";

function App() {

  return (
    <div>       
      <CustomerList data={customer_data}></CustomerList>
      <CustomerAddUpdateForm></CustomerAddUpdateForm>
    </div>
  );
}

export default App;
