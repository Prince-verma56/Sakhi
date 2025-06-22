import React from "react";
import Navbar from "../components/others/Navbar";
import MagnetLines from "../components/MagnetLines/MagnetLines";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from 'gsap/src/ScrollTrigger'
import gsap from "gsap";
import SnowflakeCursor from "../components/All Cursors/SnowFlakeCursor";
import SnowflakeCursor2 from "../components/All Cursors/SnowFlakeCursor2";

function Gratitude() {


  gsap.registerPlugin(ScrollTrigger);


  useGSAP(() => {
    const tl = gsap.timeline();

    // Page1


    tl.from(".layer ", {
      y: 60, // from below
      opacity: 0,
      duration: 0.6,
      ease: "power3.out",
      stagger: 0.05,
    });
    tl.from(".chars-text", {
      y: 60, // from below
      opacity: 0,
      duration: 0.6,
      ease: "power3.out",
      stagger: 0.05,
    });

    gsap.from(".page1 .hero-left2 ", {
      height: 0,
      y: 80,

      scaleY: 0.8,
      opacity: 0,
      // rotateY: 30,
      duration: 1.4,
      delay: 0.2,
      ease: "power4.out",
      stagger: 0.15,
      scrollTrigger: {
        trigger: ".page1",
        scroller: "body",
        start: "top 70%",
        end: "bottom 40%",
        //  markers:true
      }

    });

    gsap.from(".page1 .from-stranger ,.Stranger-cont ", {
      y: 60, // from below
      opacity: 0,
      duration: 2,
      delay: 0.7,
      scrub: 2,
      ease: "power3.out",
      stagger: 0.05,
      scrollTrigger: {
        trigger: ".page1",
        scroller: "body",
        start: "top 70%",
        end: "bottom 40%",
        //  markers:true
      }

    });

    gsap.from(".para-msg1 ", {
      y: 60, // from below
      x: -19,

      opacity: 0,
      duration: 4,
      ease: "expo.inOut",
      stagger: 0.001,
      scrollTrigger: {
        trigger: ".page1",
        scroller: "body",
        start: "top 68%",
        end: "bottom 36%",
        //  markers:true
      }

    });



    //<------------ To Current Page --->




    gsap.from(".page2 .chulbuli ", {
      height: 0,
      y: 80,

      scaleY: 0.8,
      opacity: 0,
      // rotateY: 30,
      duration: 1.4,
      delay: 0.2,
      ease: "power4.out",
      stagger: 0.15,
      scrollTrigger: {
        trigger: ".page2",
        scroller: "body",
        start: "top 70%",
        end: "bottom 40%",
        // markers: true
      }

    });


    gsap.from(".page2 .to-current , .hero2-left", {
      height: 0,
      y: 80,

      scaleY: 0.8,
      opacity: 0,
      // rotateY: 30,
      duration: 1.4,
      delay: 0.2,
      ease: "power4.out",
      stagger: 0.15,
      scrollTrigger: {
        trigger: ".page2",
        scroller: "body",
        start: "top 70%",
        end: "bottom 40%",
        // markers: true
      }

    });

    gsap.from(".para-msg2 , .gold-line1 ", {
      y: 60, // from below
      x: -19,
      opacity: 0,
      duration: 1.2,
      delay: 0.1,
      ease: "expo.inOut",
      scrub: 2,
      stagger: 0.03,
      scrollTrigger: {
        trigger: ".page2",
        scroller: "body",
        start: "top 70%",
        end: "bottom 40%",
        // markers: true
      }
    });



    //<-------Silence Support -->

    gsap.from(".page3 .Strong ", {
      height: 0,
      y: 80,

      scaleY: 0.8,
      opacity: 0,
      // rotateY: 30,
      duration: 1.4,
      delay: 0.2,
      ease: "power4.out",
      stagger: 0.15,
      scrollTrigger: {
        trigger: ".page3",
        scroller: "body",
        start: "top 70%",
        end: "bottom 40%",
        // markers: true
      }

    });


    gsap.from(".page3 .Silence", {
      height: 0,
      y: 80,

      scaleY: 0.8,
      opacity: 0,
      // rotateY: 30,
      duration: 1.4,
      delay: 0.2,
      ease: "power4.out",
      stagger: 0.15,
      scrollTrigger: {
        trigger: ".page3",
        scroller: "body",
        start: "top 65%",
        end: "bottom 36%",
        // markers: true
      }

    });

    gsap.from(".para-msg3 , .gold-line2  ", {
      y: 60, // from below
      x: -19,
      opacity: 0,
      duration: 1.2,
      delay: 0.1,
      ease: "expo.inOut",
      scrub: 2,
      stagger: 0.03,
      scrollTrigger: {
        trigger: ".page3",
        scroller: "body",
        start: "top 65%",
        end: "bottom 37%",
        // markers: true
      }
    });





  });

  return (
    <>
      <SnowflakeCursor />
      <div className="h-full w-full bg-[#fefae0] overflow-x-hidden relative px-4">
        <Navbar />

        {/* TEXT AREA + MAGNETLINES */}
        <div className="main h-[82vh] w-full relative">
          <div className="text-area z-[20] w-full">
            <h1 className="text-7xl font-mono absolute z-[20] top-[40%] left-[25%] text-[#847B1A]">
              {"How its Feels ..?Now".split("").map((char, idx) => (
                <span key={idx} className="chars-text inline-block">
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </h1>
          </div>

          <div className="layer absolute ml-10 z-[10] w-[90%] h-1/2 m-auto flex gap-70">
            <div className="left w-1/2 h-full"><MagnetLines /></div>
            <div className="left w-1/2 h-full"><MagnetLines /></div>
          </div>
        </div>

        <div className="line bg-[#847B1A] w-[90%] h-[1.5px] m-auto"></div>

        {/* PAGE 1 */}
        <div className="page1 h-screen w-full mt-10 px-4">
          <div className="hero w-[90%] h-[95%] m-auto  flex justify-around px-4">
            {/* Left Image */}
            <div className="hero-left2 w-1/2 h-full flex items-center justify-center">
              <div className="w-[95%] h-[95%] rounded-xl overflow-hidden border bg-center bg-cover bg- flex items-center justify-center"
                style={{ backgroundImage: "url('/ScrenShot/BirthdayWish.jpg')", objectFit: "cover" }}>

              </div>
            </div>

            {/* Right Text */}
            <div className="hero-right2 w-1/2 h-full">
              <div className="Stranger-cont w-[90%] h-[95%] border rounded-xl px-6 mt-5 ml-10">
                <div className="msg w-full h-full bg-center bg-no-repeat bg-cover relative p-10">
                  <h1 className="from-stranger text-center text-6xl font-bold font-mono text-[#958c23]">
                    From Stranger
                  </h1>
                  <p className="leading-[1.7em] good-para text-black font-mono mt-10">
                    {"It all started with a simple birthday wish — just a heartfelt message at 2:05 AM, not knowing that it would lead to something so genuine. At that time, I had no idea we'd even talk this much. Honestly, I was nervous before sending that message — thinking how strange it felt since we had never even spoken or met before. But then I reminded myself, she’s also just a person, like me. Slowly, from that one text, a beautiful bond began to grow — full of warmth, kindness, comfort, and an unexpected yet priceless friendship that now feels like it was always meant to be."
                      .split("")
                      .map((char, idx) => (
                        <span key={idx} className="para-msg1 inline-block">
                          {char === " " ? "\u00A0" : char}
                        </span>
                      ))}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="gold-line1 w-[80%] mx-30 h-20 flex justify-center items-center mt-20">
          <img src="/Lines/LineCom 2.png" width={1000} alt="" />
        </div>
        {/* PAGE 2 */}
        <div className="page2 h-screen w-full mt-10 px-4">
          <div className="hero w-[90%] h-[95%] mx-auto flex justify-between items-center gap-6 px-4">

            {/* LEFT SIDE (Text) */}
            <div className="hero2-left w-1/2 h-[95%] p-10 border rounded-lg">
              <h1 className="to-current text-center text-6xl font-bold font-mono text-[#958c23]">
                To Current
              </h1>
              <p className="para-msg2 leading-[1.7em] text-black font-mono mt-10 w-[88%]">
                {"Woh sirf sweet nahi hai — usme thoda drama, thodi si sass, aur poori duniya jitni care chhupi hui hai. Jaise hi baat karte waqt ladti hai, taang khinchti hai, aur fir end mein ek chhoti si concern bhari line bolti hai — bas wahi uski asli vibe hai. Kabhi kehti hai “ab to baat hi nahi karungi,” fir 2 minute baad “oye sun na” kehke wapas aa jaati hai. Uska “chup chap reh” bolna bhi pyaar jaisa lagta hai. Har conversation mein kabhi hasa deti hai, kabhi confuse karti hai, aur fir ekdum se dil ko sukoon de deti hai. Aur fir end hamesha wahi hota hai — “ab bta kya khaya aaj?” — jaise sab kuch thik ho gaya ho. ".split("").map((char, idx) => (
                  <span key={idx} className="para-msg2 inline-block">
                    {char === " " ? "\u00A0" : char}
                  </span>
                ))}
              </p>
            </div>


            {/* RIGHT SIDE (Image) */}
            <div className="chulbuli hero2-right w-1/2 h-full flex items-center justify-center">
              <div className="w-[95%] h-[100%] rounded-3xl overflow-hidden border flex items-center justify-center bg-center bg-cover">
                <img
                  src="/ScrenShot/Chulbuli.jpg"
                  alt="Current Screenshot"
                  className="w-full h-full bg-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="gold-line2 w-[80%] mx-30 h-20 flex justify-center items-center mt-20">
          <img src="/Lines/LineCom 2.png" width={1000} alt="" />
        </div>
        {/* PAGE 3 */}
        <div className="page3 h-screen w-full mt-10 px-4">
          <div className="Strong hero-left3 w-[90%] h-[95%] m-auto  flex justify-around px-4">
            {/* Left Screenshot */}
            <div className="hero3-left w-1/2 h-full flex items-center justify-center">
              <div className="w-[95%] h-[95%] rounded-xl overflow-hidden border bg-center bg-cover">
                <img
                  src="/ScrenShot/WA_chat.png"
                  alt="WA Chat Screenshot"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Text */}
            <div className="hero-right3 w-1/2 h-full mt-5">
              <div className="w-[90%] h-[95%] border rounded-xl px-6">
                <div className="msg w-full h-full bg-center bg-no-repeat bg-cover relative p-10 px-7">
                  <h1 className="Silence text-center text-4xl font-bold font-mono text-[#958c23] leading-tight">
                    "Silent Support,<br />Loud Impact"
                  </h1>
                  <p className="para-msg3 leading-[2em] good-para text-black font-mono mt-10 w-full">
                    {"In moments when I felt completely drained — when all the effort, sleepless nights, and failure made me question myself — she stood by me like a wall of belief. Her words reminded me of my strength, even when I couldn’t see it. She didn’t just say she believed in me — she meant it. That quiet faith ✨, that gentle pride in her voice, was enough to help me hold on and keep moving forward."
                      .split("")
                      .map((char, idx) => (
                        <span key={idx} className="para-msg3 inline-block">
                          {char === " " ? "\u00A0" : char}
                        </span>
                      ))}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default Gratitude;