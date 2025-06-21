import React, { useRef } from 'react'
import Navbar from '../others/Navbar'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

import Lenis from 'lenis';

function MeetUs() {


    
  // Initialize Lenis
  const lenis = new Lenis({
    lerp:22,
    duration:2.6
  });

  // Use requestAnimationFrame to continuously update the scroll
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);



    const containerRef = useRef(null);

    return (
        <>

           <div className="w-full h-auto bg-[#fefae0] px-4"> 
  <Navbar />

  {/* PAGE 1 */}
  <div className="page1 w-full h-[82vh] mt-2 flex mb-10">
    <div className="hero-left w-1/2 h-full flex justify-center items-center">
      <div className="w-3/4 h-[95%] border rounded-xl p-5">
        <div className="msg w-full h-full bg-center bg-no-repeat bg-cover relative p-10">
          <h1 className='text-center text-6xl font-bold font-mono text-[#958c23]'>Our meet</h1>
          <p className='leading-[1.7em] good-para text-black font-mono mt-10'>
            We never even imagined that one day we’d talk to each other. I was always buried in my own world — the quiet, studious type, barely speaking to anyone. But ever since we met, things began to change. A friendship slowly bloomed, filled with silent understanding, sweet conversations, and a bond that speaks even when words don’t. We went from strangers to comfort zones. There’s a warmth in your presence, a calm in our connection — something I didn’t know I needed.
          </p>
        </div>
      </div>
    </div>

    <div className="hero-right w-1/2 h-full flex justify-center items-center">
      <div className="w-3/4 h-[97%] rounded-4xl border bg-cover bg-no-repeat"
        style={{ backgroundImage: "url('/Both Us/FrndGibli.jpg')" }}
      />
    </div>
  </div>

  {/* PAGE 2 */}
  <div className="page2 w-full h-screen mt-10 flex">
    <div className="hero2-right w-2/2 h-full flex justify-center items-center">
      <div className="w-3/4 h-[97%] rounded-4xl border bg-cover bg-no-repeat"
        style={{ backgroundImage: "url('/Both Us/FrndGibli2.jpg')", objectFit: "cover" }}
      />
    </div>

    <div className="hero-left w-[50%] h-full flex justify-center items-center">
      <div className="w-full h-[95%] border px-6 rounded-4xl">
        <div className="msg w-full h-full bg-center bg-no-repeat bg-cover relative p-10">
          <h1 className='text-center text-6xl font-bold font-mono text-[#958c23]'>Supportive</h1>
          <p className='leading-[1.7em] good-para text-black font-mono mt-10'>
            She may not be deeply into tech like me, but her nature is what truly stands out. She's incredibly supportive — always ready to listen, to understand, and to stand by me even when she doesn’t fully get what I’m working on. It’s the little things she does — showing up, encouraging me, staying curious — that mean the most. During our last hackathon together, it wasn’t her skills, but her kindness, patience, and presence that made everything special.
          </p>
        </div>
      </div>
    </div>
  </div>

  {/* PAGE 3 */}
  <div className="page3 bg-[#fefae0] w-full h-[100vh] mt-20 flex">
    <div className="hero-left w-1/2 h-full flex justify-center items-center">
      <div className="w-3/4 h-[95%] border rounded-xl px-6">
        <div className="msg w-full h-full bg-center bg-no-repeat bg-cover relative p-10">
          <h1 className='text-center text-6xl font-bold font-mono text-[#958c23]'>Our meet</h1>
          <p className='leading-[1.7em] good-para text-black font-mono mt-10'>
            We never even imagined that one day we’d talk to each other. I was always buried in my own world — the quiet, studious type, barely speaking to anyone. But ever since we met, things began to change. A friendship slowly bloomed, filled with silent understanding, sweet conversations, and a bond that speaks even when words don’t. We went from strangers to comfort zones. There’s a warmth in your presence, a calm in our connection — something I didn’t know I needed.
          </p>
        </div>
      </div>
    </div>

    <div className="hero-right w-1/2 h-[100vh] flex justify-center items-center">
      <div className="w-3/4 h-[95%] rounded-4xl border bg-cover bg-no-repeat"
        style={{ backgroundImage: "url('/Both Us/FrndGibli.jpg')" }}
      />
    </div>
  </div>
</div>


        </>
    )
}

export default MeetUs