import axios from 'axios';

const api = axios.create({
    headers: {
        'Content-type': 'application/json',
        Accept: 'application/json',
    },
});

// List of all the endpoints , GET requests
export const getNotices = (department = "admin") => api.get(`api/proxy/noticenotice_api/${department}?format=json`);
export const getEvents = (department = "admin") => api.get(`api/proxy/eventsapi/${department}?format=json`);

//Post requests
//export const getNotices = (data,department = "admin") => api.post(`/noticenotice_api/${department}?format=json`, data);


// Interceptors if any
// api.interceptors.response.use(
//     (config) => {
//         return config;
//     },
//     async (error) => {
//         const originalRequest = error.config;
//         if (
//             error.response.status === 401 &&
//             originalRequest &&
//             !originalRequest._isRetry
//         ) {
//             originalRequest.isRetry = true;
//             try {
//                 await axios.get(
//                     `${process.env.REACT_APP_API_URL}/api/refresh`,
//                     {
//                         withCredentials: true,
//                     }
//                 );
//                 return api.request(originalRequest);
//             } catch (err) {
//                 console.log(err.message);
//             }
//         }
//         throw error;
//     }
// );

export default api;
