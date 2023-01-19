import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import { auth } from '../firebase'
import { onAuthStateChanged } from 'firebase/auth';



import Index from '../pages/Index';
import About from '../pages/About'
import ItemShow from '../pages/ItemShow';
import Wanted from '../pages/Wanted';
import NewItem from '../pages/NewItem';
import Distance from './Distance';
import Update from '../pages/Update';
function Main() {

  
  /////////////set Items state
  const [items, setItems] = useState(null)
  const [user, setUser] = useState(null)

  const URL= "http://mercantile.herokuapp.com/"

  
  const getItems = async() =>{
    const response = await fetch(URL+"items");
    const data = await response.json()
      setItems(data)
      }


      const createItem = async(item) => {
        //make post request to create item
        await fetch(URL + "items/new", {
          method: 'POST',
          headers: {
            'Content-type': 'Application/json'
          },
          body: JSON.stringify(item),
        }
        );
        //update list of people
        getItems();
        console.log(item)
      }

      const updateItem = async (id, updatedItem) => {
        await fetch(URL + "items/update/" + id, {
          method: 'PUT',
          headers: {
            'Content-type': 'Application/json'
          },
          body: JSON.stringify(updatedItem),
        })
        getItems()
      }

      const deleteItem = async (id) => {
        await fetch(URL + "items/" + id, {
          method: 'DELETE'
        })
        getItems()
      }
    
    

      useEffect(()=>{
      getItems();
      },[])


      useEffect(()=>{
        onAuthStateChanged(auth,(user)=>setUser(user))
      },[])

     
      return (
        <main>
          <Routes>
            <Route 
              path="/items" 
              element={
              <Index items={items}
              />} 
            />

            <Route 
            path="/items/:id"
            element={
            <ItemShow 
            items={items}
            deleteItem={deleteItem}
            />} 
            /> 

            <Route
            path="/items/update/:id"
            element={
              <Update
              items={items}
              updateItem={updateItem}
            />}
            />

            <Route path="/wanted" element={<Wanted />}/>

            <Route 
            path="/items/new" 
            element={
            <NewItem 
            items={items}
            createItem={createItem} 
            />}
            />
            <Route path ="/" element ={<About />}/>
          </Routes>
        </main>
      );
    }
    
    export default Main;