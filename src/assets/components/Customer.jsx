import React from 'react';

const Customer = (props) => {
    function onhandleListClick(e){
        e.preventDefault();
        console.log("in onhandleListClick()")
    }
    return (
        <div onClick={onhandleListClick} >
            {props.data.name}
            {props.data.email}
            {props.data.pass}
        </div>
    );
}

export default Customer;