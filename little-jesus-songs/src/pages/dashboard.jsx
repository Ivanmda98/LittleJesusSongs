
import '../assets/styles/dashboard.css';
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";


function Dashboard({showHeader}) {
    const [currentText, setCurrentText] = useState(0);
    const [showImage, setShowImage] = useState(false);
    const [ isHandleImage, setIsHandleImage ] = useState(false);

    const inititalTexts = [
        { id: 0, text: "¿Estás lista para Little Jesus en el Palacio de los Deportes?" },
        { id: 1, text: "¿Solo conoces algunas canciones?" },
        { id: 2, text: "Aqui la guia definitiva para aprender nuevas canciones" }
    ]

    useEffect(() => {
        if (currentText < inititalTexts.length) {
            const timer = setTimeout(() => {
                setCurrentText(currentText + 1);
            }, 5000)

            return () => clearTimeout(timer);
        }
        console.log('Ultimo')
        setShowImage(true);
        showHeader();
        
    }, [currentText]);

    const toggleImage = () => setIsHandleImage(!isHandleImage);

    return (
        <div className="dashboard text-secondary">

            <AnimatePresence mode="wait">
                {
                    inititalTexts.map((item, index) => index === currentText ? (
                        <motion.h1
                            key={item.id}
                            initial={{ opacity: 0, y: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 2 }}
                            exit={{ opacity: 0, y: -100 }}
                        >
                            {item.text}
                        </motion.h1>
                    ) : null
                    )
                }
                {
                    showImage && (
                        <motion.div
                            className="card-wrapper"
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, ease: 'easeIn' }}>
                            <motion.div
                                className='background-card'>
                                
                            </motion.div>
                            <motion.div
                                className='foreg-round-card'
                                initial= {{y:50, opacity: 0, scale: 0}}
                                animate= {{y:0, opacity: 1, scale: 1}}
                                whileHover={{opacity:0.7}}
                                transition={{duration: 1}}
                                onClick={toggleImage}
                                >
                                    <motion.img 
                                        src='../public/images/little-750.jpg' 
                                        style={{width:400, height: 350}}
                                        layout
                                        transition={{
                                            type: "spring",
                                            visualDuration:0.2,
                                            bounce:0.2
                                        }}
                                    ></motion.img>
                                    
                            </motion.div>
                        </motion.div>
                    )
                }

            </AnimatePresence>
        </div>
    )
};

export default Dashboard;