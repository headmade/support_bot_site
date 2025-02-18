import React from "react";
import Image from "next/image";

import styles from "./Header.module.scss";
import logo_white from '@/assets/logo_white.svg';

const Header = () => {
 return(
  <div className={styles.header}>
   <div className={styles.wrapper}>
   <Image className={styles.logo} src={logo_white} alt="logo"/>
   <p className={styles.logo_title}>Support Bot by HeadMade</p>
   </div>
  </div>
 )
}

export default Header;
