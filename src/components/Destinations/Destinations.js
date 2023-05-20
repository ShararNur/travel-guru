// import React, { useEffect } from 'react';
// import './Destinations.css';
// import sajek from '../../resources/Image/Sajek.png';
// import sreemongol from '../../resources/Image/Sreemongol.png'
// import sundorbon from '../../resources/Image/sundorbon.png';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowRight, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
// import { useState } from 'react';
// import Booking from '../Booking/Booking';
// import { Link } from 'react-router-dom';
// import CoxsBazar from '../Places/CoxsBazar';
// import locations from '../FakeData';
// import LocationItem from '../Home/LocationItem';
// import { Button, Col, Container, Row } from 'react-bootstrap';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';



// import '../SwiperJs/swiperJS.css'
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';


// const Destinations = () => {
//     const [slideIndex, setSlideIndex] = useState(0);
//     const [booking, setBooking] = useState({});

//     useEffect(() => {
//         const activeItem = locations.find((location, index) => index.toString() === slideIndex.toString())
//         setBooking(activeItem)
//     }, [slideIndex])

//     const onClickHandler = swiper => {
//         if (swiper.clickSlide) {
//             if (swiper.clickedSlide.attributes) {
//                 var a = swiper.clickedSlide.attributes.getNamedItem('data-swiper-slide-index').value;
//                 setSlideIndex(a);
//             }
//         }
//     }

//     return (
//         <Container className="pr-0 mt-5 pt-5">
//             <div className="place-info">
//                 <div style={{ marginLeft: '121px' }} >
//                     <h1 className="text-white font-link">COX'S BAZAR</h1>
//                     <p className="text-white mb-4">Cox's Bazar is a city, fishing port, tourism centre and <br /> district headquarters in southeastern Bangladesh. It is <br />famous mostly for its long natural sandy beach and it...</p>
//                     {/* <button type="button" className="btn px-4">Booking<FontAwesomeIcon icon={faArrowRight} className="ms-2" /></button> */}
//                     <Link to="/booking" state={{ from: "Cox's Bazar" }} className="booking-btn">Booking<FontAwesomeIcon icon={faArrowRight} className="ms-2 " /></Link>
//                 </div>
//             </div>

//             <div className="place-pic ">
//                 <Col sm={8} xl={8}>
//                     <Swiper
//                         spaceBetween={15}
//                         centeredSlides={1}
//                         slidesPerView={3}
//                         navigation={true}
//                         autoplay={{
//                             delay: 2000,
//                             disableOnInteraction: false,
//                         }}
//                         loop={true}
//                         onClick={(swiper) => onClickHandler(swiper)}
//                         onSlideChange={(swiper => setSlideIndex(swiper.realIndex))}
//                         modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
//                     >
//                         {locations.map(location => {
//                             return (<SwiperSlide key={location.id}>
//                                 {({ isActive }) => (
//                                     <LocationItem isActive={isActive} location={location} />
//                                 )}

//                             </SwiperSlide>)
//                         })}
//                     </Swiper>
//                 </Col>
//             </div>
//             <div className="mt-5 pt-4 ">
//                 <button className="rounded-circle me-2 scroller"><FontAwesomeIcon icon={faAngleLeft} /></button>
//                 <button className="rounded-circle scroller"><FontAwesomeIcon icon={faAngleRight} /></button>
//             </div>
//         </div>
//     );
// };

// export default Destinations;