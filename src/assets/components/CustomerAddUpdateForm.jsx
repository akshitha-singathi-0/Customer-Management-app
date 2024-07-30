import React from 'react';

const CustomerAddUpdateForm = () => {
    
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
    );
}

export default CustomerAddUpdateForm;