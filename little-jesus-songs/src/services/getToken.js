import axios from "axios";

export const getTokenService = async () => {
    const baseURL = import.meta.env.VITE_BACKEND_URL;
    return await axios
        .get(`${baseURL}/api/token`)
        .then((response) => {
            return response;
        });
}