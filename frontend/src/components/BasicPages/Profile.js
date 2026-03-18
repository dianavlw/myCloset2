import React from 'react';

function Profile(props) {
  return (
    <div>
      <img className = "circle-img" src={props.img} alt="profile_img" />
    </div>
  );
}

export default Profile;