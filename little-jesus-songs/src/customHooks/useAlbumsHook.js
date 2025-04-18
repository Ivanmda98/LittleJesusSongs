import { useEffect, useState } from "react";
import { getAlbumsService } from '../services/getAlbums'
import { getTokenService } from "../services/getToken";
import { extraConfig } from "../utils/extraConfig";
import { images } from "../utils/extraConfig";

const useAlbumsHook = () => {
  const [albums, setAlbums] = useState([]);
  const [token, setToken ] = useState(null);

  const albumsId = [
    '3ccENIV5z7jcA7MFTz3Tfw',
    '63bVZH9Eju2DLKFkOYmHMI'
  ]

  const getToken = async () => {
    try {
      const res = await getTokenService();
      if(res.status === 200) {
        const accessToken = res?.data?.access_token;
        getAlbums(accessToken);
      }
    } catch (error) {
      console.log(error);
    }
  }

  const getAlbums = async (accessToken) => {
    try {
      const albumsRequest = albumsId.map((id) => {
        return getAlbumsService(id, accessToken);
      });

      const albumsResponse = await Promise.all(albumsRequest);
      const albumsData = albumsResponse.filter((res) => res.status === 200);
      
      const info = await Promise.all(albumsData.map(async (album) => {
        const id = album.data.id;
        const artist = album.data.artists[0].name
        const albumName = album.data.name;
        const releaseData = album.data.release_date;
        let tracks = album.data.tracks.items;
        const images = album.data.images;
        const durationAlbum = getDurationAlbum(tracks);
        tracks.map((track) => track.duration_min = transformMsToMn(track.duration_ms));

        const configCards = [
          {
            albumId: id,
            traks: await Promise.all(tracks.map((trak) => generateTrakCardConfig(trak)))
          }
        ]
        return { id, artist, albumName, releaseData, tracks, images, durationAlbum, configCards }
      }));
      setAlbums(info);
    } catch (error) {
      console.log(error);
    }
  };

  const getDurationAlbum = (tracks) => {
    const ms = tracks.reduce((acc, track) =>  acc + track.duration_ms, 0)
    
    const {minutes, seconds} = transformMsToMn(ms);

    return `${minutes}m ${seconds < 10 ? '0' : ''}${seconds}s`;
  }

  const transformMsToMn = (ms) => {

    const totalSeconds = Math.floor(ms / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    return {minutes, seconds}
  }

  const generateTrakCardConfig = async(trak) => {
    const config = extraConfig.find((item) => item.id === trak.id) || {};
    const variantCard1 = Math.random() > 0.5 ? 'vertical' : 'horizontal';
    const [img1, img2] = getRandomImages(images);


    return {
      id: trak.id,
      name: trak.name,
      variantCard1,
      variantCard2: variantCard1 === 'vertical'? 'horizontal': 'vertical',
      text1: config.text1,
      text2: config.text2,
      image1: img1,
      image2: img2
    }
  }

  const getRandomImages = (images) => {
    if (images.length < 2) return [images[0], images[0]];

    const shuffled = [...images].sort(() => 0.5 - Math.random());
    return [shuffled[0], shuffled[1]];
  }

  useEffect(() => {
    getToken();    
  }, []);

  return {
    albums
  }
};

export default useAlbumsHook;