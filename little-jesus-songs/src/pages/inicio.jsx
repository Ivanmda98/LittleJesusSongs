
import '../assets/styles/inicio.css'
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import CardComponent from '../components/cardComponent';
import image1 from '../../public/images/little-752.jpg';
import image2 from '../../public/images/little-751.jpeg';
import ButtonComponent from '../components/buttonComponent';

function Inicio({ showHeader }) {
    const getAlbums = () => {
        const albumsSection = document.getElementById('albums');
        if (albumsSection) {
            albumsSection.scrollIntoView({ behavior: 'smooth' });
        }
    }
    return (
        <div className="container-inicio" id='home'>
            <AnimatePresence mode="wait">
                <section className="inicio-left-side">
                    <div className='main-container'>
                        <h1 className='cards-tittle'>Little Jesus</h1>
                        <div className='container-cards'>
                            <CardComponent
                                tittle={'Little Jsesus'}
                                bodyText={'Una de las bandas mexicanas más importantes en la última década, está de vuelta con un disco titulado El Show Debe Continuar.'}
                                image={image2}
                                variant={'vertical'}>
                            </CardComponent>
                            <CardComponent
                                tittle={'Inicios'}
                                bodyText={'Inició en 2012 y desde entonces ha pasado por distintas eras marcadas por tres álbumes de estudio: Norte (2013), Río Salvaje (2016), Disco de Oro (2019).'}
                                image={image1}
                                variant={'horizontal'}>
                            </CardComponent>
                        </div>
                    </div>
                </section>
                <section className="inicio-rigth-side">
                    <div className='container-text'>
                        <h1 className='tittle-inicio'>
                            LO MEJOR DE LITTLE JESUS
                        </h1>
                        <p className='subtittle-inicio'>
                            Echemos un vistaso a las distintas eras de su carrera.
                        </p>
                        <ButtonComponent
                        getAlbums={getAlbums}></ButtonComponent>
                    </div>

                </section>
            </AnimatePresence>
        </div>
    )
};

export default Inicio;