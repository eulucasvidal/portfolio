import React from 'react'
import styles from '../Subtitle/Subtitle.module.css'

const Subtitle = ({text}) => {
  return (
    <h2 className={`${styles.subtitle} detail`}>{text}</h2>
  )
}

export default Subtitle;