import { AnimatePresence, motion } from "motion/react";
import '../assets/styles/card.css'
function CardComponent({ tittle, bodyText, image, buttonText, size, variant, thirdLEvel }) {
    const sizes = {
        s: 'small',
        m: 'medium',
        l: 'large',
        xl: 'x-large'
    }



    return (
        <div className={`card-custom card-${variant} card-${sizes[size]}`}>
           <div className="image-box">

            <img src={image} alt="" />
           </div>
           <div className="content">
                <h2>{tittle}</h2>
                <p>{bodyText}</p>
           </div>
        </div>
    )
};

export default CardComponent;