import { useState } from "react";
import { FaQuoteLeft } from 'react-icons/fa';
import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'


const Testimonials = () => {
    const [reviews, setReviews] = useState([])

    fetch('reviews.json')
        .then(response => response.json())
        .then(data => {
            setReviews(data)
        })

    return (
        <section className="my-20">
            <SectionTitle
                subHeading={'What Our Clients Say'}
                heading={'Testimonials'}
            ></SectionTitle>

            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <div>
                    {
                        reviews.map(review => <SwiperSlide
                            key={review._id}
                        >
                            <div className="flex flex-col items-center px-16">
                                <Rating className="mx-auto mb-10"
                                    style={{ maxWidth: 180 }}
                                    value={review.rating}
                                    readOnly
                                />

                                <FaQuoteLeft className="text-6xl mb-5"></FaQuoteLeft>
                                <p>{review.details}</p>
                                <h2 className="text-[#CD9003] text-3xl">{review.name}</h2>
                            </div>
                        </SwiperSlide>)
                    }
                </div>
            </Swiper>
        </section>
    );
};

export default Testimonials;