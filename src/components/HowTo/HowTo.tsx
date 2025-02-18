import React from "react";


import style from './HowTo.module.scss'

interface IHowToProps {
 title: string;
 description: string;
 step: number
}

const HowTo = (props: IHowToProps) => {
 return (
  <div className={style.wrapper}>
    <h1>{props.step}.</h1>
    <div>
     <h1 className={style.title}>{props.title}</h1>
     <p className={style.description}>{props.description}</p>
    </div>
  </div>
 )

}

export default HowTo;
