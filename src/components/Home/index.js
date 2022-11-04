import React ,{useEffect,useState,useContext}from "react"
import { Navigate,useNavigate } from "react-router-dom"
import PoolContext from "../../context/PoolContext"
import FoodItem from "../FoodItem"
import Header from "../Header"
import './index.css'


const Home = () =>{
    const [checkUser,setCheckUser]=useState(JSON.parse(localStorage.getItem("is_valid_user")))
    const {foodItems}=useContext(PoolContext)
    const activeTabId=1
    const navigate = useNavigate()
    const isValidUser=checkUser

    useEffect(()=>{
     const isValidUser=JSON.parse(localStorage.getItem("is_valid_user"))
     if (isValidUser===null || isValidUser===false){
        // console.log(isValidUser)
        navigate("/login")
      }
    })

    if (isValidUser===null || isValidUser===false){
        <Navigate replace={true} to="/login"/>
      }
      else{
        return(
        <div className="home-container">
          <div className="home-responsive-container">
            <Header activeTabId={activeTabId} setCheckUser={setCheckUser}   />
            <div className="food-items-container" >
              <ul className="unordered-list">
                {foodItems.map(eachItem =><FoodItem key={eachItem.id} itemDetails={eachItem}/> )}
              </ul>
            </div>
          </div>
        </div>
        )
      }

}

export default Home