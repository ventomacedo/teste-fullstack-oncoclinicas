
import Axios from 'axios';

const BASE_URL = process.env.REACT_APP_API_BASE_URL;
const axios    = Axios.create({ baseURL: BASE_URL });

const auth = {
    all: async () => {
        try {
            const { data } = await axios.get('/medicos');
            return data;
        }
        catch(error) {
            console.log(error);
            return false;
        }
    },
    show: async (id) => {
        try {
            const { data } = await axios.get(`/medicos/${id}`);
            return data;
        }
        catch(error) {
            console.log(error);
            return false;
        }
    },
    search: async (terms) => {
        try {
            const { data } = await axios.get(`/medicos/find/${terms}`);
            return data;
        }
        catch(error) {
            console.log(error);
            return false;
        }
    },

    insert: async (doctor) => {
        try {
            const response = await axios.post('/medicos', doctor);
            return response.status === 201 ? true : false ;
        }
        catch(error) {
            console.log(error);
            return false;
        }
    },
    update: async (id, doctor) => {
        try {
            const response = await axios.patch(`/medicos/${id}`, doctor);
            return response.status === 200 ? true : false ;
        }
        catch(error) {
            console.log(error);
            return false;
        }
    },
    remove: async (id) => {
        try {
            const response = await axios.patch(`/medicos/${id}`);
            return response.status === 200 ? true : false ;
        }
        catch(error) {
            console.log(error);
            return false;
        }
    }
};
export default auth;
