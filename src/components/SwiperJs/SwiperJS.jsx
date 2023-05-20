import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import locations from '../FakeData';
import LocationItem from '../Home/LocationItem';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';

import './swiperJS.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const SwiperJS = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const [booking, setBooking] = useState({});

    useEffect(() => {
        const activeItem = locations.find((location, index) => index.toString() === slideIndex.toString())
        setBooking(activeItem)
    }, [slideIndex])

    const onClickHandler = swiper => {
        if (swiper.clickSlide) {
            if (swiper.clickedSlide.attributes) {
                var a = swiper.clickedSlide.attributes.getNamedItem('data-swiper-slide-index').value;
                setSlideIndex(a);
            }
        }
    }
    return (
        <Container className="pr-0 mt-5 pt-5">
            <Row>
                <Col sm={4} xl={4}>
                    <div className="bg-transparent px-0">
                        <h1 className="font-weight-bold">{booking.name}</h1>
                        <p>{booking.description?.slice(0, 150)} ...</p>
                        <Button className="px-4 py-2" variant="warning">Booking </Button>
                    </div>
                </Col>
                <Col sm={8} xl={8}>
                    <Swiper
                        spaceBetween={15}
                        centeredSlides={1}
                        slidesPerView={3}
                        navigation={true}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,
                        }}
                        loop={true}
                        onClick={(swiper) => onClickHandler(swiper)}
                        onSlideChange={(swiper => setSlideIndex(swiper.realIndex))}
                        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                    >
                        {locations.map(location => {
                            return (<SwiperSlide key={location.id}>
                                {({ isActive }) => (
                                    <LocationItem isActive={isActive} location={location} />
                                )}

                            </SwiperSlide>)
                        })}
                    </Swiper>
                </Col>
            </Row>

        </Container>
    );
};

export default SwiperJS;