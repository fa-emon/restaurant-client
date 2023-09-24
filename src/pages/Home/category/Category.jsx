import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import image1 from '../../../assets/home/slide1.jpg'
import image2 from '../../../assets/home/slide2.jpg'
import image3 from '../../../assets/home/slide3.jpg'
import image4 from '../../../assets/home/slide4.jpg'
import image5 from '../../../assets/home/slide5.jpg'
import SectionTitle from '../../../components/sectionTitle/SectionTitle';

const Category = () => {
    return (
            <section>
                <SectionTitle
                    subHeading={'From 11.00am to 10.00pm'}
                    heading={'order online'}
                >
                </SectionTitle>

                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    centeredSlides={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper mb-7"
                >
                    <SwiperSlide>
                        <img className='relative' src={image1} alt="" />
                        <h2 className='absolute uppercase bottom-0 left-24 top-80 font-semibold text-white drop-shadow-md text-3xl'>salads</h2>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='relative' src={image2} alt="" />
                        <h2 className='absolute uppercase bottom-0 left-24 top-80 font-semibold text-white drop-shadow-md text-3xl'>pizzas</h2>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='relative' src={image3} alt="" />
                        <h2 className='absolute uppercase bottom-0 left-24 top-80 font-semibold text-white drop-shadow-md text-3xl'>soups</h2>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='relative' src={image4} alt="" />
                        <h2 className='absolute uppercase bottom-0 left-24 top-80 font-semibold text-white drop-shadow-md text-3xl'>desserts</h2>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='relative' src={image5} alt="" />
                        <h2 className='absolute uppercase bottom-0 left-24 top-80 font-semibold text-white drop-shadow-md text-3xl'>salads</h2>
                    </SwiperSlide>
                </Swiper>
            </section>
    );
};

export default Category;