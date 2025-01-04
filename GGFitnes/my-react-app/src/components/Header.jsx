import React from 'react'
import '../public/Header.css'
import Online from './Online';

function Header() {
  return (<header >
    <div className='header'>
        <ul className='header_ul'>
            <li className='header_li logo'>G\G FITNESS</li>
            <li className='header_li hover'>HOME</li>
            <li className='header_li hover'>ABOUT G\G</li>
            <li className='header_li hover'>PERSONAL TRAINING</li>
            <li className='header_li hover'>ONLINE TRAINING</li>
            <li className='header_li hover'>CONTACT</li>
        </ul>
    </div>
  </header>)}

export default Header;
