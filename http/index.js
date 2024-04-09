import axios from 'axios';

const api = axios.create({
    headers: {
        'Content-type': 'application/json',
        Accept: 'application/json',
    },
});

// List of all the endpoints , GET requests  only
export const getNotices = (department = "1", noticeType = "all") => api.get(`/api/proxy/noticeapi/${department}/${noticeType}?format=json`);
export const getEvents = (department = "1",noticeType = "event") => api.get(`/api/proxy/noticeapi/${department}/${noticeType}?format=json`);
export const getFooterLinks = (department = "1") => api.get(`/api/proxy/footerapi/${department}?format=json`);
export const getScheme = (department = "1") => api.get(`/api/proxy/schemeapi/${department}?format=json`);
export const getMenu = (department = "1") => api.get(`/api/proxy/parentmenuapi/${department}?format=json`);
export const getSilder = (department = "1") => api.get(`/api/proxy/sliderapi/${department}?format=json`);
export const getMarquee = (department = "1") => api.get(`/api/proxy/marqueapi/${department}?format=json`);
export const getAboutDepartment  = (department = "1") => api.get(`/api/proxy/aboutdepartmentapi/${department}?format=json`);
export const getDepartmentMenu  = (department = "1") => api.get(`/api/proxy/parentmenuapi/${department}?format=json`);
export const getDepartmentPostsMenu  = (department = "1") => api.get(`/api/proxy/parentmenuapi/${department}?format=json`);
export const getFaculty = (department = "1",type="teaching") => api.get(`/api/proxy/teacherapi/${department}/${type}?format=json`);
export const getPost = (department = "1", url= "LegalCell") => api.get(`api/proxy/postapi/${department}/${url}?format=json`);
export const getDepartmentPost = (department = "1", url= "LegalCell") => api.get(`/api/proxy/postapi/${department}/${url}?format=json`);
export const getAchievement = (department = "1") => api.get(`/api/proxy/achievementapi/${department}?format=json`);
export const getGallery = (department = "1") => api.get(`/api/proxy/galleryapi/${department}?format=json`);
export const getEventGallery = (galleryId = "1") => api.get(`/api/proxy/galleryimages_api/${galleryId}?format=json`);
export const getCellsClubs = () => api.get(`/api/proxy/cellsapi?format=json`);
export const getFacultyProfile = (teacherId = "8") => api.get(`/api/proxy/teacherdataapi/${teacherId}?format=json`);
export const getDepartmentlist = (department="1") =>api.get(`/api/proxy/departmentapi/${department}?format=json`);

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
