import React from 'react'
import NavList from './NavList';
import icon from "../Assets/carbon.png"
import "../styles/footer-nav-list.css"

const FooterList = () => {
  return (
    <>
    <div className="footer-links">
      <div className="footer-left">
        <NavList item={"About"} />
        <NavList item={"Advertising"} />
        <NavList item={"Business"} />
        <NavList item={"How Search Works"} />
        </div>

        <div className="footer-center">
          <img src={icon} alt="carbon icon" />
          <span>Carbon neutral since 2007</span>
        </div>

        <div className="footer-right">
        <NavList item={"Privacy"} />
        <NavList item={"Terms"} />
        <NavList item={"Settings"} />
        </div>
    </div>
    </>
  )
}

export default FooterList;