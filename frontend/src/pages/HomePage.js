import { Link } from "react-router-dom";
import { useContext, useState, useEffect } from "react" ;
import closetAPI from "../api/closetAPI"
import UserSummary from "../components/BasicPages/UserSummary";

// import imgSrc from ".../public/clothes1"

function HomePage(props) {
    // const userInfo = useContext(UserContext)
    const [closets, setClosets] = useState(null)
    const [token, setToken] = useState(localStorage.getItem("token"))
    const [user, setUser] = useState(localStorage.getItem("user"))
    console.log(user)

    useEffect(() => {
        const resp =closetAPI.fetchClosets(token)
        resp.then(data => {
            setClosets(data)
        })


    }, [])

    function renderContent() {
        if (!closets) {
            return (
                <div>
                    <h2>Welcome.</h2>
                    <Link to="/loginpage"><button>Login</button></Link>
                    &nbsp;
                    <Link to="/signuppage"><button>Register</button></Link>
                </div>
            )
        }
        let clothesElements = closets.map((closet, index) => {
            let items = closet.clothes.map((item) => {
                return <p>{item.clothing_name}</p>
            })
            return (
                <div>
                {/* <Link key={index} to={`clothe/${clothes.id}`}>{closet.name}</Link> */}
                <h3> {closet.name} </h3>
                <hr />
                {items}
                <hr />
                </div>
            )
        })
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
                {/* <div> */}
              You are logged in as <span className="user"> {user} </span>
                <UserSummary />
                { clothesElements }
                

            </div>
        )
    }
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
            {/* { renderContent() } */}
            {/* <h1 className="hometext">Welcome.</h1> */}
            <img className="imagesize" src='./welcome.jpeg'/>
            <p> Come in and keep track of clothing items you need or need to donate. You are free to make unlimited closets and also add to your shopping list. </p>
            <img className="imagesize" src='./clothes.jpeg' />
            <hr class="separator" />
            
            {/* <Clothes /> */}
            {/* <Footer /> */}
        </div>

        
    )
}

export default HomePage; 