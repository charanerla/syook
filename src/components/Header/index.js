import React from "react"
import {Link,useNavigate} from "react-router-dom"
import "./index.css"

const navLinks = [{id:1,name:"Home"},{id:2,name:"Result"}]

const Banner = props => {
    const {activeTabId,setCheckUser} = props
    const navigate = useNavigate()
    const onClickLogout = () => {
        setCheckUser(false)
        localStorage.clear("is_valid_user")
        navigate("/login")
    }
    return (
        <div className="banner-container">
            <div className="buttons-container">
                {navLinks.map(obj => <Link to={obj.id===1?"/":"/result"} key={obj.id} className="route-link" ><button className={activeTabId===obj.id?"active-tab":"unactive-tab"}>{obj.name}</button></Link>)}
            </div>
            <button className="logout-button" onClick={onClickLogout}>Logout</button>
        </div>
    )
}

export default Banner