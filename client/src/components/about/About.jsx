import React from 'react'
import style from "./about.module.css"

import aboutAsImage from "../../images/web/about-as.jpg"

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const About = () => {

    useEffect( () => {
        AOS.init();
    }, [])


  return (
    <div className={style.about}>
        <h1> ჩვენს შესახებ </h1>
        <div className={style.content}>
            <div data-aos="fade-right" className={style.leftContent}>
                <img className={style.aboutAsImage} src={aboutAsImage} alt="" />
            </div>
            <div data-aos="fade-left" className={style.rightContent}>
                <p>
                    აქ უნდა იყოს ტესტი რომელიც აღწერს თქვენი ბიზნესის ისტორიას, რა არის თქვენი პროდუქტის უპირატესობები,
                    ხაზი გაესვას იმ სასარგებლო თვისებებს რასაც botanic georgia - ას პროდუქტს მოაქვს მომხარებელბისთვის, ან თუ გინდათ სხვა რამეები ეწეროს
                    მთლიანად თქვენი გადასაწყვეტი იქნება.
                </p>
                <p>
                    აქ უნდა იყოს ტესტი რომელიც აღწერს თქვენი ბიზნესის ისტორიას, რა არის თქვენი პროდუქტის უპირატესობები,
                    ხაზი გაესვას იმ სასარგებლო თვისებებს რასაც botanic georgia - ას პროდუქტს მოაქვს მომხარებელბისთვის, ან თუ გინდათ სხვა რამეები ეწეროს
                    მთლიანად თქვენი გადასაწყვეტი იქნება.
                    თვისებებს რასაც botanic georgia - ას პროდუქტს მოაქვს მომხარებელბისთვის, ან თუ გინდათ სხვა რამეები ეწეროს
                    მთლიანად თქვენი გადასაწყვეტი იქნება.
                </p>
            </div>
        </div>
    </div>
  )
}

export default About