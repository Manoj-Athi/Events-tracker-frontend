import React from 'react'
import { Switch, Route } from "react-router-dom"
import Auth from './components/Auth'

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/Auth" component={Auth}/>
        </Switch>
    )
}

export default Routes;