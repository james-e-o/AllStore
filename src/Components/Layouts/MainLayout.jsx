import React from 'react'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <div className=" p-2 w-full h-full">           
       <Outlet/>
    </div>
  )
}

export default MainLayout