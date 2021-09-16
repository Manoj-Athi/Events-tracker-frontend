import * as api from '../api/index'

export const signup = (authData, history) => async (dispatch) => {
    try {
        const { data } = await api.signUp(authData)
        dispatch({ type: 'AUTH', data})
        history.push('/')
    } catch (error) {
        console.log(error)
    }
}

export const login = (authData, history) => async (dispatch) => {
    try {
        const { data } = await api.logIn(authData)
        dispatch({ type: 'AUTH', data})
        history.push('/')
    } catch (error) {
        console.log(error)
    }
}