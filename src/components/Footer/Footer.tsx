import React from "react";
import Image from "next/image";

import style from './Footer.module.scss'

import headmade from '@/assets/headmade.svg';

const Footer = () => {
 const year = new Date().getFullYear();
 return (
  <div className={style.footer}>
   <Image className={style.headmade} src={headmade} alt="headmade"/>
   <p>Разработано <a href="https://headmade.pro/">HeadMade</a></p>
   <p>&#169; {year}</p>
  </div>
 )

}

export default Footer;
