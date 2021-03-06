import React from "react"
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.png'
import IMG4 from '../../assets/portfolio4.png'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

// DO NOT USE THE IMAGES IN PRODCUTION

const data = [
    {
        id: 1,
        image: IMG1,
        title: 'Junit, eCommerce jewelry website',
        github: 'https://github.com/cnitsch821/junit-theme',
        demo: 'https://junit.com'
    },
    {
        id: 2,
        image: IMG2,
        title: 'iBetcrypto, Sports betting using cyrpto currency',
        github: 'https://github.com/',
        demo: 'https://ibetcrypto.io/'
    },
    {
        id: 3,
        image: IMG3,
        title: 'BizBits, LIVE funding and investing platform',
        github: 'https://github.com/',
        demo: 'https://bizbits.io/'
    },
    {
        id: 4,
        image: IMG4,
        title: 'Blockchain2022 Miami, Crypto event',
        github: 'https://github.com/',
        demo: 'https://blockchain2022.miami/'
    },
    {
        id: 5,
        image: IMG5,
        title: 'React Portfolio, Github source code',
        github: 'https://github.com/StephenWong-GIT/ReactPortfolio',
        demo: 'https://stephenwong.me/'
    },
    // {
    //     id: 6,
    //     image: IMG6,
    //     title: 'Charts templates & infographics in Figma',
    //     github: 'https://github.com',
    //     demo: 'https://dribbble.com/shots/16580766-Orion-UI-kit-Charts-templates-inforgraphics-in-Figma'
    // },
]

const Portfolio = () => {
    return (
        <section id='portfolio'>
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio__container">
                {
                    data.map(({id, image, title, github, demo}) => {
                        return (
                            <article key={id} className="portfolio__item">
                            <div className="portfolio__item-image">
                                <img src={image} alt={title} />
                            </div>    
                            <h3>{title}</h3>
                            <div className="portfolio__item-cta">
                                <a href={github} className="btn" target='_blank'>Github</a>
                                <a href={demo} className="btn btn-primary" target='_blank'>Live Demo</a>
                            </div>
                        </article>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Portfolio