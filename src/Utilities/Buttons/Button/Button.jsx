import React from 'react'
import styles from '../Button/Button.module.css';

const Button = ({url, text}) => {
  return (
    <>
      <a href={url} target='_blank' rel='noopener'>
        <button className={`${styles.button}`}>{text}</button>
      </a>
    </>
  )
}

export default Button;