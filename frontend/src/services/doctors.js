
import api from './api';

const auth = {
    all: async (page = 1) => {
        try {
            const { data } = await api.get(`/medicos?page=${page}&size=10`);
            return data;
        }
        catch(error) {
            console.log(error);
            return false;
        }
    },
    show: async (id) => {
        try {
            const { data } = await api.get(`/medicos/${id}`);
            return data;
        }
        catch(error) {
            console.log(error);
            return false;
        }
    },
    search: async (terms) => {
        try {
            const { data } = await api.get(`/medicos/find/${terms}`);
            return data;
        }
        catch(error) {
            console.log(error);
            return false;
        }
    },

    insert: async (doctor) => {
        try {
            const response = await api.post('/medicos', doctor);
            return response.status === 201 ? true : false ;
        }
        catch(error) {
            console.log(error);
            return false;
        }
    },
    update: async (id, doctor) => {
        try {
            const response = await api.patch(`/medicos/${id}`, doctor);
            return response.status === 200 ? true : false ;
        }
        catch(error) {
            console.log(error);
            return false;
        }
    },
    remove: async (id) => {
        try {
            const response = await api.delete(`/medicos/${id}`);
            return response.status === 200 ? true : false ;
        }
        catch(error) {
            console.log(error);
            return false;
        }
    }
};
export default auth;
