import React from 'react';
import './App.css';

import CustomerList from "./assets/components/CustomerList";
import customer_data from "./assets/data/customers.json";

function App() {
  return (
    <div>
      <h2>Customer List</h2>
      <div>
        <table>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Pass</th>
          </tr>
          <tr>
            <CustomerList data={customer_data}></CustomerList>
          </tr>
        </table>
      </div>

      <div>
        <form>
          <label>Name:</label>
          <input></input>
          <label>Email:</label>
          <input></input>
          <label>Pass:</label>
          <input></input>
          <button>Delete</button>
          <button>Save</button>
          <button>Cancel</button>
        </form>
      </div>
    </div>
  );
}

export default App;
