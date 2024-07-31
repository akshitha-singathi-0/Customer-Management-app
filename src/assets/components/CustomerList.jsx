import React from 'react';

const CustomerList = (props) => {

    return (
        <div>
            <h4>Customer List</h4>
            <table>
                <thead>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Pass</th>
                </thead>
                <tbody>
                    {
                        props.data.map((customer) => (
                            <tr key={customer.id} onClick={()=>props.handleListClick(customer)} className={ (customer.id === props.formObject.id)?'mark':'' }>
                                <td>{customer.name}</td>
                                <td>{customer.email}</td>
                                <td>{customer.password}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        
        </div>        
    );
};

export default CustomerList;