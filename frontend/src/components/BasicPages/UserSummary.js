import React, {useState} from 'react';
import UserDetails from './UserDetails'
import Button from '../Button/Button'


function UserSummary(props) {
  const [visible, setVisible] = useState(false);

  return (

    <section>
     
     {visible && <UserDetails name = "Diana" located= "California" />}
      <div style ={{
        boxShadow: '0 2px, 6px, rgba(0,0,0,0.26',
        padding: '1rem',
        borderRadius: '10px'
      }}>
        <Button onClick={() => setVisible(curVisible => !curVisible)}>
          {visible ? 'Hide' : 'Show'} Details
        </Button>
     </div> 
        </section>
  );
}

export default UserSummary;