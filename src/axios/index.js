import axios from "axios";

const axiosClient = axios.create({
    baseURL: 'https://text-view-miracles-api.onrender.com/api'
});
export default axiosClient;