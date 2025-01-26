import Link from 'next/link'
import React from 'react'
import '../app/style/navbar.css'

export default function Navbar() {
  return (
    <nav className='nav'>
      
      <div className='logo'>
        <span>LOGO</span>
      </div>
      
        <ul className='nav-link'>
           <li><Link href={"/"}>Home</Link></li>
           <li><Link href={"/skill"}>Skill</Link></li>
           <li><Link href={"/"}>Education</Link></li>
           <li><Link href={"/"}>Experience</Link></li>
           <li><Link href={"/projects"}>Projects</Link></li>
           <li><Link href={"/contact"}>Contact</Link></li>
           
        </ul>
      
    </nav>
  )
}
