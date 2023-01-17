import React from 'react'
import Item from '../components/Item'
import { Link } from 'react-router-dom'
function Index(props) {


  const loaded =() =>{
    
      return props.items.map((item)=>(
      <div className="itemCard" key={item._id}>
        
        <Link to={`/items/${item._id}`}>
        
          <div className="itemImg"><img src={`${item.image}`}/></div>
        </Link>
        <div className="itemData">
          <li>{item.name}</li>
          <li>{item.condition}</li>
          
        </div></div>)
    )

    }
    const loading = ()=>{
      <div>Loading...</div>
    }


  return (
    <div className='container'>
      {props.items? loaded(): loading}
    </div>
  )
}

export default Index