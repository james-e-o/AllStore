import React from 'react'
import { Link } from 'react-router-dom'

const Sign = () => {
  return (
    <div>
        <h1>welcome to AllStore</h1>
        <p><Link to="/dashboard">Dashboard</Link></p>
    </div>
  )
}

export default Sign