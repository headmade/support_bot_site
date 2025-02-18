import React from "react";
import Image from "next/image";

import styles from './Advantage.module.scss'

import check from '@/assets/Check.svg';

interface IAdvantageProps {
 title: string;
 description: string;
}

const Advantage = (props: IAdvantageProps) => {
 return (
  <div className={styles.wrapper}>
   <Image className={styles.check_icon} src={check} alt="check"/>
   <div className={styles.text_block}>
    <h2 className={styles.text_header}>{props.title}</h2>
    <p className={styles.text_description}>{props.description}</p>
   </div>
  </div>
 )
}

export default Advantage;
