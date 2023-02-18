import React from 'react'
import Header from '../header/Header'
import style from "./intro.module.css"

const Intro = () => {
  return (
    <div className={style.intro}>
        <div className={style.backgroundImage}></div>
        <Header />
        <div className={style.centerContent}>
            <div className={style.animationText} >
                <p>ნატურალური კოსმეტიკური საშუალებები</p>
            </div>
            <p> აქ მინდა იყოს მოკლე აღწერა იმის შესახებ თუ რას ყიდით, როგორია თქენი პროდუქცია და სად არის მაღაზია ან რამე ადმაგვარი </p>
            <button> შეუკვეთე </button>
        </div>
    </div>
  )
}

export default Intro