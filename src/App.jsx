import { useState } from 'react'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'

//page routes
import Dashboard from './Components/Dashboard'


function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Dashboard/>}>

      </Route>
    )
  )


  return (
    <RouterProvider router={router}/>
  )
}

export default App
