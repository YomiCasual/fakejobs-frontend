import React from 'react'
import InputField from '../Reusable/InputField'
import heroStyle from '../../styles/Hero.module.css'

const Hero = ({ findFakeJob}) => {
    return (
        <section className={heroStyle.hero}>   
            <h1 className={`${heroStyle.title} move-in-right`}>Search First, <span>Search Safe</span></h1>
            <p className={`${heroStyle.subtitle} slide-up-delay`}>A public compiled list of fakes jobs in Nigeria</p>
            <InputField findFakeJob={findFakeJob} />
        </section>
    )
}

export default Hero
