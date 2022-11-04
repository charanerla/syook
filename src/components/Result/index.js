import React,{useState,useEffect,useContext} from "react"
import { useNavigate ,Navigate} from "react-router-dom"
import Header from "../Header"
import PoolContext from "../../context/PoolContext"
import "./index.css"

const Result = () => {
    const [checkUser,setCheckUser]=useState(JSON.parse(localStorage.getItem("is_valid_user")))
    const activeTabId=2
    const navigate = useNavigate()
    const isValidUser=checkUser
    const contextObj=useContext(PoolContext)
    const poolItems = contextObj.foodItems.filter(obj => obj.rank>0)
    poolItems.sort((a,b)=> a.rank-b.rank)
    // console.log(poolItems)

    

    useEffect(()=>{
        const isValidUser=JSON.parse(localStorage.getItem("is_valid_user"))
        if (isValidUser===null || isValidUser===false){
        //    console.log(isValidUser)
           navigate("/login")
         }
       }
    )
    const score = rank => {
        // console.log("hi")
        switch (rank) {
            case 1:
                return 30
            case 2:
                return 20
            default:
                return 10
        }
    }

    const renderPoolResult = () => <table className="pool-table">
        <thead><tr><th>Rank</th><th>Dish Name</th><th>Score</th></tr></thead>
        <tbody>
        {poolItems.map(obj=> <tr key={obj.id}><td className="table-data">{obj.rank}</td><td className="table-data">{obj.dishName}</td><td className="table-data">{score(obj.rank)}</td></tr>)}
        </tbody>
    </table>

    if (isValidUser===null || isValidUser===false){
        <Navigate replace={true} to="/login"/>
    }
    else{
        return(
            <div className="reault-container">
                <div className="result-responsive-container">
                    <Header activeTabId={activeTabId} setCheckUser={setCheckUser} />
                    <div className="pool-results">
                        {poolItems.length>0?renderPoolResult():<div className="yet-to-pool"><h1>Yet to Pool</h1></div>}
                    </div>
                </div>
            </div>
        )
    }
}

export default Result