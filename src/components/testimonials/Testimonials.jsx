import React from "react"
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// const data = [
//     {
//         avatar: Avt1,
//         name: '',
//         reveiw: '',
//     },
//     {
//         avatar: Avt2,
//         name: '',
//         reveiw: '',
//     },
//     {
//         avatar: Avt3,
//         name: '',
//         reveiw: '',
//     },
//     {
//         avatar: Avt4,
//         name: '',
//         reveiw: '',
//     },
// ]

const Testimonials = () => {
    return (
        <section id='testimonials'>
            <h5>Review from clients</h5>
            <h2>Testimonials</h2>

            <div className="container testimonials__container">
                <article className="testimonial">
                    <div className="client__avatar">
                        <img src={AVTR1} alt="Avatar One" />
                    </div>
                        <h5 className="client__name">Ernest Achiever</h5>
                        <small className="client__review">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie aliquet pellentesque. Quisque faucibus in elit eu interdum. 
                            Phasellus a elit ac orci pellentesque rhoncus ut a leo. Vestibulum ante nibh, mattis vitae tempus nec, pharetra at risus. 
                            Donec ac ante ac lorem venenatis convallis vitae sit amet lorem. Nam scelerisque euismod mi, id aliquam tortor. 
                            Interdum et malesuada fames ac ante ipsum primis in faucibus.
                        </small>
                </article>
                <article className="testimonial">
                    <div className="client__avatar">
                        <img src={AVTR2} alt="Avatar One" />
                    </div>
                        <h5 className="client__name">Ernest Achiever</h5>
                        <small className="client__review">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie aliquet pellentesque. Quisque faucibus in elit eu interdum. 
                            Phasellus a elit ac orci pellentesque rhoncus ut a leo. Vestibulum ante nibh, mattis vitae tempus nec, pharetra at risus. 
                            Donec ac ante ac lorem venenatis convallis vitae sit amet lorem. Nam scelerisque euismod mi, id aliquam tortor. 
                            Interdum et malesuada fames ac ante ipsum primis in faucibus.
                        </small>
                </article>
                <article className="testimonial">
                    <div className="client__avatar">
                        <img src={AVTR3} alt="Avatar One" />
                    </div>
                        <h5 className="client__name">Ernest Achiever</h5>
                        <small className="client__review">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie aliquet pellentesque. Quisque faucibus in elit eu interdum. 
                            Phasellus a elit ac orci pellentesque rhoncus ut a leo. Vestibulum ante nibh, mattis vitae tempus nec, pharetra at risus. 
                            Donec ac ante ac lorem venenatis convallis vitae sit amet lorem. Nam scelerisque euismod mi, id aliquam tortor. 
                            Interdum et malesuada fames ac ante ipsum primis in faucibus.
                        </small>
                </article>
                <article className="testimonial">
                    <div className="client__avatar">
                        <img src={AVTR4} alt="Avatar One" />
                    </div>
                        <h5 className="client__name">Ernest Achiever</h5>
                        <small className="client__review">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie aliquet pellentesque. Quisque faucibus in elit eu interdum. 
                            Phasellus a elit ac orci pellentesque rhoncus ut a leo. Vestibulum ante nibh, mattis vitae tempus nec, pharetra at risus. 
                            Donec ac ante ac lorem venenatis convallis vitae sit amet lorem. Nam scelerisque euismod mi, id aliquam tortor. 
                            Interdum et malesuada fames ac ante ipsum primis in faucibus.
                        </small>
                </article>
            </div>
        </section>
    )
}

export default Testimonials