import React from 'react'

const Footer = () => {
  return (
    <footer className='fixed bottom-0 w-full bg-[#e0e0e0] py-0 lg:py-2'>
        <div className='container mx-auto px-4 text-center text-xs lg:text-sm'>
            <p>&copy; {new Date().getFullYear()} Aweroro Hadi. All rights reserved.</p>
        </div>
    </footer>
  )
}

export default Footer;
