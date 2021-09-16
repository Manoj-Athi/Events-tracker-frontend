import React,{ useState, useEffect } from 'react'
import { Link, useHistory, useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import EventsList from './EventsList'

const Home = () => {

    const history = useHistory()
    const location = useLocation()
    const dispatch = useDispatch()
    const [User, setUser] = useState(JSON.parse(localStorage.getItem('profile')))

    const logout = () => {
        dispatch({ type: 'LOGOUT' });
        history.push('/')
        setUser(null)
    }

    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem('profile')))
    }, [location])

    return (
        <div>
            <nav className="navbar">
                <h1>Events tracker</h1>
                { !User ?
                    <Link to="/Auth" className="auth-btn">Log in</Link> :
                    <button type="button" className="auth-btn" onClick={logout}>Log out</button>
                }
            </nav>
            { User && <EventsList /> }       
        </div>
    )
}

export default Home
