import React from 'react'
import styles from '../Title/Title.module.css';

const Title = ({text, span}) => {
  return (
    <h1 className={`${styles.title}`}>{text} <span className={`${styles.titleSpan}`}>{span}</span></h1>
  )
}

export default Title