import axios from 'axios';

const request = axios.create({
    headers: {
        // 'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
    },
    // withCredentials: true
})

export default request;