import { AnimatePresence, motion } from "motion/react";
import '../assets/styles/header.css';

function HeaderComponent() {
    return (
        <motion.nav
            className="navbar navbar-expand-md bg-body-tertiary p-3 fixed-top"
            
            initial={{ opacity: 0, scale: 0.2 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ ease: "easeIn", duration: 1 }}>
            <div className="container-fluid">
                <a className="navbar-brand" href="https://github.com/Ivanmda98/LittleJesusSongs">MimdaDev</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse list-items-container" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#home">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#albums">Albums</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#bonusTraks">Bonus</a>
                        </li>
                    </ul>
                </div>
            </div>
        </motion.nav>
    )
};

export default HeaderComponent;