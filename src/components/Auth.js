import React,{ useState } from 'react'
import { useDispatch } from "react-redux"
import { useHistory } from "react-router-dom"

import { signup, login } from "../actions/auth"
import '../index.css'

const Auth = () => {

    const initialValues = { name: '', email: '', password: ''}
    const history = useHistory()
    const dispatch = useDispatch()

    const [IsSignup, setIsSignup] = useState(false)
    const [ authData, setAuthData ] = useState(initialValues)

    const handleSwitch = () => {
        setIsSignup( !IsSignup )
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(IsSignup){
            dispatch(signup( authData, history))
        }else{
            dispatch(login( authData, history))
        }
   }

   const handleChange = (e) =>{
        setAuthData({ ...authData, [e.target.name]: e.target.value})
    }

    return (
        <div className="Auth-container">
            <h1 className="text-center py-2 text-lg">{ IsSignup ? 'Sign up' : 'Log in' }</h1>
            <form onSubmit={handleSubmit}>
                { IsSignup && 
                    <label htmlFor="name">
                        <h3>Username</h3>
                        <input type="text" name="name" id="name" onChange={handleChange}/>
                    </label> }
                <label htmlFor="email">
                    <h3>Email</h3>
                    <input type="email" name="email" id="email" onChange={handleChange}/>
                </label>
                <label htmlFor="password">
                    <h3>Password</h3>
                    <input type="password" name="password" id="password" onChange={handleChange}/>
                </label>
                <button type="submit" className="sumbit-btn">
                    { IsSignup ? 'Sign up' : 'Log in' }
                </button>
            </form>
            <p>
                {IsSignup ?  'Already have an account?' : 'Don’t have an account?'}
                <button type="button" className="handleswitch-btn" onClick={handleSwitch}> {IsSignup ?  'Log in' : 'Sign up'} </button>
            </p>
        </div>
    )
}

export default Auth
