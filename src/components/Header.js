import React from 'react'
import { login, logout } from "../firebase"
import { Link } from 'react-router-dom'
import NewItem from '../pages/NewItem'
function Header() {
    return (<>
  <div className='header'>
      
    <Link to="/"><h1>MERCANTILE</h1></Link>
    <div className='signin'>
      <button onClick={login}>login</button>
      <button onClick={logout}>logout</button> </div>
    <div className='links'> <Link to='/wanted'>View wanted ads</Link>  search <Link to ='/about'>about </Link><Link to="/items/new">post an item</Link></div>
    </div>
    </>
  )
}

export default Header