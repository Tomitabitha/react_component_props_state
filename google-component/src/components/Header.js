import React from 'react'
import NavList from './NavList';
import AppLauncher from './AppLauncher';
import ProfilePicture from './ProfilePicture';
import "../styles/header.css"

const Header = () => {
  return (
    <div className ="menu">
    <div className="menu-items">
    <NavList item={"Gmail"} />
    <NavList item={"Images"} />
    <AppLauncher />
    <ProfilePicture />
    </div>
    </div>
  )
}

export default Header;