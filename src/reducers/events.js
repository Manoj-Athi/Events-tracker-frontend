const eventsReducer = (state = { data: null}, action) => {
    switch (action.type) {
        case 'FETCH_EVENT':
            return action.payload;
        case 'CREATE_EVENT':
            return [ ...state, action.payload ];
        case 'DELETE_EVENT':
            return state.filter((item) => item._id !== action.payload);
        default:
            return state;
    }
}

export default eventsReducer;