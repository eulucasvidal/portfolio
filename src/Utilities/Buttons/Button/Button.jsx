import React from 'react'
import styles from '../Button/Button.module.css';

const Button = ({url, text}) => {
  return (
    <>
      <a href={url} target='_blank' rel='noopener' className={`${styles.button}`}>
        {text}
      </a>
    </>
  )
}

export default Button;