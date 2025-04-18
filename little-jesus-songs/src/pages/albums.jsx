
import { useState } from 'react';
import '../assets/styles/albums.css'
import AlbumComponent from '../components/albumComponent';
import EraNorteComponent from '../components/albumComponent';
import useAlbumsHook from '../customHooks/useAlbumsHook';

function Albums() {
    const { albums } = useAlbumsHook();
    const [ trakUri, setTrakUri ] = useState(null);
    const [ activeAlbumId, setActiveAlbumId ] = useState(null);
    
    const playTrack = (event, albumId) => {
        const { id } = event.currentTarget;
        setTrakUri(id);
        setActiveAlbumId(albumId);
    };

    return (
        <div className="container-albums" id='albums'>
            <h1 className='tittle-albums'>Viajemos a traves de las eras de Little Jesus</h1>
            {albums?.map((album) => {
                return (
                    <AlbumComponent
                    key={album.id}
                    album={album}
                    playTrack={playTrack}
                    trakUri={trakUri}
                    activeAlbumId={activeAlbumId}>
                    </AlbumComponent>
                )
            })}
        </div>
    )
};

export default Albums;