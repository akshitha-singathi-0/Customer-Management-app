import React from 'react';
import './App.css';

import CustomerList from "./assets/components/CustomerList";
import CustomerAddUpdateForm from "./assets/components/CustomerAddUpdateForm";
import customer_data from "./assets/data/customers.json";

function App() {

  return (
    <div>
      <h2>Customer List</h2>
      <div>
          <div>Name</div>
          <div>Email</div>
          <div>Pass</div>
          
          <CustomerList data={customer_data}></CustomerList>
      </div>
      <CustomerAddUpdateForm></CustomerAddUpdateForm>
    </div>
  );
}

export default App;
