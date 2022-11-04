import React,{useState,useEffect} from "react"
import {useNavigate,Navigate} from "react-router-dom"
// import Cookies from "js-cookie"
// import ValidationContext from "../../context/ValidationContext"
import Users from "../../users.json"
import './index.css'

const Login = props => {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [isPasswordShown,setPasswordVisibility]=useState(false)
  const [errorMsg, setErrorMsg] = useState('')
  const navigate = useNavigate()
  
  // const contextObj = useContext(ValidationContext)
  const isValidUser=JSON.parse(localStorage.getItem("is_valid_user"))
  // console.log(isValidUser)

  const foo = () => {
    // contextObj.upatingFoo(true)
    localStorage.setItem("is_valid_user", JSON.stringify(true))
  }
  
  const foo1 = () => navigate("/")

  const onLoginSuccess = () => {
    foo()
    foo1()
    console.log("login success")
  }


  const onClickLogin = event => {
    event.preventDefault()
    const userDetails = Users.find(user=>user.username===userName)
    if (userDetails===undefined){
        setErrorMsg("User didn't exist")
    }
    else{
        if(userDetails.password===password){
            onLoginSuccess()
        }
        else{
            setErrorMsg("Password didn't match")
        }
    }
  }

  useEffect(()=>{
    const isValidUser=JSON.parse(localStorage.getItem("is_valid_user"))
    if(isValidUser===true){
      navigate("/")
    }
   })

  const renderingContent = () => (
    <div className="login-main-container">
      <form className='dynamic-form' onSubmit={onClickLogin}>
        <img src="https://lh5.googleusercontent.com/-nOVkd8fG6lY/AAAAAAAAAAI/AAAAAAAAAAA/mIP8BVgvZbA/s55-p-k-no-ns-nd/photo.jpg" alt="syook-logo" className='syook-logo'/>
        <h1 className='syook-heading'>Syook Food Pool</h1>
        <div className='fields-container'>
            <label htmlFor='username' className='input-labels'>USERNAME</label>
            <input type="text" className='user-inputs' placeholder="USERNAME" id="username" value={userName} onChange={event=>setUserName(event.target.value)} required />
            <label htmlFor='password' className='input-labels'>PASSWORD</label>
            <input type={isPasswordShown?"text":"password"} className='user-inputs' id="password" value={password} placeholder="PASSWORD" onChange={event=>setPassword(event.target.value)} required />
            <input type="checkbox" checked={isPasswordShown?true:false} id="checkbox" onChange={()=>setPasswordVisibility(prev => !prev)} />
            <label htmlFor='checkbox' id="checkbox-label">Show Password</label>
        </div>
        <button className='login-button' type='submit'>Login</button>
        {errorMsg.length>0 && <p className='error-msg'>{`*${errorMsg}`}</p>}
      </form>
    </div>
  )

  if (isValidUser===null || isValidUser===false){
    // console.log(isValidUser)
    return renderingContent()
  }
  else{
  <Navigate to="/" />}
  
    
  // return renderingContent()
}

export default Login
