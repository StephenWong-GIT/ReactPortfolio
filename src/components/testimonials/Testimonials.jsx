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
        name: 'Chris Nitsch @NitschMedia',
        review: 'Stephen is an eager developer with a broad set of skills and is quick minded in problem solving. We have collaborated on a few projects together, some nice and easy and others like managing an ecommerce website. He is always a joy to work with and very patient and understanding. Looking forward to upcoming projects.',
    },
    {
        avatar: AVTR2,
        name: 'Yulia @JunitFounder',
        review: 'A friend recommened Stephen to me at the very early stages of my own brand. We have been working together ever since. He goes above and beyond whats asked and has even gone through lenghts to even teach me the backend of my own website so I can update and change my own products without haveing to wait on anyone!',
    },
    {
        avatar: AVTR3,
        name: 'James Depalo @MaimonidesEMS',
        review: 'Stephen was my EMT partner for 2+ years and over the thousands of jobs we have done together he always showed leadership and a calmness even in the most stressfull situations. Hes always quick on his feet and knows exactly what to do and when, one of the best problem solvers I have ever met.',
    },
    {
        avatar: AVTR4,
        name: 'Francine Foo @Rumc Wellness Chief',
        review: '',
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