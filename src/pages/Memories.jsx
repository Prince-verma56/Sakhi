import React from 'react'
import Navbar from '../components/others/Navbar'
// import ComingSoon from '../components/Default Pages/ComingSoon'
import ComingSoon2 from '../components/Default Pages/ComingSoon2'

function Memories() {
    return (
        <>

            <div className="w-full h-screen bg-[#fefae0] overflow-x-hidden px-4">
                <Navbar />
                <div className="w-full h-[80%] bg-[#fefae0]">
                    <ComingSoon2/>
                </div>
            </div>
        </>



  )
}

export default Memories