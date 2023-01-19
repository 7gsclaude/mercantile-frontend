import React from 'react'
import Item from '../components/Item'
import { Link } from 'react-router-dom'
import Distance from '../components/Distance'

function Index(props) {


  const loaded =() =>{
   

      return props.items.map((item)=>(

      <div className="itemCard" key={item._id}>
        
        <Link to={`/items/${item._id}`}>
        
          <div className="itemImg"><img src={`${item.image}`}/></div>
        </Link>
        <div className="itemData">
          <li>{item.name}</li>
          {item.condition? <div>Condition: <li>{item.condition}</li></div>:null}
          </div>
          </div>
          
          
        )
    )

    }
    const loading = ()=>{
      <div>Loading...</div>
    }


  return (
    <div className='container'>
      <Distance/>
      {props.items? loaded(): loading}
    </div>
  )
}

export default Index