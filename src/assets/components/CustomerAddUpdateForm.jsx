import React from 'react';

const CustomerAddUpdateForm = (props) => {

    return (  
    <div>
        <h4>Update</h4>
        <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Name</label>
            <input type="text" name="name" onChange={(e) => props.handleInputChange(e)} value={props.formObject.name} class="form-control" id="exampleFormControlInput1" placeholder="John Smith"></input>
            <label for="exampleFormControlInput2" class="form-label">Email</label>
            <input value={props.formObject.email} type="email" class="form-control" id="exampleFormControlInput2" placeholder="name@example.com"></input>
            <label for="exampleFormControlInput3" class="form-label">Pass</label>
            <input value={props.formObject.pass} type="email" class="form-control" id="exampleFormControlInput3" placeholder="********"></input>
        </div>
        <button type="button" class="btn btn-danger" onClick={props.onDeleteClick}>Delete</button>
        <button type="button" class="btn btn-primary" onClick={props.onSaveClick}>Save</button>
        <button type="button" class="btn btn-light" onClick={props.onCancelClick}>Cancel</button>
      
    </div>
    );
}

export default CustomerAddUpdateForm;