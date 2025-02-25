import React from 'react';
import style from './styles.module.scss';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className={style.container}>
      <div className={style.content}>
        <div className={style.leftSide}>
          <Image className={style.logo} src="/logoWebTech.png" alt  ="Ícone de correção" width={36} height={36} />
          <h1>
            Transforme sua presença online com um
            <span> site profissional </span> 
            e aumente suas vendas!</h1>
          <h5>
            Seu negócio precisa de presença digital? Criamos sites modernos, 
            rápidos e otimizados para atrair mais clientes e aumentar seu faturamento.
          </h5>
          <button>QUERO MEU SITE</button>
          <div className={style.discount}>
            <Image src="/discountTag.svg" alt="Ícone de correção" width={36} height={36} />
            <p>Peça um orçamento gratuito agora!</p>
          </div>
        </div>
        <div className={style.rightSide}>
          <div className={style.backgroundImages}>
            <Image src="/pix1.svg" alt="Background 1" width={285} height={83} />
             <Image src="/pix1.svg" alt="Background 2" width={285} height={83} />
            <Image src="/pix1.svg" alt="Background 3" width={285} height={83} />
            <Image src="/pix1.svg" alt="Background 4" width={285} height={83} />
          </div>
          <Image className={style.pedro} src="/pedroSemBackground.png" alt="Imagem de pedro" width={540} height={547} />
        </div>
      </div>
    </section>
  )
}

export default Hero