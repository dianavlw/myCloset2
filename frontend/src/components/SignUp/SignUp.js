import React, { useState } from 'react';

function SignUp() {
  const [contact, setContact] = useState({
    userName: "",
    email: "",
    password:""
  });

  function handleChange(event){
    const { name, value } = event.target;

    setContact(prevValue => {
      if(name === "userName") {
        return {
          userName: value,
          password: prevValue.password,
          email: prevValue.email
        };
      } else if ( name === "password"){
        return {
          userName: prevValue.userName,
          password: value,
          email: prevValue.email
        };
      } else if ( name === "email"){
        return {
          userName: prevValue.userName,
          password: prevValue.password,
          email: value
        };
      }
    });
  }

  return (
      <div className="container">
        <h1>
          Welcome Back. {contact.userName}
        </h1>
        
        <p>{contact.email}</p>
        <form>
          <input onChange={handleChange} value={contact.userName} name="userName" placeholder="User Name" />
          <input onChange={handleChange} value={contact.email} name="email" placeholder="Email" />
          <input onChange={handleChange} value={contact.password} name="password" placeholder="Password" />
          <button>Submit</button>
        </form>
      </div>
  );
}

export default SignUp;