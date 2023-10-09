import React from 'react'
import { Outlet } from 'react-router-dom'

const CoreLayout = () => {
  return (
    <div>
        <Outlet/>
    </div>
  )
}

export default CoreLayout