import React from "react";
import { useState } from "react";
function NewItem(props) {

    const formFields = {
        name: '',
        condition: '',
      };

   //state to hold formData
    const [newForm, setNewForm] = useState(formFields);        
    //handleChange function for form    
    const handleChange = (event) => {
            setNewForm({
                ...newForm, [event.target.name]: event.target.value})    };        
    //handleSubmit function for form    
    const handleSubmit = (event) => {    
        event.preventDefault();
            props.createItem(newForm);
                setNewForm(formFields)
                 };
    
  return (
    <div className="newitem">
      <form onSubmit={handleSubmit}>
        
        <input
          type="text"
          value={newForm.name}
          name="name"
          placeholder="name"
          onChange={handleChange}
        />
        <select value={newForm.condition}
        name="condition"
        placeholder="condition"
        onChange={handleChange} >
            <option value="new" >new</option>
            <option value="good">good</option>
            <option value="fair">fair</option>
            <option value="used">used</option>
        </select>
        <input
          type="text"
          value={newForm.description}
          name="description"
          placeholder="description"
          onChange={handleChange}
        />

        <input type="submit" value="create item" />
      </form>
    </div>
  );
}

export default NewItem;
