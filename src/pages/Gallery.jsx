import React from 'react'
import Navbar from '../components/others/Navbar'
import ComingSoon from '../components/Default Pages/ComingSoon'

function Gallery() {
    return (
        <>

            <div className="w-full h-screen bg-[#fefae0] overflow-x-hidden px-4">
                <Navbar />
                <div className="w-full h-[80%] bg-[#fefae0]">
                    <ComingSoon/>
                </div>
            </div>
        </>
    )
}

export default Gallery