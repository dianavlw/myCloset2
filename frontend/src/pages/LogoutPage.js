import { Link } from "react-router-dom"


function LogoutPage(props) {
    return (
       

        <div style ={{
            boxShadow: '0 2px 6px rgba(0,0,0, 0.26)',
            width: '90%',
            maxWidth: '40rem',
            margin: '2rem auto',
            border: '1px solid #ccc',
            padding: '1rem'

        }}
        >
            <h2>Logged Out</h2>
            <p className="gray">You are now logged out. Click <Link to="/loginpage">here</Link> to login</p>
        </div>
    )
}

export default LogoutPage; 