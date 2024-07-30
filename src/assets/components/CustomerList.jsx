import React from 'react';
import Customer from "./Customer";
import customer_data from "../data/customers.json";

const CustomerList = () => {
    return (
        <Customer data={customer_data}></Customer>
    );
}

export default CustomerList;