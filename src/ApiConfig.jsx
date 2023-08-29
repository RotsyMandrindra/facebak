import axios from 'axios';
import Cookies from 'js-cookie';

export const apiEndpoint = 'http://localhost:8080'; 


const setTokenInCookie = (token) => {
    Cookies.set('token', token, { expires: 7 });
};

export const getTokenFromCookie = () => {
    return Cookies.get('token');
    
};

export async function Login(endpoint, _data) {
    try {
        console.log(_data);
        const { data } = await axios.put(
                `${apiEndpoint}${endpoint}`,
                _data,
            );
        
        setTokenInCookie(data.token);

        return data;
    } catch (error) {
        console.log(error);
    }
}



export async function Post(endpoint, _data) {
    try {
        const token = getTokenFromCookie();

        const config = {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
        };

        const { data } = await axios.post(
                `${apiEndpoint}${endpoint}`, // Utilisation de apiEndpoint
                _data,
                config,
            );
        
        setTokenInCookie(data.token);

        return data;
    } catch (error) {
        console.log(error);
    }
}

export async function Get(endpoint, _data) {
    try {
        const token = getTokenFromCookie();

        const config = {
                headers: {
                Authorization: `Bearer ${token}`,
                body: _data
            },
        };

        const { data } = await axios.get(
                `${apiEndpoint}${endpoint}`, // Utilisation de apiEndpoint
                config
        );

        return data;
    } catch (error) {
        console.log(error);
    }
}

export async function Put(endpoint, _data) {
    try {
        const token = getTokenFromCookie();

        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };

        const { data } = await axios.put(
            `${apiEndpoint}${endpoint}`,  // Utilisation de apiEndpoint
            _data,  // Passer les données dans le corps de la requête
            config
        );

        return data;
    } catch (error) {
        console.log(error);
    }
}


export async function Delete(endpoint, _data) {
    try {
        const token = getTokenFromCookie();

        const config = {
                headers: {
                Authorization: `Bearer ${token}`,
                body: _data
            },
        };

        const { data } = await axios.delete(
                `${apiEndpoint}${endpoint}`,
                _data, // Utilisation de apiEndpoint
                config
            );

        return data;
    } catch (error) {
        console.log(error);
    }
}
