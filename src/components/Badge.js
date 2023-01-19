import { getAuth, onAuthStateChanged } from "firebase/auth";
import React from 'react'

function Badge() {
    const user=getAuth()

  return (
    <div>Badge</div>
  )
}

export default Badge