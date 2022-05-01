import React from "react"
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
    {
        avatar: AVTR1,
        name: 'Francine Foo',
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie aliquet pellentesque. Quisque faucibus in elit eu interdum. Phasellus a elit ac orci pellentesque rhoncus ut a leo. Vestibulum ante nibh, mattis vitae tempus nec, pharetra at risus.',
    },
    {
        avatar: AVTR2,
        name: 'Seth Cotter',
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie aliquet pellentesque. Quisque faucibus in elit eu interdum. Phasellus a elit ac orci pellentesque rhoncus ut a leo. Vestibulum ante nibh, mattis vitae tempus nec, pharetra at risus.',
    },
    {
        avatar: AVTR3,
        name: 'Chris Nitsch',
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie aliquet pellentesque. Quisque faucibus in elit eu interdum. Phasellus a elit ac orci pellentesque rhoncus ut a leo. Vestibulum ante nibh, mattis vitae tempus nec, pharetra at risus.',
    },
    {
        avatar: AVTR4,
        name: 'Jason Lam',
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie aliquet pellentesque. Quisque faucibus in elit eu interdum. Phasellus a elit ac orci pellentesque rhoncus ut a leo. Vestibulum ante nibh, mattis vitae tempus nec, pharetra at risus.',
    },
]

const Testimonials = () => {
    return (
        <section id='testimonials'>
            <h5>Review from clients</h5>
            <h2>Testimonials</h2>

            <Swiper className="container testimonials__container"
            // install Swiper modules
      modules={[ Pagination ]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
                {
                    data.map(({avatar, name, review}, index) => {
                        return (
                            <SwiperSlide key={index} className="testimonial">
                            <div className="client__avatar">
                                <img src={avatar} />
                            </div>
                                <h5 className="client__name">{name}</h5>
                                <small className="client__review">{review}</small>
                        </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </section>
    )
}

export default Testimonials