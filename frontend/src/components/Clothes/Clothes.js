import { Link } from "react-router-dom"

function Clothes(props) {

    function renderClothes() {
        if (!props.clothes)
            return null

        let closetElements = props.clothes.closet.map((closet, index) => {
            return (
                <div>
                    <p>{closet.name}
                        <span>
                            <Link to={`/clothes/${props.clothes.id}/closet/${closet.id}`}>
                                <button className="btn-small">View</button>
                            </Link>
                            <button className="btn-small">Update</button>
                            <button className="btn-small">Delete</button>
                        </span>
                    </p>
                </div>
            )
        })

        return (
            <div>
                <h2>{props.clothes.clothing_name}</h2>
                { closetElements }
                <hr />
                <button>New Clothes</button>
            </div>
        )
    }

    return (
        <div>
            { renderClothes() }
        </div>
    )
}

export default Clothes; 