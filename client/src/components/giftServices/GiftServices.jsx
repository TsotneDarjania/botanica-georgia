import React from 'react'
import { useEffect } from 'react';
import style from "./giftServices.module.css"

import AOS from 'aos';
import 'aos/dist/aos.css';

const GiftServices = () => {

    useEffect( () => {
        AOS.init();
    }, [])


  return (
    <div className={style.giftServices}>
        <h1> სასაჩუქრე სერვისები </h1>
        <p className={style.text}>ბოტანიკა ჯეორჯიაში ყველაზე ბიუჯეტური ბოქსის აწყობა შეგიძლია</p>
        <div data-aos="flip-up" className={style.boxes}>
            <div className={style.box}>
                <div className={style.boxImage + " " + style.smallBox}></div>
                <div className={style.details}>
                   <p> პაატარა სასაჩუქრე ყუთი</p>
                </div>
            </div>
            <div className={style.box}>
                <div className={style.boxImage + " " + style.mediumBox}></div>
                <div className={style.details}>
                   <p> საშუალო სასაჩუქრე ყუთი</p>
                </div>
            </div>
            <div className={style.box}>
                <div className={style.boxImage + " " + style.bigBox}></div>
                <div className={style.details}>
                   <p> დიდი სასაჩუქრე ყუთი</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default GiftServices