import React from 'react';

const Customer = (props) => {
    function handleListClick(e){
        e.preventDefault();
        console.log("in onhandleListClick()")
    }
    return (
        <div onClick={handleListClick} >
            {props.data.name}
            {props.data.email}
            {props.data.pass}
        </div>
    );
}

export default Customer;