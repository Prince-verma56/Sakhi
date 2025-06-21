import React from 'react'
import Navbar from '../others/Navbar'
import InfiniteScroll from '../InfiniteScroll/InfiniteScroll'

function About() {
    const items = [
        { content: "Mai Kya hi Khu..?" },
        { content: <p>"Uski smile 😊 sirf ek expression nahi hai, vo ek vibe hai — jo andar tak khushi de jaati hai ✨💛"</p> },
        { content: "Lo Suno Fir..." },
        { content: <p>ek blessing hai jiske hone se life me rang bhar jaate hain 🌈🤍" 4</p> },
        { content: "Aur Sach khu To.." },
        { content: <p>"Uska presence hi itna calm 🌿 hota hai ki stress apne aap dissolve ho jaata hai 😌"</p> },
        { content: "Aur Sun.." },
        { content: <p>"Uski baatein simple hoti hain 📞, par dil tak jaati hain. Vo har sentence me khud ko daal deti hai."</p> },
        { content: "Aur Sun.." },
        { content: <p>"Uski aankhon mein ek honesty hai 😊 — jo keh na paaye vo bhi samajh jaati hai."</p> },
        { content: "Aur Sun.." },
        { content: <p> "Vo sirf kaano se nahi, dil se sunti hai 💖. Har ek baat ko itni gently sunna — jaise har emotion uske liye ek respect aur care se bhara treasure ho 🫶✨."</p> },
        { content: "Ab Sunte Jao.." },
        { content: <p>"Uski energy calm 🌿 bhi hai, kind bhi. Aur sabse khaas — bilkul asli hai, bina kisi dikhave ke."</p> },
    ];


    return (
        <>
            <div className="w-full h-auto bg-[#fefae0]">
                <Navbar />
                  


                <div className="h-[85vh] w-100vw mt-[2px] relative ">
                    <div className="flower-area w-full h-50  absolute  z-[77] top-0"
                    style={{
                        backgroundImage: `url("./src/assets/flowers/Flowere_FLip.png")`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat"
                    }}
                    >
                       
                    </div>
                   <InfiniteScroll
                    items={items}
                    isTilted={true}
                    tiltDirection='left'
                    autoplay={true}
                    autoplaySpeed={0.1}
                    autoplayDirection="down"
                    pauseOnHover={true}
                />
                </div>
            </div>

        </>
    )
}

export default About