export const initialState = false ;

export const reducer = (state, action) => {
    if(action.type === 'Theme'){
        return action.payload
    }
    return state
}