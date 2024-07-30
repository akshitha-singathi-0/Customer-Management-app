import React from 'react';
import Customer from "./Customer";

const CustomerList = (props) => {
    return (
        <div>
        {
            props.data.map((customer) => (
                <Customer data={customer}></Customer>
            ))
        }
        </div>        
    );
};

export default CustomerList;