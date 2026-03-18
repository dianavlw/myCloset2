import React from 'react';

function Button(props) {
  return (
    <div>
      <button onClick={props.onClick} Style ={{
        font: 'inherit',
        cursor: 'pointer',
        border: '2 px',
        color: 'white',
        padding: '1rem 2rem'
      }}>
        {props.children}
      </button>
    </div>
  );
}

export default Button;