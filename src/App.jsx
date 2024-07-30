import React from 'react';
import './App.css';

import CustomerList from "./assets/components/CustomerList";

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
            <CustomerList></CustomerList>
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
