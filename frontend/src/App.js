import './App.css';
import { BrowserRouter, Route } from "react-router-dom"
import { useState } from "react"
import NavBar from "./components/NavBar/NavBar"
import Footer from "./components/Footer/Footer"
import HomePage from "./pages/HomePage"
import LoginPage from "./pages/LoginPage"
import LogoutPage from "./pages/LogoutPage"
import SignUpPage from "./pages/SignUpPage"
import ClothesPage from "./pages/ClothesPage"
import ClosetPage from "./pages/ClosetPage"
import ActivityPage from "./pages/ActivityPage"
import UserContext from "./components/UserContext/UserContext"



function App() {
  const [userInfo, setUserInfo] = useState(null)
  function updateUserInfo(newUserInfo) {
    console.log(newUserInfo)
  const token = newUserInfo.token 
  const user = newUserInfo.user  
    //console.log(token)
    localStorage.setItem("token", token)
    localStorage.setItem("user", user.username)
    setUserInfo(newUserInfo)
    
  }
  //localStorage.getItem("token")
  
  // console.log(userInfo)
  return (
    <div className="App">


      {/* <NavBar /> */}
     {userInfo && <h1>{userInfo.user.username}</h1>}
      <BrowserRouter>
        <UserContext.Provider value={userInfo}>
      
            <NavBar user={userInfo}/>  
            
            <Route exact path='/' component={HomePage} />
            <Route exact path='/ClosetPage' component={ClosetPage} />
            <Route exact path='/activitypage' component={ActivityPage} />
              {/* <Route exact path="/" render={() => <HomePage />} /> */}
              <Route exact path="/loginpage" render={(routerProps) => <LoginPage {...routerProps} handleLogin={updateUserInfo}/>} />
              <Route exact path="/logout" render={() => <LogoutPage handleLogout={updateUserInfo}/>} />
              <Route exact path="/signup" render={(routerProps) => <SignUpPage {...routerProps} />} />
              <Route exact path="/clothes/:clothesId" render={(routerProps) => <ClothesPage {...routerProps}/>} />
              <Route exact path="/clothes/:clothestId/closet/:closetId" render={(routerProps) => <ClosetPage {...routerProps}/>} /> 
      
              <br />
        </UserContext.Provider>
      </BrowserRouter>
      <br />

          <div>
            <Footer />
          </div>
    </div>

);
}

export default App;





//OLD CODE.not full stack //
// import './App.css';
// import { BrowserRouter as Route } from "react-router-dom";
// import {Jumbotron, Container} from 'react-bootstrap';
// import { useState } from "react"
// // components //

// import NavBar from "./components/NavBar/NavBar";
// import HomePage from "./pages/HomePage";
// import LogIn from "./components/LogIn/LogIn";
// import SignUp from "./components/SignUp/SignUp";
// import BuyList from './components/BuyList/BuyList';
// import Footer from './components/Footer/Footer';
// import DefaultButton from './components/DefaultButton/DefaultButton';

// import UserContext from "./context/UserContext"

// function App() {
  //   const [userInfo, setUserInfo] = useState(null)
  
  //   function updateUserInfo(newUserInfo) {
    //     setUserInfo(newUserInfo)
    //   }
    
    //   return (
      //     <div>
      
      //       <NavBar />
      //         <Route exact path="/" component={HomePage} />
      //         <Route exact path="/login" component={LogIn} />
      //         <Route exact path="/signup" component={SignUp} />
      //         <Route exact path="/buylist" component={BuyList} />
      
      //       <div>
      //           <Jumbotron fluid>
      //       <Container>
      //         <h1>Welcome.</h1>
      //         <p>
      //           Lets help you with your closet space
      //         </p>
      
      //           <DefaultButton />
      //       </Container>
      //     </Jumbotron>
      
      //           <Footer />
      //         </div>
      //     </div>
      //   );
      // }
      
      // export default App;
      
