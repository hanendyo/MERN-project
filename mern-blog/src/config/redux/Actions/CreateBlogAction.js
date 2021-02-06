import axios from "axios"

export const setForm = (formType, formValue) => {
    return {type: 'SET_FORM_DATA', formType, formValue}
}

export const setImgPreview = (payload) => {
    return {type: 'SET_IMG_PREVIEW', payload}
}


export const postToAPI =(form)=>{
    const data = new FormData();
    data.append('title', form.title)
    data.append('body', form.body)
    data.append('image', form.image)

    axios.post(`http://localhost:5000/v1/blog/post`, data, {
        headers: {
            'content-type': 'multipart/form-data'
        }
    })
    .then(res => console.log(res))
    .catch(err => console.log(err))
}