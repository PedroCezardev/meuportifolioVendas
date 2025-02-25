import React from 'react';
import style from './styles.module.scss';
import { motion } from 'framer-motion';

interface SquareProps{
  color: string;
  borderColor: string;
  containerColor: string;
  title: string;
  bodyText: string;
  width: string;
}

const Square = ({
  color,
  borderColor, 
  containerColor,
  title,
  bodyText,
  width,
}: SquareProps) => {
  return (
    <motion.div
      className={style.container}
      style={{ 
        borderColor, 
        color, 
        backgroundColor: containerColor,
        width,
      }}
    >
      <div className={style.container}>
        <div className={style.content}>
          <div className={style.texts}>
            <div className={style.title}>
              <h3 style={{ color }} >{title}</h3>
            </div>
            <hr className={style.hr} style={{backgroundColor: borderColor}} />
            <div className={style.body}>
              <h5 style={{ color }} >{bodyText}</h5>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Square