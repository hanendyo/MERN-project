const initialState = {
    form: {
        title: '',
        image:'',
        body: ''
    },
    imgPreview: null
}

export const CreateBlogReducer = (state=initialState, action) => {
    if(action.type === 'SET_FORM_DATA'){
        return{
            ...state,
            form: {
                ...state.form,
                [action.formType]: action.formValue
            }
        }
    }

    if(action.type === 'SET_IMG_PREVIEW'){
        return{
            ...state,
            imgPreview: action.payload
        }
    }
    return state;
}