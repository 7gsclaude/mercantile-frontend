import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Update = (props) => {
const { id } = useParams();
const item = props.items ? props.items.find((item)=>item._id === id):null;
const navigate = useNavigate()

const [editForm, setEditForm] = useState(item)

useEffect(() => {
  if(item) {
    setEditForm(item)
  }
}, [item])

const handleChange = (event) => {
  setEditForm({...editForm, [event.target.name]: event.target.value })
}

const handleSubmit = (event) => {
  event.preventDefault();
  props.updateItem(id, editForm)
  navigate(`/items/${item._id}`)
}

const loaded = () => {
    return (
        <section className="itemUpdate">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            onChange={handleChange}
            value={editForm.name}
          />
          <input
            type="text"
            name="description"
            onChange={handleChange}
            value={editForm.description}
          />
          <input
            type="text"
            name="condition"
            onChange={handleChange}
            value={editForm.condition}
          />
          <input
            type="text"
            name="image"
            onChange={handleChange}
            value={editForm.image}
          />
          <input type="submit" value="Update Listing" />
        </form>  
      </section>       
    )
}
const loading = () => {
    return <h2>Loading...</h2>
  }
  
  return (
    <section>
      { props.items ? loaded() : loading() }
    </section>
  )

}

export default Update