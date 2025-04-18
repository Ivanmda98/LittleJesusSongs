import axios from "axios";

export const getAlbumsService = async (albumId, token) => {
    return await axios
        .get(`https://api.spotify.com/v1/albums/${albumId}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then((response) => {
            return response;
        });
}