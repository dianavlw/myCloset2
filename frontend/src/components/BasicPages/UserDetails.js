import React from 'react';

function UserDetails(props) {
  return (
   
      <div>
        <p>
        <br></br>
        <strong> Name:</strong>{props.name}
        <br></br>
        <strong>Located: </strong> {props.located}
      </p>
    </div>
  );
}

export default UserDetails;