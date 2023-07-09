import axios from "axios";
//base Url
const instance = axios.create({
    baseURL: "https://gestemp-app.onrender.com/api/",
});

export default instance;
