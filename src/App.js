import React,{ useState} from "react";
import { Route,Routes,Navigate } from "react-router-dom";
import Login from "./components/Login"
import Home from "./components/Home";
import Result from "./components/Result"
import PoolContext from "./context/PoolContext"
import FoodItems from "./db.json"
import PageNotFound from "./components/PageNotFound";
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
            <Route exact path="/random-page" element={<PageNotFound/>} />
            <Route path="*" element={<Navigate to="/random-page" replace />}/>
        </Routes>
        </PoolContext.Provider>
    )

}

export default App;
