import { useState } from "react"
import logo from "../assets/logoBukowskia.png";


const Navbar = () => {
  return (
    <div className=" w-full flex py-6 justify-start items-center navbar">
      <img src={logo} alt="Bukowski" className=" w-[40px] h-[40px]" />
      <p className=" ml-4 text-[24px] text-white font-serif ">Bukowski</p>
    </div>
  )
}

export default Navbar