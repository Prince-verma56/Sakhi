import React from 'react'
import Lenis from 'lenis'
import Home from './components/pages/Home';
import SnowflakeCursor from './components/All Cursors/SnowFlakeCursor';
import { createBrowserRouter , RouterProvider } from 'react-router-dom';
import Navbar from './components/others/Navbar';
import MeetUs from './components/pages/MeetUs';
import Gratitude from './components/pages/Gratitude';
import About from './components/pages/About';




function App() {




const router = createBrowserRouter([
  {path:'/',
    element:<> <Home /> </>
  },
  {path:'/meet-us',
    element:<> <MeetUs/> </> 
  },
  {path:'/gratitude',
    element:<> <Gratitude/>  </> 
  },
  {path:'/about',
    element:<> <About/> </> 
  },
])







  // Initialize Lenis
  const lenis = new Lenis({
    lerp:22,
    duration:4.6
  });

  // Use requestAnimationFrame to continuously update the scroll
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);


  return (
<>

      {/* <SnowflakeCursor/> */}
<RouterProvider router={router}>

  <div className="w-full h-full bg-[#fefae0] overflow-x-hidden">
       
      <Home  />
    </div>


</RouterProvider>

  
</>
  )
}

export default App