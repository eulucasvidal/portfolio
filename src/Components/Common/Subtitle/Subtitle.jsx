import React from 'react'
import styles from '../Subtitle/Subtitle.module.css'

const Subtitle = ({text, span}) => {
  return (
    <h2 className={`${styles.subtitle}`}>{text} <span className={`${styles.subtitleSpan}`}>{span}</span></h2>
  )
}

export default Subtitle;