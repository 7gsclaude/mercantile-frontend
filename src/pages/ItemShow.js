import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const ItemShow = (props) => {
const { id } = useParams();
const navigate = useNavigate();
const item = props.items ? props.items.find((item)=>item._id === id):null;

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
}

const loaded = () => {

  return (
    <div className='itemShow'>
      <div className='itemImg'>
        <img src={item.image}/>
     </div>

      <div className='itemData'>
            <li>{item.name}</li>
            <li>condition: {item.condition}</li>
            <span><li>description: {item.description}</li></span>

            <li>LINK TO OWNER PROFILE</li>
      </div>
      <button onClick={handleDelete}>Delete This Listing</button> 

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
    </div>
  )
}

const loading = () => {
  return <h2>Loading...</h2>
}

const handleDelete = () => {
  props.deleteItem(id)
  navigate('/')
}

return (
  <section>
    { props.items ? loaded() : loading() }
  </section>
)
}
export default ItemShow