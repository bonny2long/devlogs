import React from 'react';

const ProfileImage = ({ src, alt }) => (
  <img 
    className="profile-img" 
    src={src} 
    alt={alt} 
  />
);

export default ProfileImage;