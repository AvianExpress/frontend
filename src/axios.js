import axios from 'axios'
axios.defaults.baseURL = 'http://127.0.0.1:3000/api/';
axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('access_token')