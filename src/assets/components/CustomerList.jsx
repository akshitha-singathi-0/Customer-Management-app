import React from 'react';
import Customer from "./Customer";

const CustomerList = (props) => {
    
    return (
        <div>
        {
            props.data.map((customer) => (
                <Customer key={customer.id} data={customer}></Customer>
            ))
        }
        </div>        
    );
};

export default CustomerList;