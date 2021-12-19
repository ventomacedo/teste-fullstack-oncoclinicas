
import Axios from 'axios';

const BASE_URL = process.env.REACT_APP_API_BASE_URL;
const axios    = Axios.create({ baseURL: BASE_URL });

const auth = {
    signin: async (email, password) => {
        try {
            const { data } = await axios.post('/login', { email, password });
            return !!data?.token ? data : null ;
        }
        catch(error) {
            console.log(error);
            return false;
        }
    }
};
export default auth;
