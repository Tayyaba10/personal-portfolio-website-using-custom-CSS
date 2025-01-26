import Image from "next/image";
import React from 'react'
import '../app/style/hero.css'

export default function Hero() {
  return (
     <div className="hero-section">
        <div className="container ">

            {/* left side */}
            <div className="left-side">

             <div className="image">
               <Image src='/profile.png' alt='profile pic' width={300} height={300} />
             </div>
            </div>

            {/* right side */}
            <div className="right-side">
                <h1>Welcome To Our Website</h1>
               <div className="paragraph">
                 <p>Tayyaba Arshad is a front-end developer and WordPress expert experience. His portfolio’s design seeks to capture the visitors’ attention with a creative concept and seamless background animation.</p>
                  <p >This portfolio is both well-written and informative, with easy access to his competencies and job experience. You can also turn on the sound effect also to make surfing through his portfolio more enjoyable.</p>
               </div>
              <button className="button">Learn more</button>
            </div>

        </div>
     </div>   
  )
}
