import React from 'react'
import { Link } from 'react-router-dom'

const MenuLayout = () => {
  return (
    <div className="side-menu w-1/6 bg-slate-700 p-3 text-white flex flex-col">
    <h2 className="text-white font-sans text-2xl font-extrabold text-center mt-4 italic mb-14">MyStore</h2>
    <div className="menus  flex flex-col font-sans mb-12 text-[15px]">
        <Link to="sales"><div className=" text-slate-50 pl-[3vw] rounded-md pr-[2vw] hover:bg-slate-500 hover:text-white my-[4px] py-1 font-bold">Sales</div></Link>
        <div className=" text-slate-50 pl-[3vw] rounded-md pr-[2vw] hover:bg-slate-500 hover:text-white my-[3px] py-1 font-bold">Purchases</div>
        <div className=" text-slate-50 pl-[3vw] rounded-md pr-[2vw] hover:bg-slate-500 hover:text-white my-[3px] py-1 font-bold">Inventory</div>
        <div className=" text-slate-50 pl-[3vw] rounded-md pr-[2vw] hover:bg-slate-500 hover:text-white my-[3px] py-1 font-bold">Branch</div>
        <div className=" text-slate-50 pl-[3vw] rounded-md pr-[2vw] hover:bg-slate-500 hover:text-white my-[3px] py-1 font-bold">Accounts</div>
        <div className=" text-slate-50 pl-[3vw] rounded-md pr-[2vw] hover:bg-slate-500 hover:text-white my-[3px] py-1 font-bold">Customers</div>
        <div className=" text-slate-50 pl-[3vw] rounded-md pr-[2vw] hover:bg-slate-500 hover:text-white my-[3px] py-1 font-bold">Suppliers</div>
        <div className=" text-slate-50 pl-[3vw] rounded-md pr-[2vw] hover:bg-slate-500 hover:text-white my-[3px] py-1 font-bold">Staff</div>
        <div className=" text-slate-50 pl-[3vw] rounded-md pr-[2vw] hover:bg-slate-500 hover:text-white my-[3px] py-1 font-bold">Settings</div>
    </div>
    <div className="staff-options p-[1vw] font-bold">
        <p className="staff-name">Admin</p>
    </div>
</div>
  )
}

export default MenuLayout