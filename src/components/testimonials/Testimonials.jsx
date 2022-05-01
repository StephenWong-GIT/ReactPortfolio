import React from "react"
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

const data = [
    {
        avatar: AVTR1,
        name: 'Francine Foo',
        reveiw: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie aliquet pellentesque. Quisque faucibus in elit eu interdum. Phasellus a elit ac orci pellentesque rhoncus ut a leo. Vestibulum ante nibh, mattis vitae tempus nec, pharetra at risus.',
    },
    {
        avatar: AVTR2,
        name: 'Seth Cotter',
        reveiw: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie aliquet pellentesque. Quisque faucibus in elit eu interdum. Phasellus a elit ac orci pellentesque rhoncus ut a leo. Vestibulum ante nibh, mattis vitae tempus nec, pharetra at risus.',
    },
    {
        avatar: AVTR3,
        name: 'Jason Lam',
        reveiw: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie aliquet pellentesque. Quisque faucibus in elit eu interdum. Phasellus a elit ac orci pellentesque rhoncus ut a leo. Vestibulum ante nibh, mattis vitae tempus nec, pharetra at risus.',
    },
    {
        avatar: AVTR4,
        name: 'James Depalo',
        reveiw: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie aliquet pellentesque. Quisque faucibus in elit eu interdum. Phasellus a elit ac orci pellentesque rhoncus ut a leo. Vestibulum ante nibh, mattis vitae tempus nec, pharetra at risus.',
    },
]

const Testimonials = () => {
    return (
        <section id='testimonials'>
            <h5>Review from clients</h5>
            <h2>Testimonials</h2>

            <div className="container testimonials__container">
                {
                    data.map(({avatar, name, review}, index) => {
                        return (
                            <article key={index} className="testimonial">
                            <div className="client__avatar">
                                <img src={avatar} />
                            </div>
                                <h5 className="client__name">{name}</h5>
                                <small className="client__review">{review}</small>
                        </article>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Testimonials