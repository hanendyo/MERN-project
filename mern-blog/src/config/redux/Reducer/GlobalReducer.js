//

const initialState = {
    // dataBlogPost: []
}

export const GlobalReducer =(state = initialState, action)=> {

    if(action.type === 'UPDATE_NAME'){
        return {
            ...state,
            name: 'hudoro'
        }
    }
    return state;
}


