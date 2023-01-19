import React from "react";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function NewItem(props) {
  const formFields = {
    name: '',
    condition: '',
  };

const navigate = useNavigate();

  //state to hold formData
  const [newForm, setNewForm] = useState(formFields);
  ///fixing the reload from the page 


  /// what this useEffect is doing is looking for the form field. Finding it and holding on to it once. 
  /// if formFields is placed in the array it will continue to find the same form forever because its always there. 
  useEffect(() => {
    if (formFields) {
      setNewForm(formFields)
    }
  }, []);



    //handleChange function for form    
    const handleChange = (event) => {
            setNewForm({
                ...newForm, [event.target.name]: event.target.value})    };        
    //handleSubmit function for form    
    const handleSubmit = (event) => {    
        event.preventDefault();
            props.createItem(newForm);
              setNewForm(formFields);
                navigate("/");

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
          <select
            value={newForm.condition}
            name="condition"
            placeholder="condition"
            onChange={handleChange}
          >
            <option value="new">new</option>
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
