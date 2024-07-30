import React from 'react';

const Customer = (props) => {
    return (
        <div>
            <td>{props.data.name}</td>
            <td>{props.data.email}</td>
            <td>{props.data.pass}</td>
        </div>
    );
}

export default Customer;