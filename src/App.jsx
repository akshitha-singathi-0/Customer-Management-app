import React from 'react';
import './App.css';

import CustomerList from "./assets/components/CustomerList";
import customer_data from "./assets/data/customers.json";

function App() {

  function onDeleteClick(e){
    e.preventDefault();
    console.log("in onDeleteClick()");
  }
  function onSaveClick(e){
    e.preventDefault();
    console.log("in onSaveClick()");
  }
  function onCancelClick(e){
    e.preventDefault();
    console.log("in onCancelClick()");
  }

  return (
    <div>
      <h2>Customer List</h2>
      <div>
          <div>Name</div>
          <div>Email</div>
          <div>Pass</div>
          
          <CustomerList data={customer_data}></CustomerList>
        
      </div>

      <div>
        <form>
          <label>Name:</label>
          <input></input>
          <label>Email:</label>
          <input></input>
          <label>Pass:</label>
          <input></input>
          <button onClick={onDeleteClick}>Delete</button>
          <button onClick={onSaveClick}>Save</button>
          <button onClick={onCancelClick}>Cancel</button>
        </form>
      </div>
    </div>
  );
}

export default App;
