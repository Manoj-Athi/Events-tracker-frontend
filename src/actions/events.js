import * as api from '../api/index'

export const fetchEvents = () => async (dispatch) => {
    try {
        const { data } = await api.getEvents()
        dispatch({ type: 'FETCH_EVENT', payload: data})
    } catch (error) {
        console.log(error.message)
    }
}

export const createEvent = (formData) => async (dispatch) => {
    try {
        const { data } = await api.createEvents(formData)
        dispatch({ type: 'CREATE_EVENT', payload: data})
    } catch (error) {
        console.log(error.message)
    }
}

export const delEvent = (id) => async (dispatch) => {
    try {
        await api.deleteEvent(id);
        dispatch({type: "DELETE_EVENT", payload: id})
    } catch (error) {
        console.log(error.message)
    }
}