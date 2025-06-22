import React from 'react'
import { NavLink } from 'react-router-dom'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';


import { useLocation } from 'react-router-dom';


function Navbar() {
 
   const location = useLocation();

  useGSAP(() => {
    if (location.pathname === "/") {
      const tl = gsap.timeline();
      tl.from(".navbar", {
        y: -30,
        scaleY: 0.5,
        rotateX: 45,
        duration: 1,
        opacity: 0,
        delay: 0.2,
      });
    }
  }, [location.pathname]); // re-run only if pathname changes




    return (
        <>

            <div className="navbar font-serif w-full h-30  flex justify-center items-center  py-2">
                <nav className='w-3/4 h-2/4   flex items-center relative justify-center'>
                    <div className="nav-left h-full w-1/2 flex items-center justify-center gap-10 ">
                        {/* {["Home", "Work", "Gallery"].map((elem, idx) => {
                            return <NavLink key={idx} to='/' className={({isActive})=> isActive ? "active-link" :"" }> <h1 className='text-2xl text-[#847B1A] cursor-pointer'>{elem}</h1></NavLink>
                        })} */}
                        <NavLink to='/' className={({ isActive }) => isActive ? "active-link" : ""}> <h1 className='text-2xl text-[#847B1A] '>Home</h1></NavLink>
                        <NavLink to='/meet-us' className={({ isActive }) => isActive ? "active-link" : ""}> <h1 className='text-2xl text-[#847B1A] cursor-pointer'>Meet us</h1></NavLink>
                        <NavLink to='/gallery' className={({ isActive }) => isActive ? "active-link" : ""}> <h1 className='text-2xl text-[#847B1A] cursor-pointer'>Gallery</h1></NavLink>
                    </div>


                    <div className="logo h-42 w-45"><img src="/madam/D logo.png" alt="" /></div>

                    <div className="nav-right h-full w-1/2 flex items-center justify-center gap-10">
                        <NavLink to='/gratitude' className={({ isActive }) => isActive ? "active-link" : ""}> <h1 className='text-2xl text-[#847B1A] cursor-pointer'>Gratitude</h1></NavLink>
                        <NavLink to='/memories' className={({ isActive }) => isActive ? "active-link" : ""}> <h1 className='text-2xl text-[#847B1A] cursor-pointer'>Memories</h1></NavLink>
                        <NavLink to='/about' className={({ isActive }) => isActive ? "active-link" : ""}> <h1 className='text-2xl text-[#847B1A] cursor-pointer'>About Diksha</h1></NavLink>

                    </div>
                </nav>


            </div>
            <div className="line  bg-[#847B1A] w-[75%] h-[1px] m-auto "></div>

        </>
    )
}

export default Navbar