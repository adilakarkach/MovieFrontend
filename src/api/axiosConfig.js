import axios from 'axios';

export default axios.create({
    baseURL:'https://c8ff-80-130-99-75.ngrok-free.app',
    headers:{"ngrok-skip-browser-warning": "true"}
});