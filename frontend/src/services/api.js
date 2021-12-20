import Axios from 'axios';

const BASE_URL = process.env.REACT_APP_API_BASE_URL;
const api      = Axios.create({ baseURL: BASE_URL });

export const interceptRequest = () => {
    api.interceptors.request.use((config) => {
        const authUserToken = localStorage.getItem('@oncoclinicas:token');

        if(authUserToken)
            config.headers.Authorization = `Bearer ${ authUserToken }`;
            config.headers.Accept        = 'application/json';
        
        return config;
    },
    (error) => {
        return Promise.reject(error);
    });
}

export const interceptResponse = () => {
    api.interceptors.response.use(
        response => {
            return response;
        },
        async error => {
            if(error.response && (error.response.status === 401)) {
                localStorage.removeItem('@oncoclinicas:token');
                window.location.href = process.env.PUBLIC_URL;
            } 
            else {
                return Promise.reject(error);
            }
        }
    );
}

export default api;
