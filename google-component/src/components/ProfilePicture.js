import React from 'react'
import profile from "../Assets/profile.jpg";
import "../styles/profilepicture.css"

const ProfilePicture = () => {
  return (
    <div className='profile'>
        <img src={profile} alt="profile image" />
    </div>
  )
}

export default ProfilePicture;
