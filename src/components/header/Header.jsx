import React from "react"
import CTA from  './CTA'
import ME from '../../assets/mee.png'
import HeaderSocial from './HeaderSocial'


const Header = () => {
    return (
        <header>
            <div className="container header__container">
                <h5>Hello! My name is</h5>
                <h1>Stephen Wong</h1>
                <h5 classname="text-light">Fullstack Developer</h5>
                <CTA />
                <HeaderSocial />
                <div className="me">
                    <img src={ME} alt="me" />
                </div>
                <a href="#contact" className="scroll_down">Scroll Down</a>
            </div>
        </header>
    )
}

export default Header