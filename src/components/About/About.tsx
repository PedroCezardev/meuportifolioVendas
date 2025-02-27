import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import style from './styles.module.scss';
import Image from 'next/image';
import 'aos/dist/aos.css'; 
import * as AOS from 'aos';
import Modal from '../Modal/Modal';

const About = () => {
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        AOS.init({
          duration: 1000,
          offset: 50,
        });
    }, []);

    useEffect(() => {
        if (!router.isReady) return;
        setIsOpen(router.query.modal === "true");
    }, [router, router.isReady, router.query]);

    const openModal = () => {
        setIsOpen(true);
        router.push('/?modal=true', undefined, { shallow: true });
    };

    const closeModal = () => {
        setIsOpen(false);
        router.replace('/', undefined, { shallow: true });
    };

    return (
        <section className={style.container}>
            <div className={style.content}>
                <div className={style.top}>
                    <div className={style.leftSide}>
                        <div className={style.leftSideContent} data-aos="fade-up" data-aos-delay="250">
                            <Image className={style.logo} src="/PedroProf.png" alt="Ícone de correção" width={450} height={500} />
                        </div>
                    </div>
                    <div className={style.rightSide} data-aos="fade-up" data-aos-delay="350">
                        <h5>
                            Quem é
                            <span> Pedro Cezar ?</span>
                        </h5>
                        <p>
                            Pedro Cezar, mais conhecido como <strong>&quot;Pedro Sites&quot; e &quot;Pedro Dev&quot;</strong>, é um jovem empreendedor
                            apaixonado por tecnologia. Aos 20 anos, decidiu transformar seu talento em um negócio 
                            próprio, ajudando empresas e profissionais a conquistarem presença digital com <strong>websites, 
                            lojas virtuais e aplicativos de alta performance.</strong>
                        </p>
                        <p>
                            Sua jornada começou na <strong>Universidade Católica de Pernambuco</strong>, onde cursa <strong>Sistemas para Internet</strong>
                            e descobriu sua verdadeira paixão pelo desenvolvimento. Com <strong>esforço e dedicação</strong>, aprimorou 
                            suas habilidades para criar soluções inovadoras que potencializam negócios no ambiente digital.
                        </p>
                        <div className={style.button} data-aos="fade-up" data-aos-delay="250">
                            <button onClick={openModal}>FAZER ORÇAMENTO</button>
                        </div>
                    </div>
                </div>
            </div>

            <Modal isOpen={isOpen} setIsOpen={closeModal} />
        </section>
    );
};

export default About;
