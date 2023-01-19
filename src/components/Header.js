import React from 'react'
import { login, logout } from "../firebase"
import { Link } from 'react-router-dom'
import NewItem from '../pages/NewItem'
import Distance from "../components/Distance";

function Header() {
    return (<>
  <div className='header'>
      
    <Link to="/"><h1>MERCANTILE</h1></Link>
    <div className='signin'>
      <button onClick={login}>Login</button>
      <button onClick={logout}>Logout</button> </div>
    <div className='links'> <Link to='/wanted'>View Wanted Ads</Link>  Search <Link to ='/items'>Listings</Link><Link to="/items/new">Create a Listing</Link></div>
    <Distance />

    </div>
    </>
  )
}

export default Header