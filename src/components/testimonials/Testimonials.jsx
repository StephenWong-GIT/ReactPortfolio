import React from "react"
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'
import AVTR5 from '../../assets/avatar5.png'
import AVTR6 from '../../assets/avatar6.jpg'
import AVTR7 from '../../assets/avatar7.jpg'


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
        review: 'Stephen is an eager developer with a broad set of skills who is efficient and quick minded in problem solving. We have collaborated on a few projects together, some nice and easy and others like managing an ecommerce website. He is always a joy to work with and very patient and understanding. Looking forward to upcoming projects.',
    },
    {
        avatar: AVTR2,
        name: 'Yulia @JunitFounder',
        review: 'A friend recommened Stephen to me at the very early stages of my own brand. We have been working together ever since. He goes above and beyond whats asked and has even gone through lenghts to teach me the backend of my own website so I can update and change my own products without having to wait on anyone!',
    },
    {
        avatar: AVTR3,
        name: 'James Depalo @MaimonidesEMS',
        review: 'Stephen was my EMT partner for 2+ years and over the thousands of jobs we have done together he always showed leadership and calmness even in the most stressfull situations. He has also help set up media content on my Twitch where I stream games and podcast, he always knows whats trending and how to make my channel grow!',
    },
    {
        avatar: AVTR4,
        name: 'Francine Foo @Rumc Wellness Chief',
        review: 'I have known Stephen for over 4+ years now and he is the most reliable and honest person I have come to meet. He has helped me with various web development tasks from updating products to social media content for my hospital page.',
    },
]

const Testimonials = () => {
    return (
        <section id='testimonials'>
            <h5>Review from Clients and Friends</h5>
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