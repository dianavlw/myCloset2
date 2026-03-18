import { useEffect, useState, useContext } from "react"
import UserContext from "../components/UserContext/UserContext"
import Clothes from "../components/Clothes/Clothes"
import closetAPI from "../api/closetAPI"

function ClothesPage(props) {

    const [clothes, setClothes] = useState(null)
    const userInfo = useContext(UserContext)
  
    useEffect(() => {
        getClothes(props.match.params.clothesId)
    }, [props.match.params.clothesId])

    async function getClothes(clothesId) {
        let token = userInfo ? userInfo.token : ""
        let data = await closetAPI.fetchClothes(clothesId, token)
        setClothes(data)
    }

    
    return (
        <div className="container">
            <Clothes clothes={clothes} />
        </div>
    )
    }

    

export default ClothesPage; 