import axios from 'axios'

export const LogoutAPI = async () => {

    try {
        let res = await axios.get(`http://localhost:5000/v1/auth/logout`, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
        console.log(`logout success`);
        return res;
    } catch (err) {
        console.log(`logout error`, err);
        return err;
    }
}