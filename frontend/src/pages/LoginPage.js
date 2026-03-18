import { Link } from "react-router-dom"
import closetAPI from "../api/closetAPI"
import Time from "../components/BasicPages/Time"
import {Jumbotron, Button } from 'react-bootstrap'


function LoginPage(props) {
    async function handleLogin(e) {
        e.preventDefault()
        let credentials = {
            username: e.target.username.value,
            password: e.target.password.value
        }

        let data = await closetAPI.login(credentials)
        if (data && data.token) {
            let userInfo = {
                token: data.token,
                user: data.user
            }
            // console.log(userInfo)
            props.handleLogin(userInfo)
            props.history.push("/") 
        }
    }

    return (
        <div className="container">
          <div className="flex-container" >.........
                <img className="loginimg" src='./login2.jpeg'/>
                ..........
              <li className ="flex-itmes">
              </li>
              <hr/>
              <li className ="flex-itmes">
                  <hr />
                  <hr />
                  <hr />
                <Time />
            <h3>Account Login</h3>
            
            <form className="form" onSubmit={handleLogin}>
                {/* <div className="form">           */}
                    <label className="form-label" htmlFor="username">Username: </label>
                    <input className="form-input" name="username" type="text" placeholder="username"></input>
                    <label className="form-label" htmlFor="password">Password: </label>
                    <input className="form-input" name="password" type="password" placeholder="password"></input>
                    <span></span>

            <button className="form-button" type="submit">Login</button>
            
                {/* </div> */}
            </form>
            <br />
            <p className="gray">New user? Click <Link to="/signup">here</Link> to register</p>
            </li>
            </div> 
        </div>
    )
}

export default LoginPage; 