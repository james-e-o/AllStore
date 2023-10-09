import { useState } from 'react'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'

//page routes
import Dashboard from './Components/Layouts/Dashboard'
import CoreLayout from './Components/Layouts/CoreLayout'
import Sign from './Components/Sign'
import DashboardLanding from './Components/DashboardLanding'
import SalesLayout from './Components/Layouts/SalesLayout'
import SalesInvoice from './Components/Menus/sales/SalesInvoice'
import ProformaInvoice from './Components/Menus/sales/ProformaInvoice'
import SalesReturns from './Components/Menus/sales/SalesReturns'
import DeliveryNote from './Components/Menus/sales/DeliveryNote'


function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<CoreLayout/>}>
         <Route index element={<Sign/>}/>
         <Route path="dashboard/" element={<Dashboard/>}>
            <Route index element={<DashboardLanding/>}/>
            <Route path="sales/" element={<SalesLayout/>}>
                <Route path="sales-invoice" element={<SalesInvoice/>}/>
                <Route path="proforma-invoice" element={<ProformaInvoice/>}/>
                <Route path="delivery-note" element={<DeliveryNote/>}/>
                <Route path="sales-returns" element={<SalesReturns/>}/>
            </Route>
         </Route>
      </Route>
    )
  )


  return (
    <RouterProvider router={router}/>
  )
}

export default App
