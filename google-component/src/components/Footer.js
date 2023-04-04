import React from 'react'
import FooterList from './FooterList';
import "../styles/footer.css"

const Footer = () => {
  return (
    <div className='footer'>
      <p>Nigeria</p>
        <hr></hr>
        <div>
        <FooterList />
        </div>
    </div>
  )
}

export default Footer;