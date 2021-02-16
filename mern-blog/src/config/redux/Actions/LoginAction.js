import axios from "axios"

export const setFormLogin = (formType, formValue) => {
    return {type: 'SET_LOGIN', formType, formValue}
}



// export const LoginToAPI =(form)=>{ 

//     console.log(`form:`,form);
//     const data = new FormData()
//     data.append(`email`, form.email)
//     data.append(`password`, form.password)

//     axios.post(`http://localhost:5000/v1/auth/login`, data, {
//         headers: {
//             'content-type': 'multipart/form-data'
//         }
//     })
//     .then(res => {

//         // alert(`account successfuly created!`)  
//         console.log(`login success`);
//         return res
//     })
//     .catch(err => {
//         console.log(`Login error`, err)
//         return err
//     });
        
// }


export const LoginToAPI = async (form) => {
    console.log(`form:`,form);
    const data = new FormData();
    data.append(`email`, form.email);
    data.append(`password`, form.password);
    
    try {
        let res = await axios.post(`http://localhost:5000/v1/auth/login`, data, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
        console.log(`login success`);
        return res;
    } catch (err) {
        alert(`LOGIN ERROR`)
        console.log(`login error`, err);
        return err;
    }
}