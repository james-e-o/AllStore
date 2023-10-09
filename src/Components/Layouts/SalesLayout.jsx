import React from 'react'
import { Link, Outlet} from 'react-router-dom'

const SalesLayout = () => {
  return (
    <div className="p-1 w-full h-full">
        
        <header className=" h-[10%] mb-3 rounded bg-slate-100 flex items-center">
            <Link to="sales-invoice"><p className=" w-fit py-[14px] px-3 h-3/4 bg-slate-500 hover:bg-slate-400 text-[80%] leading-none text-center text-white font-semibold mx-2 cursor-pointer rounded">Sales Invoice</p></Link>
            <Link to="proforma-invoice"><p className=" w-fit py-[14px] px-3 h-3/4 bg-slate-500 hover:bg-slate-400 text-[80%] leading-none text-center text-white font-semibold mx-2 cursor-pointer rounded">Proforma Invoice</p></Link>
            <Link to="delivery-note"><p className=" w-fit py-[14px] px-3 h-3/4 bg-slate-500 hover:bg-slate-400 text-[80%] leading-none text-center text-white font-semibold mx-2 cursor-pointer rounded">Delivery note</p></Link>
            <Link to="sales-returns"><p className=" w-fit py-[14px] px-3 h-3/4 bg-slate-500 hover:bg-slate-400 text-[80%] leading-none text-center text-white font-semibold mx-2 cursor-pointer rounded">Sales Returns</p></Link>
           
        </header>
        <main className="rounded p-2 bg-slate-100 h-[73%] mb-3">
          <Outlet/>
        </main>
        <div className="rounded  px-2 bg-slate-100 h-20"></div>
    </div>
  )
}

export default SalesLayout