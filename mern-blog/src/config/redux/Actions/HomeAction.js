import axios from "axios";

export const setDataBlogPost =(page)=>(dispatch)=>{
    axios.get(`http://localhost:5000/v1/blog/posts?page=${page}&perPage=4`)
    .then(res => {
        console.log(`dataAPI:`, res.data);
        const responseAPI = res.data
        dispatch({type: 'UPDATE_DATA_BLOG', payload: responseAPI.data})
        dispatch({type: 'UPDATE_PAGE', payload: {currentPage: responseAPI.current_page, totalPage: Math.ceil(responseAPI.total_data / responseAPI.per_page)}})
    })
    .catch(err=>{
        console.log(`err:`,err);
    })
}