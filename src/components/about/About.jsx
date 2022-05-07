import React from "react"
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
import CV from '../../assets/cv.pdf'

const About = () => {
    return (
        <section id='about'>
            <h5>Get To Know</h5>
            <h2>About Me</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="About Image" />
                    </div>
                </div>
                    <div className="about__cards">
                        <article className="about__card">
                            <FaAward className="about__icon"/>
                            <h5>Experience</h5>
                            <small>1+ Years Working</small>
                        </article>

                        <article className="about__card">
                            <FiUsers className="about__icon"/>
                            <h5>Clients</h5>
                            <small>5+ Worldwide</small>
                        </article>

                        <article className="about__card">
                            <VscFolderLibrary className="about__icon"/>
                            <h5>Projects</h5>
                            <small>30+ Completed</small>
                        </article>
                        <p>Retired EMT-B turned Full stack developer and software project manager. An adept developer focusing on JavaScript, Web and Mobile-first development. After success with WordPress front-end/back-end and Shopify development, I am eager to continue my career. I am a critical thinker who is hardworking and quick to learn new integrating technologies. I work well within a team and is willing to contribute to a positive work culture.</p>
                        <a href="#contact" className="btn btn-primary">Let's Talk!</a>
                    </div>
                <div className="about__content">

                </div>
            </div>
        </section>
    )
}

export default About