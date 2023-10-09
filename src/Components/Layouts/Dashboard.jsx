import { useState,useEffect, useRef } from 'react'
import { Outlet } from 'react-router-dom'
import MenuLayout from './MenuLayout'
import MainLayout from './MainLayout'

const Dashboard = () => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)
    const [inputFocus, setInputFocus] = useState(false)
    useEffect(()=>{
        window.onresize = () => {
            setScreenWidth(window.innerWidth)
        }
    })

  return (
    <div className="h-screen flex" >
        <MenuLayout/>
        <MainLayout/>
    </div>
  )
}

export default Dashboard


{/* <div  className={!inputFocus ?"h-9 w-[50%] border-b border-black relative":"h-9 w-[50%] border-b border-blue-400 relative before:border-b-2 before:left-0 before:top-0 before:w-4"}> 
            <span className={!inputFocus ? "pl-2 transition-[top_150ms_linear] top-2 absolute":"transition-[top_150ms_linear] pl-2 top-[-10px] absolute text-blue-400 text-[13px]"}>Name: </span>
            <input onFocus={(e)=>{ setInputFocus(true)}} onBlur={(e)=>{e.target.value.length==0? setInputFocus(false):setInputFocus(true)}} type="text" className="absolute h-full w-3/4 bg-transparent border-0 pl-2 outline-0"/>
        </div> */}