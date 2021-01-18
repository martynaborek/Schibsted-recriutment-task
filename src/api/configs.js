import axios from 'axios';

// base API host
const hostDev = 'http;';

const apiInstance = axios.create({
    baseURL: hostDev,
});

export {
    apiInstance
};