import React from 'react';
import style from './styles.module.scss';
import Image from 'next/image';

const Footer = () => {
  return (
    <>
        <main className={style.container}>
            <div className={style.content}>
                <div className={style.middle}>
                    <h3>Todos direitos reservados - Pedro Cezar © 2025</h3>
                    <Image src="/WORDMARK-ROXO-ESCURO.png" alt="Ícone de correção" width={200} height={200} />
                </div>
            </div>
        </main>
    </>
  )
}

export default Footer