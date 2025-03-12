import React, { useEffect, useState } from 'react';
import style from './style.module.scss';
import Square from './Square/Square';
import { motion } from 'framer-motion';
import 'aos/dist/aos.css'; 
import * as AOS from 'aos';

const Modules = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            offset: 50,
        });
    }, []);

    const [isSpecificPointReached, setIsSpecificPointReached] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const lastRow = document.getElementById("lastRow");
            if (lastRow) {
                const rect = lastRow.getBoundingClientRect();
                const windowHeight = window.innerHeight;

                // Verifica se o último componente está visível na tela
                if (rect.top <= windowHeight * 0.6) {
                    setIsSpecificPointReached(true);
                } else {
                    setIsSpecificPointReached(false);
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const backgroundColor = isSpecificPointReached ? "#010425" : "#ffffff";
    const textColor = isSpecificPointReached ? "white" : "black";
    const borderColor = isSpecificPointReached ? "white" : "#ccc";
    const containerColor = isSpecificPointReached ? "#0a0730" : "#F0F0F0";

    return (
        <>
            <motion.div 
                className={style.container}
                style={{ backgroundColor }}
            >
                <section className={style.container}>
                    <div className={style.content}>
                        <div className={style.title} data-aos="fade-up" data-aos-delay="900">
                            <h2>
                                <span>Nossos Serviços</span>
                            </h2>
                        </div>
                        <div className={style.row} data-aos="fade-up" data-aos-delay="1000">
                            <Square 
                                color={textColor}
                                title="Sites Institucionais"
                                bodyText="Sites profissionais e personalizados para empresas..."
                                containerColor={containerColor}
                                borderColor={borderColor}
                                width="100%"
                            />
                            <Square 
                                color={textColor}
                                title="Landing Pages Otimizadas"
                                bodyText="Páginas de alta conversão..."
                                containerColor={containerColor}
                                borderColor={borderColor}
                                width="100%"
                            />
                        </div>
                        <div className={style.row}>
                            <Square 
                                color={textColor}
                                title="Portfólio Online"
                                bodyText="Sites incríveis para exibir seu trabalho..."
                                containerColor={containerColor}
                                borderColor={borderColor}
                                width="100%"
                            />
                            <Square 
                                color={textColor}
                                title="E-commerce Personalizado"
                                bodyText="Plataformas de comércio eletrônico..."
                                containerColor={containerColor}
                                borderColor={borderColor}
                                width="100%"
                            />
                        </div>
                        <div className={style.row} id="lastRow"> 
                            <Square 
                                color={textColor}
                                title="Blogs e Sites Pessoais"
                                bodyText="Criação de blogs e sites pessoais..."
                                containerColor={containerColor}
                                borderColor={borderColor}
                                width="100%"
                            />
                            <Square 
                                color={textColor}
                                title="Sites para Serviços"
                                bodyText="Desenvolvimento de sites para empresas..."
                                containerColor={containerColor}
                                borderColor={borderColor}
                                width="100%"
                            />
                            <Square 
                                color={textColor}
                                title="Sites Mobile-First"
                                bodyText="Sites projetados e otimizados..."
                                containerColor={containerColor}
                                borderColor={borderColor}
                                width="100%"
                            />
                        </div>
                    </div>
                </section>
            </motion.div>
        </>
    );
}

export default Modules;
