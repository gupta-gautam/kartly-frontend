import axios from 'axios';

const api = axios.create({
     baseURL: 'http://localhost:8080',
});

api.interceptors.request.use((config) => {
   const auth = localStorage.getItem('auth');
    if(auth){
       const data = JSON.parse(auth);
    if(data.token){
       config.headers.Authorization = 'Bearer ' + data.token;
    }
 }
 return config;
 });

 export default api;