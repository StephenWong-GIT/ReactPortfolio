import React from "react"
import {BiCheck} from 'react-icons/bi'

const Services = () => {
    return (
        <section id='services'>
            <h5>Services That I Offer</h5>
            <h2>Services</h2>

            <div className="container service__container">
                <article className="service">
                    <div className="service__head">
                        <h3>UI/UX Design</h3>
                    </div>

                    <ul className="service__list">
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Web Design Services</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Mobile App UX/UI Design Services</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Cross-platform Design</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>UI/UX Design</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Graphic design</p>
                        </li>
                    </ul>
                </article>
                {/*END OF UI/UX*/}
                <article className="service">
                    <div className="service__head">
                        <h3>Web Development</h3>
                    </div>

                    <ul className="service__list">
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Custom Web Application</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>UX/UI Design</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Web Engineering</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Advance Code Capability</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Web Application Testing</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Ecommerce Development</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Security First Web Application</p>
                        </li>
                    </ul>
                </article>
                {/*END OF WEB DEVELOPMENT*/}
                <article className="service">
                    <div className="service__head">
                        <h3>Content Creation</h3>
                    </div>

                    <ul className="service__list">
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Content Creation/Management</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Website and Mobile App Development</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Website Copywriting</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Graphic Design Services</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Ecommerce Content</p>
                        </li>
                    </ul>
                </article>
                {/*END OF CONTENT CREATION*/}
            </div>
        </section>
    )
}

export default Services