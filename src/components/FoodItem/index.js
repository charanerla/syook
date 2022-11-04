import React,{useContext} from "react"
import PoolContext from "../../context/PoolContext"
import "./index.css"



const FoodItem = props => {
    const {itemDetails} = props
    const {id,dishName,description,image,rank}=itemDetails
    const contextObj = useContext(PoolContext)
    const ranks = [{rank:1,id:1},{rank:2,id:2},{rank:3,id:3}]

    const setRank = givenRank => {
        // console.log(givenRank,id)
        // console.log(typeof givenRank)
        const updatedData =contextObj.foodItems.map(obj => {
            if (obj.rank === parseInt(givenRank)) {
                const newObj = { ...obj, rank: 0 }
                return newObj
            } return obj
        })
        const newData =updatedData.map(obj => {
            if (obj.id === id) {
                const newObj = { ...obj, rank: parseInt(givenRank) }
                // console.log(newObj)
                return newObj
            } return obj
        })
        // console.log(newData)
        contextObj.setFoodItems([...newData])
    }
    
    return <li className="food-item">
        <img src={image} alt={dishName} className="dish-img"/>
        <div className="description-container">
            <h1 className="dish-name">{dishName}</h1>
            <p className="dish-description">{description}</p>
            <div>
                <h1 className="give-rank">Give Rank</h1>
                {ranks.map(obj => <button key={obj.rank} value={obj.id}  onClick={e => setRank(e.target.value)} className={obj.rank===rank?"active-rank-btn":"unactive-rank-btn"}>{obj.rank}</button>)}
            </div>
        </div>
    </li>
}

export default FoodItem