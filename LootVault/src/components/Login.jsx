import { useState } from "react";
import { connect } from "react-redux"
import { useNavigate, useNavigation } from "react-router-dom"

//connecting to global state here
import { useSelector, useDispatch} from "react-redux";
import { authActions } from "../store/store";

function Login(props) {


    //defining dispatch
    const dispatch = useDispatch()
    
    const isAuthenticated = useSelector(state => state.auth)

    const [user, setUser] = useState({})
    const [errorMessage, setErrorMessage] = useState('')
    const navigate = useNavigate()

    //capturing values in local state
    const handleUserInfo = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const handleLogin = async () => {

        const response = await fetch ('http://localhost:8080/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        const result = await response.json()
        if(result.success) {
            localStorage.setItem('jwtToken', result.token)
            localStorage.setItem('userId', result.userId)
            // localStorage.setItem(user.userId)
            dispatch(authActions.login(result.token))
            //fix the navigation below to redirect user to homepage
            navigate('/home')
        } else {
            setErrorMessage(result.message)
        }
    }


    return (
        <>
        <h1>Please Log in</h1>
        <input type = "text" name = "username" placeholder = "Username" onChange={handleUserInfo}/>
        <input type = "password" name = "password" placeholder = "Password" onChange={handleUserInfo}/>
        <button onClick={handleLogin}>Log in</button>
        </>
    )
}


export default Login