import { Link } from "react-router-dom"

function Closet(props) {
    function renderCloset() {
        if (!props.closet)
            return null

        return (
            <div>
                <h2>Closet: {props.closet.name}</h2>
                <h4>Closet: <Link to={`/clothes/${props.clothes.clothes_id}`}>{props.clothes.clothes}</Link></h4>
                
            </div>
        )
    }

    return (
        <div>
            { renderCloset() }
        </div>
    )
}

export default Closet; 