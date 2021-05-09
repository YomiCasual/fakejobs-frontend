import React from 'react'
import InputField from '../Reusable/InputField'
import heroStyle from '../../styles/Hero.module.css'

const Hero = ({ findFakeJob}) => {
    return (
        <section className={heroStyle.hero}>   
            <h1 className={heroStyle.title}>Search First, <span>Search Safe</span></h1>
            <p className={heroStyle.subtitle}>A public compiled list of fakes jobs in Nigeria</p>
            <InputField findFakeJob={findFakeJob} />
        </section>
    )
}

export default Hero
