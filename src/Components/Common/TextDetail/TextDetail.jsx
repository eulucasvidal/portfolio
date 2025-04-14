import React from "react";
import styles from './TextDetail.module.css';

const TextDetail = ({text}) => {
  return (
    <span className={`${styles.textDetail}`}>{text}</span>
  )
}
export default TextDetail;