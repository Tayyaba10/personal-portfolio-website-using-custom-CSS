import Image from "next/image"
import React from 'react'
import '../style/skill.css'


export default function Skill() {

  return (
    <div className="skill-section">
       <div className="main-container">

           <div className="child-container">

            {/* top */}
            <div className="skill">
               <h2>SKILLS</h2>
               <p>These are technical skills that can be measured and are often gained through education, training, or experience. Examples include programming, data analysis, and graphic design.</p>
             </div>

             {/* bottom */}
            <div className="icons">

             <div className="child-icon">
                
              <Image src= '/typescript-48.png' alt = "icon" width={150} height={150}/> 
              
              <Image src= '/javascript-48.png' alt = "icon" width={150} height={150}/> 
              
              <Image src= '/tailwindcss-48.png' alt = "icon" width={150} height={150}/> 
              
              <Image src= '/nodejs-48.png' alt = "icon" width={150} height={150}/> 
              
              <Image src= '/nextjs-48.png' alt = "icon" width={150} height={150}/> 
              
              <Image src= '/react-native-50.png' alt = "icon" width={150} height={150}/> 
              
              <Image src= '/git-50.png' alt = "icon" width={150} height={150}/> 
              
              <Image src= '/figma-48.png' alt = "icon" width={150} height={150}/> 
              
             </div> 
            </div>
         </div>
       </div>
    </div>
  )
}
