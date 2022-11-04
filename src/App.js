import React,{ useState} from "react";
import { Route,Routes } from "react-router-dom";
import Login from "./components/Login"
import Home from "./components/Home";
import Result from "./components/Result"
import PoolContext from "./context/PoolContext"
import FoodItems from "./db.json"
import './App.css';

const newData = FoodItems.map(obj => ({...obj,rank:0}))

const App = () => {
    const [foodItems,setFoodItems]=useState(newData)
    // const isValidUser=JSON.parse(localStorage.getItem("is_valid_user"))
    return (
        <PoolContext.Provider value={{foodItems,setFoodItems:val => setFoodItems(val)}}>
        <Routes>
            <Route exact path="/login" element={<Login/>}/>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/result" element={<Result/>} />
        </Routes>
        </PoolContext.Provider>
    )

}

export default App;
