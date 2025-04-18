import { AnimatePresence, motion } from "motion/react";
import '../assets/styles/buttons.css'
function ButtonComponent({getAlbums}) {
    return (
        <div className="circle-button" onClick={getAlbums}>
           <span className="button-text">Escuchar</span>
           <span className="button-icon"><i class="fa-solid fa-play"></i></span>
        </div>
    )
};

export default ButtonComponent;