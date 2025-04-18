import CardComponent from "./cardComponent";
import '../assets/styles/album.css';
import eraNorte from "../../public/images/norte.avif"
import eraNorte2 from "../../public/images/little-756.jpg"
import little753 from "../../public/images/little-753.jpg";
import little754 from "../../public/images/little-754.jpg";
import little755 from "../../public/images/little-755.jpg";


import { useEffect, useState } from "react";

function AlbumComponent({ album, playTrack, trakUri, activeAlbumId }) {

    const [ isMobile, setIsMobile ] = useState(false);

    useEffect(() => {
        const checkWindowSize = () =>{
            setIsMobile(window.innerWidth < 550);
        }
        checkWindowSize();
        window.addEventListener('resize', checkWindowSize);

        return () => window.removeEventListener('resize', checkWindowSize);
    }, []);

    const containeTextAlbum = (
        <div className="container-texts-album-mobile">
            <div className="mix-tittle-container">
                <p className="text-alnum-mia-tittle">Album</p>
                <h1 className="album-tittle">{album.albumName}</h1>
            </div>
            <div className="container-details">
                <p>{album.artist}</p>
                <p>{album.releaseData}</p>
                <p>{`${album.tracks.length} canciones`}</p>
                <p>{`Duracion ${album.durationAlbum}`}</p>
            </div>
        </div>
    );

    const albumConfig = album.configCards?.find(c => c.albumId === album.id);
    const trakId = trakUri?.split(':').pop();
    const trackConfig = albumConfig?.traks.find(t => t.id === trakId);

    return (
        <div className="album-container-main" >
            <div className="algo">
                <div className={`container-era era-${album.albumName}`}>
                    <div className="container-album-image">
                        <picture>
                            <source media="(max-width: 550px)" srcSet={album.images[2]?.url} />
                            <img src={album.images[1]?.url} alt={`Portada de ${album.albumName}`} />
                        </picture>
                        {isMobile? (
                            containeTextAlbum
                        ): 
                        <div className="container-texts-album">
                            <p className="text-alnum-mia-tittle">Album</p>
                            <h1 className="album-tittle">{album.albumName}</h1>
                            <div className="container-details">
                                <p>{album.artist}</p>
                                <p>{album.releaseData}</p>
                                <p>{`${album.tracks.length} canciones`}</p>
                                <p>{`Duracion ${album.durationAlbum}`}</p>
                            </div>
                        </div>
                        }
                    </div>
                    <div className="container-traks">
                        <div className="container-head-traks">
                            <div>
                                #
                            </div>
                            <div>
                                Titulo
                            </div>
                            <div>
                                Time
                            </div>
                        </div>
                        {album.tracks.map((track, index) => {
                            return (
                                <div id={track.uri} className="container-body-traks" key={track.id} onClick={(e) => playTrack(e, album.id)}>
                                    <div>
                                        {track.track_number}
                                    </div>
                                    <div>
                                        {track.name}
                                    </div>
                                    <div>
                                        {`${track.duration_min.minutes}: ${track.duration_min.seconds}`}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            {trakUri && album.id === activeAlbumId && (
                <div className="spotify-iframe-container">
                    <iframe
                        src={`https://open.spotify.com/embed/track/${trakId}`}
                        width="100%"
                        height="100"
                        frameBorder="0"
                        allowtransparency="true"
                        allow="encrypted-media"
                    ></iframe>
                    <div className="container-cards-album">
                        {trackConfig && (
                            <>
                                <CardComponent
                                image={trackConfig.image1}
                                bodyText={trackConfig.text1}
                                variant={trackConfig.variantCard1}>
                                </CardComponent>
                                <CardComponent
                                 image={trackConfig.image2}
                                 bodyText={trackConfig.text2}
                                 variant={trackConfig.variantCard2}>
                                </CardComponent>
                            </>
                        )}
                    </div>
                </div>
            )}
        </div>

    )
};

export default AlbumComponent;