const initialState = {
    data: {
        name: '',
        email: '',
        password: '',
    }
}

export const RegisterReducer = (state = initialState, action) => {
    if(action.type === `SET_REGISTER`) {
        return{
            ...state,
            data: {
                ...state.data,
                [action.formType]: action.formValue
            }
        }
    }
    return state;
}