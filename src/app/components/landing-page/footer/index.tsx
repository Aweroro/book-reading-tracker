import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-[#e0e0e0] py-4 mt-16'>
        <div className='container mx-auto px-4 text-center text-xl '>
            <p>&copy; {new Date().getFullYear()} Aweroro Hadi. All rights reserved.</p>
        </div>
    </footer>
  )
}

export default Footer;
