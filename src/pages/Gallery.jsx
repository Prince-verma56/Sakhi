import React from 'react'
import Navbar from '../components/others/Navbar'
import BadamFlake from '../components/All Cursors/BadamFlake'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

function Gallery() {

    useGSAP(() => {
        const tl = gsap.timeline();

        tl.from(".page1 .cook-title", { y: 40, opacity: 0, duration: 1, skewX: -40, skewY: 5, ease: "power3.out", stagger: 0.2 })
            .from(".gold-line1", { y: 40, opacity: 0, scaleX: 0, ease: "power3.out", duration: 1, stagger: 0.2 })
            .from(".page1-main", { opacity: 0 }, "-=0.5")
            .from(".page1-main .hero-right1 .bite-title", { y: 10, opacity: 0, height: 0, ease: "ease.inOut", duration: 1 })
            .from(".page1-main .her-react", { height: 0, y: 80, scaleY: 0.8, opacity: 0, duration: 1, ease: "power4.out", stagger: 0.15 }, "-=0.5")
            .from(".page1-main .hero-left1", { y: 10, opacity: 0, height: 0, ease: "ease.inOut", duration: 1.2 });

        // FIXED Page2 Animation
        gsap.from(".page2 ", { opacity: 0, duration: 0.8, ease: "power3.out", scrollTrigger: { trigger: ".page2", start: "top 80%", end: "bottom 50%",  toggleActions: "play reverse play reverse" } }); ScrollTrigger.refresh();
        gsap.from(".page2 .image-area", { height: 0, opacity: 0, y: 50, duration: 1, ease: "power3.out", scrollTrigger: { trigger: ".page2", start: "top 50%", end: "bottom top",  toggleActions: "play reverse play reverse" } }); ScrollTrigger.refresh();

    }, []);
    return (
        <>
            <BadamFlake />
            <div className="w-full h-full bg-[#fefae0] overflow-x-hidden px-4">
                <Navbar />

                {/* PAGE 1 */}
                <div className="page1 w-full h-20 p-10 mb-2 mt-10 flex justify-center items-center">
                    <h1 className="cook-title text-6xl font-bold font-[RollingBeat] text-center text-[#f48c06]">
                        {"Cooking gallery".split("").map((char, idx) => (
                            <span key={idx} className="chars-text inline-block">
                                {char === " " ? "\u00A0" : char}
                            </span>
                        ))}
                    </h1>
                </div>

                <div className="gold-line1 w-[80%] mx-30 h-20 flex justify-center items-center mt-1">
                    <img src="/Lines/LineCom 2.png" width={1000} alt="" />
                </div>

                <div className="page1-main h-screen w-full mt-2 px-4 bg-center bg-no-repeat bg-cover select-none pointer-events-none"
                    style={{ backgroundImage: "url('/backgrounds/Staionary.png')", objectFit: "cover" }}>
                    <div className="hero relative w-[90%] h-[95%] m-auto flex justify-around px-10 py-1 ">
                        <div className="hero-left1 w-[45%] h-[95%] flex items-end justify-center -translate-y-20 relative top-4 left-12">
                            <div className="shadow-[-12px_10px_46px_0px_#ffba08] w-[80%] h-[100%] rounded-3xl overflow-hidden border-2 border-white bg-center bg-cover flex items-center justify-center absolute top-10 left-20"
                                style={{ backgroundImage: "url('/Dishes/Maal Pua 2.jpg')", objectFit: "cover", backgroundPosition: "center" }}>
                            </div>
                        </div>

                        <div className="iso-leave1 absolute w-40 h-40 right-12"
                            style={{ backgroundImage: "url('/Dishes/Iso-leaves3.png')", backgroundSize: "cover", backgroundPosition: "center" }}
                        ></div>


                        <div className="hero-right1 w-1/2 h-full relative">
                            <div className="Bite-cont w-[80%] h-[95%] border border-zinc-300 rounded-xl px-6 mt-5 ml-10 shadow-lg backdrop-blur-[0.2em] inset-shadow-zinc-200/50 absolute top-10">
                                <div className="msg w-full h-full bg-center bg-no-repeat bg-cover relative p-10">
                                    <h1 className="font-[Valent] bite-title from-stranger tracking-wide text-center text-6xl font-bold text-[#f48c06] bg-clip-text">
                                        Ek Bite Uski "Yaadon Ka "
                                    </h1>
                                    <p className="her-react leading-[1.7em] good-para text-black font-mono mt-10 w-full flex flex-wrap">
                                        {"Jab usne pehli baar maalpua banaya tha, kaafi nervous thi — baar baar keh rahi thi, “pata nahi kaise banenge.” 👩‍🍳 Par jab bane, toh itne soft aur sweet nikle ki mummy, papa aur Hardik bhaiya ne dil khol ke taarif ki 😋🤍👏 Uski khushi uski awaz mein clearly sunai di 📞😊✨ Mujhe sabse achi baat yeh lagti hai ki vo jo bhi banati hai, mere saath zarur share karti hai 🍽️🤗 Aur bina taste kiye bhi, uske haathon ka swaad mehsoos ho jaata hai 🫶🍯💖"
                                            .split(" ")
                                            .map((word, idx) => (
                                                <span key={idx} className="para-msg3 inline-block mr-1">
                                                    {word}
                                                </span>
                                            ))}
                                    </p>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>

                {/* PAGE 2 */}
                <div className="page2 h-screen w-full mt-2 px-4 bg-center bg-no-repeat bg-cover relative"
                    style={{ backgroundImage: "url('/backgrounds/Cook Diary.jpg')", objectFit: "cover" }}>
                    <div className="image-area w-[52%] h-[65%] rounded-3xl absolute left-[23%] top-[25%] z-[100] bg-cover bg-center shadow-[10px_13px_46px_0px_#fdca40]"
                        style={{ backgroundImage: "url('/Dishes/Full Thali.png')" }}></div>
                </div>

            </div>
        </>
    )
}

export default Gallery
