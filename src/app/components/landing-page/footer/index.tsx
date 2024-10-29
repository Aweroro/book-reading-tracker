import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-[#424242] py-4 mt-16'>
        <div className='container mx-auto px-4 text-center '>
            <p>&copy; {new Date().getFullYear()} Aweroro Hadi. All rights reserved.</p>
        </div>
    </footer>
  )
}

export default Footer;
