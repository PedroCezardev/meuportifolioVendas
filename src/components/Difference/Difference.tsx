import React from 'react'
import style from './styles.module.scss';
import Image from 'next/image';

const Difference = () => {
  return (
    <section className={style.container}>
        <div className={style.content}>
            <div className={style.title}>
                <h2>A diferença absurda entre ter
                    <span> um site profissional </span>
                    <span> com o Pedro </span>
                    e continuar como está...
                </h2>
            </div>
            <div className={style.bottom}>
                <div className={style.leftBox}>
                    <div className={style.titleBox}>
                        <h5>Sites genéricos e amadores</h5>
                    </div>
                    <div className={style.topics}>
                        <Image src="/redX.svg" alt="Ícone de correção" width={24} height={24} />
                        <p>Site lento e inseguro</p>
                    </div>
                    <div className={style.topics}>
                        <Image src="/redX.svg" alt="Ícone de correção" width={24} height={24} />
                        <p>Design ultrapassado e pouco atrativo</p>
                    </div>
                    <div className={style.topics}>
                        <Image src="/redX.svg" alt="Ícone de correção" width={24} height={24} />
                        <p>Não aparece no Google</p>
                    </div>
                    <div className={style.topics}>
                        <Image src="/redX.svg" alt="Ícone de correção" width={24} height={24} />
                        <p>Falta de personalização</p>
                    </div>
                    <div className={style.topics}>
                        <Image src="/redX.svg" alt="Ícone de correção" width={24} height={24} />
                        <p>Não gera clientes nem vendas</p>
                    </div>
                    <div className={style.topics}>
                        <Image src="/redX.svg" alt="Ícone de correção" width={24} height={24} />
                        <p>Suporte inexistente</p>
                    </div>
                </div>
                <div className={style.rightBox}>
                    <div className={style.titleBox}>
                        <h5>Sites feitos <span> pelo PEDRO </span> </h5>
                    </div>
                    <div className={style.pros}>
                        <Image src="/correct.svg" alt="Ícone de correção" width={24} height={24} />
                        <p>Site rápido, seguro e responsivo</p>
                    </div>
                    <div className={style.pros}>
                        <Image src="/correct.svg" alt="Ícone de correção" width={24} height={24} />
                        <p>Design moderno e personalizado</p>
                    </div>
                    <div className={style.pros}>
                        <Image src="/correct.svg" alt="Ícone de correção" width={24} height={24} />
                        <p>SEO otimizado para aparecer no Google</p>
                    </div>
                    <div className={style.pros}>
                        <Image src="/correct.svg" alt="Ícone de correção" width={24} height={24} />
                        <p>Adaptado para sua marca e seu público</p>
                    </div>
                    <div className={style.pros}>
                        <Image src="/correct.svg" alt="Ícone de correção" width={24} height={24} />
                        <p>Criado para converter visitas em clientes</p>
                    </div>
                    <div className={style.pros}>
                        <Image src="/correct.svg" alt="Ícone de correção" width={24} height={24} />
                        <p>Suporte dedicado para te acompanhar</p>
                    </div>
                </div>
            </div>
            <div className={style.button}>
                <button>QUERO MEU SITE PROFISSIONAL</button>
            </div>
        </div>
    </section>
  )
}

export default Difference;