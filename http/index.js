import axios from 'axios';

const api = axios.create({
    headers: {
        'Content-type': 'application/json',
        Accept: 'application/json',
    },
});

// List of all the endpoints , GET requests
export const getNotices = (department = "1", noticeType = "all") => api.get(`api/proxy/noticeapi/${department}/${noticeType}?format=json`);
export const getEvents = (department = "1") => api.get(`api/proxy/eventsapi/${department}?format=json`);
export const getScheme = (department = "1") => api.get(`api/proxy/schemeapi/${department}?format=json`);
export const getMenu = (department = "1") => api.get(`api/proxy/parentmenuapi/${department}?format=json`);

export const getPost = (department = "1", url= "Legal-Cell") => api.get(`api/proxy/postapi/${department}/${url}?format=json`);
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
