//

const initialState = {
    dataBlogPost: [],
    page: {
        currentPage: 1,
        totalPage: 1
    }
}

export const HomeReducer =(state = initialState, action)=> {

    if(action.type === 'UPDATE_DATA_BLOG') {
        return{
            ...state,
            dataBlogPost: action.payload //--> atau action.value
        }
    }
    if(action.type === 'UPDATE_PAGE') {
        return{
            ...state,
            page: action.payload //--> atau action.value
        }
    }
  
    return state;
}


