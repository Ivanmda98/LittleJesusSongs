import axios from "axios";

export const getTokenService = async () => {
   return await axios
   .post('https://accounts.spotify.com/api/token', 'grant_type=client_credentials',{
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            Authorization: `Basic OGM2YzI5OWYyZTQzNDBjNThmZTNlZWQ2ZGY0Yzk4MDc6YzZjNmExMzYyMzY1NDgyZGFhYzc2MDk3NDA1NGI1YTc=`
        }
   })
   .then((response) => {
    return response;
});
}