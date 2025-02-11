import React from 'react'
import styles from '../SocialMidia/SocialMidia.module.css';
import LinkedInIcon from '../../Assets/Img/Svg/Icons/linkedin.svg';
import GitHubIcon from '../../Assets/Img/Svg/Icons/github.svg';
import DownloadIcon from '../../Assets/Img/Svg/Icons/download.svg';
import InstagramIcon from '../../Assets/Img/Svg/Icons/instagram.svg';

const SocialMidia = () => {
  const socialMidiaList = [
    {href:'https://www.linkedin.com/in/goncalves-lucas/',icon:LinkedInIcon,name:'LinkedIn',},
    {href:'https://github.com/eulucasvidal',icon:GitHubIcon,name:'GitHub',},
    {href:'./public/curriculo/curriculo-lucas.pdf',icon:DownloadIcon,name:'PDF Curriculo',},
    {href:'https://www.instagram.com/eu.lucasvidal/',icon:InstagramIcon,name:'Instagram',}
  ];
  return (
    <ul className={`${styles.socialMedia} links`}>
      {socialMidiaList.map((link, index)=>(
        <li key={index}>
          <img src={link.icon} alt={link.name} />
          <a href={link.href} target='_blank'>{link.name}</a>
        </li>
      ))}
    </ul>
  )
}

export default SocialMidia