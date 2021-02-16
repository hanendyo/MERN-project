import axios from "axios"

export const setFormRegister = (formType, formValue) => {
    return {type: 'SET_REGISTER', formType, formValue}
}

export const registerToAPI = async (form)=> {
    console.log(`form`, form);
    const data = new FormData()
    data.append(`name`, form.name)
    data.append(`email`, form.email)
    data.append(`password`, form.password)

    try {
        let res = await axios.post(`http://localhost:5000/v1/auth/register`, data, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
        console.log(`register success`);
        return res;
    } catch (err) {
        console.log(err);
        return err;
    }
}