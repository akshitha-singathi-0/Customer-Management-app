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
        <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Name</label>
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="John Smith"></input>
            <label for="exampleFormControlInput2" class="form-label">Email</label>
            <input type="email" class="form-control" id="exampleFormControlInput2" placeholder="name@example.com"></input>
            <label for="exampleFormControlInput3" class="form-label">Pass</label>
            <input type="email" class="form-control" id="exampleFormControlInput3" placeholder="********"></input>
        </div>
        <button type="button" class="btn btn-danger" onClick={onDeleteClick}>Delete</button>
        <button type="button" class="btn btn-primary" onClick={onSaveClick}>Save</button>
        <button type="button" class="btn btn-light" onClick={onCancelClick}>Cancel</button>
      
    </div>
    );
}

export default CustomerAddUpdateForm;