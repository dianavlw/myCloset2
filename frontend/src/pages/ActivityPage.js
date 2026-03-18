import React from 'react';
import TodoList from '../components/BasicPages/TodoList';
import Footer from '../components/Footer/Footer';
import Weather from '../components/Weather/Weather'
import { Row, Col } from 'react-bootstrap'
import Profile from "../components/BasicPages/Profile"


function ActivityPage(props) {
  
  
    return (

      <div className="container">
      <hr />
      <h1 className="activity">
            Breath.Chill.DrinkBoba. 
            <hr />
          <Profile img="https://image.flaticon.com/icons/png/512/3498/3498590.png" />
          </h1>
          <p> Is it bobaTea Time?</p>
          <hr />
          <Weather />
           <hr />
          <TodoList />
       
      </div>      

 
    )
}

export default ActivityPage; 