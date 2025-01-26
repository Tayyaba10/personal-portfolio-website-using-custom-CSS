import React from 'react'
import { IoIosMail } from "react-icons/io";
import { BsTelephone } from "react-icons/bs";
import '../style/contact.css'

export default function Contact() {
  return (
    <div className='contact-dev'>
      <div className='main-dev'>

        {/* left side  */}
        <div className='left-side'>
            <h2 className='heading'>Get in touch</h2>
            <p className='para'>Drop me a line, give me a call, or send on a message by submitting the form.</p>
            
           <div className='contactDetail'>
             <div className='socialemail'>
              <IoIosMail size={30}/> tayyaba.456t@gmail.com
             </div>
             <div className='number'>
               <BsTelephone size={30} /> +92 333 388494
             </div>
           </div> 
        </div>

         {/* right side */}
       <div className='right-side'>
         <form className='main-form-dev'>
          
             {/* form  */}
            <div className='form'>
                <label htmlFor="name" className='formLabel'>Name</label>
                <input type="text" id='name' className='formInput'/>
            </div>

            <div className='form'>
                <label htmlFor="email" className='formLabel'>Email</label>
                <input type="text" id='email' className='formInput' /> 
            </div>

            <div className='form'>
                <label htmlFor="message" className='formLabel'>Message</label>
                <textarea id='message' className='formInput' rows={4}></textarea>
            </div>

            {/* button */}
            <button className='btn'>Send message</button>
         </form>

        </div>

      </div>
    </div>
  )
}
