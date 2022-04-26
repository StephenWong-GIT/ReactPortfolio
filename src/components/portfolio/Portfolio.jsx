import React from "react"
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

// DO NOT USE THE IMAGES IN PRODCUTION
{ /*
const data = {
    {
        id: 1
        image: IMG1,
        title: '',
        github: '',
        demo: ''
    },

    {
        id: 2
        image: IMG2,
        title: '',
        github: '',
        demo: ''
    },

    {
        id: 3
        image: IMG3,
        title: '',
        github: '',
        demo: ''
    },

    {
        id: 4
        image: IMG4,
        title: '',
        github: '',
        demo: ''
    },

    {
        id: 5
        image: IMG5,
        title: '',
        github: '',
        demo: ''
    },
    
    {
        id: 6
        image: IMG6,
        title: '',
        github: '',
        demo: ''
    },

}
*/}

const Portfolio = () => {
    return (
        <section id='portfolio'>
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio__container">
                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={IMG1} alt='' />
                    </div>    
                    <h3>This is a portolio item title</h3>
                    <div className="portfolio__item-cta">
                        <a href="https://github.com" className="btn" target='_blank'>Github</a>
                        <a href="https://dribbble.com/Alien_pixels" className="btn btn-primary" target='_blank'>Live 
                        Demo</a>
                    </div>
                </article>
                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={IMG2} alt='' />
                    </div>    
                    <h3>This is a portolio item title</h3>
                    <div className="portfolio__item-cta">
                        <a href="https://github.com" className="btn" target='_blank'>Github</a>
                        <a href="https://dribbble.com/Alien_pixels" className="btn btn-primary" target='_blank'>Live 
                        Demo</a>
                    </div>
                </article>
                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={IMG3} alt='' />
                    </div>    
                    <h3>This is a portolio item title</h3>
                    <div className="portfolio__item-cta">
                        <a href="https://github.com" className="btn" target='_blank'>Github</a>
                        <a href="https://dribbble.com/Alien_pixels" className="btn btn-primary" target='_blank'>Live 
                        Demo</a>
                    </div>
                </article>
                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={IMG4} alt='' />
                    </div>    
                    <h3>This is a portolio item title</h3>
                    <div className="portfolio__item-cta">
                        <a href="https://github.com" className="btn" target='_blank'>Github</a>
                        <a href="https://dribbble.com/Alien_pixels" className="btn btn-primary" target='_blank'>Live 
                        Demo</a>
                    </div>
                </article>
                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={IMG5} alt='' />
                    </div>    
                    <h3>This is a portolio item title</h3>
                    <div className="portfolio__item-cta">
                        <a href="https://github.com" className="btn" target='_blank'>Github</a>
                        <a href="https://dribbble.com/Alien_pixels" className="btn btn-primary" target='_blank'>Live 
                        Demo</a>
                    </div>
                </article>
                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={IMG6} alt='' />
                    </div>    
                    <h3>This is a portolio item title</h3>
                    <div className="portfolio__item-cta">
                        <a href="https://github.com" className="btn" target='_blank'>Github</a>
                        <a href="https://dribbble.com/Alien_pixels" className="btn btn-primary" target='_blank'>Live 
                        Demo</a>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default Portfolio