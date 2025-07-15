import React, { useRef } from 'react'
import Navbar from '../components/others/Navbar'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/src/ScrollTrigger'
import SnowflakeCursor from '../components/All Cursors/SnowFlakeCursor';
import Lenis from 'lenis';

function MeetUs() {


  gsap.registerPlugin(ScrollTrigger);



  // Initialize Lenis
  const lenis = new Lenis({
    lerp: 22,
    duration: 3.5
  });

  // Use requestAnimationFrame to continuously update the scroll
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  const containerRef = useRef(null);


useGSAP(() => {
  gsap.registerPlugin(ScrollTrigger);

  const tl = gsap.timeline();
  
  tl.from(".page1 .hero-right1", { height: 0, y: 80, scaleY: 0.8, opacity: 0, duration: 1.4, delay: 0.2, ease: "power4.out", stagger: 0.15 }, "start");
  tl.from(".page1 .hero-left", { height: 0, scaleX: 0, y: 80, scaleY: 0.8, opacity: 0, duration: 1.4, delay: 0.2, ease: "power4.out", stagger: 0.15 }, "start");
  tl.from(".our-meet", { y: 60, opacity: 0, duration: 2, delay: 0.7, ease: "power3.out", stagger: 0.05 }, "start");
  tl.from(".para-msg1", { y: 60, opacity: 0, duration: 0.6, delay: 0.1, ease: "power3.out", stagger: 0.03 }, "end");

  gsap.from(".page2 .hero-left2, .blossom", { height: 0, opacity: 0, duration: 1, ease: "power.inOut", stagger: 0.001, scrollTrigger: { trigger: ".page2", scroller: "body", start: "top 60%", end: "bottom 30%", scrub: 2 } });

  gsap.from(".page2 .hero-right2, .msg-cont3", { height: 0, y: 80, x: 100, scaleY: 0.8, opacity: 0, duration: 1.4, delay: 0.2, ease: "power4.out", stagger: 0.15, scrollTrigger: { trigger: ".page2", scroller: "body", start: "top 60%", end: "bottom 30%", scrub: 2 } });

  gsap.from(".para-msg2", { y: 60, x: -19, opacity: 0, duration: 2, delay: 0.6, ease: "expo.inOut", stagger: 0.001, scrollTrigger: { trigger: ".page2", scroller: "body", start: "top 60%", end: "bottom 30%", scrub: 2 } });

  gsap.from(".page3 .hero-right3, .blossom2", { height: 0, y: 80, scaleY: 0.8, opacity: 0, duration: 1.3, delay: 0.2, ease: "power3.inOut", stagger: 0.15, scrollTrigger: { trigger: ".page3", scroller: "body", start: "top 60%", end: "bottom 30%", scrub: 2 } });

  gsap.from(".page3 .Going-on", { y: 60, opacity: 0, duration: 0.9, ease: "power3.out", stagger: 0.05, scrollTrigger: { trigger: ".page3", scroller: "body", start: "top 60%", end: "bottom 30%", scrub: 2 } });

  gsap.from(".para-msg3", { y: 60, x: -19, opacity: 0, duration: 1.2, delay: 0.1, ease: "expo.inOut", stagger: 0.03, scrollTrigger: { trigger: ".page3", scroller: "body", start: "top 60%", end: "bottom 30%", scrub: 2 } });
});


  return (
    <>

      <div className="w-full h-auto bg-[#fefae0] px-4">
        <Navbar />
        <SnowflakeCursor />

        {/* PAGE 1 */}
        <div className="page1 w-full h-[82vh] mt-2 flex mb-10">
          <div className="hero-left w-[55%] h-full flex justify-center items-center">
            <div className="w-3/4 h-[95%] border rounded-xl p-5 px-2 flex justify-center items-center">
              <div className="msg w-full h-full bg-center bg-no-repeat bg-cover relative p-10 max-w-[650px] text-center flex flex-col justify-center items-center">

                <h1 className='our-meet text-6xl font-mono font-bold mb-8'>
                  {"Our Meet".split("").map((char, idx) => (
                    <span key={idx} className="chars-text inline-block text-[#847B1A]">
                      {char === " " ? "\u00A0" : char}
                    </span>
                  ))}
                </h1>

                <p className='leading-[2em] good-para text-black font-mono flex flex-wrap justify-center gap-[4px] max-w-[600px]'>
                  {"We never even imagined that one day we’d talk to each other 🤝. I was always buried in my own world 📚 — the quiet, studious type 🙇‍♂️, barely speaking to anyone 🤐. But ever since we met, things began to change 🌱. A friendship slowly bloomed 🌸, filled with silent understanding 🤫, sweet conversations 🍫, and a bond that speaks even when words don’t 🫂. We went from strangers to comfort zones 🏡. There’s a warmth in your presence ☀️, a calm in our connection 🌊 — something I didn’t know I needed 💖."
                    .split(" ")
                    .map((word, idx) => (
                      <span key={idx} className="inline-flex">
                        {Array.from(word).map((char, cIdx) => (
                          <span key={cIdx} className="para-msg1 inline-block">
                            {char}
                          </span>
                        ))}
                      </span>
                    ))}
                </p>

              </div>
            </div>
          </div>


          <div className="hero-right1 w-1/2 h-full flex justify-center items-center">
            <div
              className="w-3/4 h-[97%] rounded-4xl border bg-cover bg-no-repeat"
              style={{ backgroundImage: "url('/Both Us/FrndGibli.jpg')" }}
            />
          </div>
        </div>


        {/* PAGE 2 */}
        <div className="page2 w-full h-screen mt-20 flex relative">
          <div className="hero-left2 w-2/2 h-[95%] flex justify-center items-center">
            <div className="w-3/4 h-[95%] rounded-4xl border bg-cover bg-no-repeat"
              style={{ backgroundImage: "url('/Both Us/FrndGibli2.jpg')", objectFit: "cover" }}
            />
          </div>

          <div className="hero-right2 w-[50%] h-[90%] flex justify-center items-center">
            <div className="w-full h-full border px-6 rounded-4xl flex justify-center items-center">
              <div className="msg w-full h-full bg-center bg-no-repeat bg-cover relative p-10 max-w-[650px] text-center">
                <h1 className='text-6xl font-bold font-mono text-[#958c23] mb-8'>
                  Supportive
                </h1>

                <p className='leading-[1.7em] good-para text-black font-mono flex flex-wrap justify-center gap-[4px]'>
                  {"She may not be deeply into tech like me , but her nature is what truly stands out ✨. She's incredibly supportive 🤝 — always ready to listen 👂, to understand 🧠, and to stand by me even when she doesn’t fully get what I’m working on. It’s the little things she does — showing up 🚪, encouraging me 💬, staying curious ❓— that mean the most. During our last hackathon together , it wasn’t her skills, but her kindness 💖, patience 🕊️, and presence 👥 that made everything special 🌟."
                    .split(" ")
                    .map((word, idx) => (
                      <span key={idx} className="inline-flex">
                        {Array.from(word).map((char, cIdx) => (
                          <span key={cIdx} className="para-msg2 inline-block">
                            {char}
                          </span>
                        ))}
                      </span>
                    ))}
                </p>
              </div>
            </div>
          </div>


          <div
            className="blossom w-60 h-55 absolute bottom-10 left-3 bg-center bg-cover bg-no-repeat"
            style={{ backgroundImage: "url('/flowers/simple2.png')", objectFit: "cover" }}
          ></div>


        </div>

        {/* PAGE 3 */}
        <div className="page3 bg-[#fefae0] w-full h-[100vh] mt-20 flex relative">
          <div className="hero-left3 w-1/2 h-full flex justify-center items-center">
            <div className="msg-cont3 w-3/4 h-[90%] border rounded-xl px-6">
              <div className="msg w-full h-full bg-center bg-no-repeat bg-cover relative p-10">
                <h1 className='Going-on text-center text-4xl font-bold font-mono text-[#958c23]'>
                  and It's Going On..
                </h1>

                <p className='leading-[2em] good-para text-black font-mono mt-10 flex flex-wrap justify-center gap-[4px] max-w-[600px]'>
                  {"Some bonds don’t come with a deadline 🕰️— they just flow, day by day, message by message 📲, memory by memory 📸. We still tease each other, still share the tiniest updates of our day 🍽️, still argue over silly things 🙃, and still end up laughing about it all . There’s no official tag to this, no big promises — just two people, still choosing to stay connected 🤝, still being there in the most real and simple ways. And maybe that’s what makes it special — it’s still going on, effortlessly 🚶‍♂️🚶‍♀️💬."
                    .split(" ")
                    .map((word, idx) => (
                      <span key={idx} className="inline-flex">
                        {Array.from(word).map((char, cIdx) => (
                          <span key={cIdx} className="para-msg3 inline-block">
                            {char}
                          </span>
                        ))}
                      </span>
                    ))}
                </p>

              </div>
            </div>
          </div>

          <div className="hero-right3 w-1/2 h-[100vh] flex justify-center items-center">
            <div
              className="w-3/4 h-[90%] rounded-4xl border bg-cover bg-no-repeat bg-center"
              style={{ backgroundImage: "url('/Both Us/Together 1.jpg')", objectFit: "cover" }}
            />
          </div>

          <div
            className="blossom2 w-60 h-55 absolute bottom-10 right-3 bg-center bg-cover bg-no-repeat"
            style={{ backgroundImage: "url('/flowers/simple1.png')", objectFit: "cover" }}
          />
        </div>


      </div>


    </>
  )
}

export default MeetUs