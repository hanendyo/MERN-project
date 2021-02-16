const initialState = {
    data: {
        email: '',
        password: ''
    },
    isLogin: false
}

export const LoginReducer = (state = initialState, action) => {
    if(action.type === `SET_IS_LOGIN`){
        return{
            ...state,
            isLogin: true
        }
    }
    if(action.type === `SET_LOGIN`) {
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