import axios from "axios";

const axiosClient = axios.create({
    baseURL: 'https://textviewsmiracles.herokuapp.com/api/textviews'
});
export default axiosClient;