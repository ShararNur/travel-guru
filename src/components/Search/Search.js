import React from 'react';
import './Search.css'
import hotelOne from '../../resources/Image/Rectangle 26.png';
import hotelTwo from '../../resources/Image/Rectangle 27.png';
import hotelThree from '../../resources/Image/Rectangle 28.png';
import googleMap from '../../resources/Image/map.png';
import star from '../../resources/Icon/star_1_.png'

const Search = () => {
    return (
        <section className="d-flex border-primary justify-content-around align-items-center">
            <div className="hotels w-50">
                <p>252 stays Apr 13-17 3 guests</p>
                <h4 className="fw-bold">Stay in Cox’s Bazar</h4>
                <div className="d-flex hotel-info align-items-center mb-5">
                    <img src={hotelOne} alt="hotel_one" className="hotel-pic me-4" />
                    <div>
                        <h5 className="lh-base">Light bright airy stylish apt & safe
                            peaceful stay</h5>
                        <p className="txt-ash mb-2 word-spacing"> 4 guests 2 bedrooms 2 beds 2 baths</p>
                        <p className="txt-ash mb-2">Wif Air conditioning Kitchen</p>
                        <p className="txt-ash mb-2">Cancellation fexibility availiable</p>
                        <div className="d-flex align-items-center">
                            <img src={star} alt="rating" className="rating-icon me-2" />
                            <span className="fs-14 fw-500 me-4">4.9 (20)</span>
                            <span>$34/<span className="text-ash me-3">night</span></span>
                            <span className="fs-14 txt-light-ash">$167 total</span>
                        </div>
                    </div>
                </div>

                <div className="d-flex hotel-info  align-items-center mb-5">
                    <img src={hotelTwo} alt="hotel_two" className="hotel-pic me-4" />
                    <div>
                        <h5 className="lh-base">Apartment in Lost Panorama</h5>
                        <p className="txt-ash mb-2 word-spacing">4 guests 2 bedrooms 2 beds 2 baths</p>
                        <p className="txt-ash mb-2">Wif Air conditioning Kitchen</p>
                        <p className="txt-ash mb-2">Cancellation fexibility availiable</p>
                        <div className="d-flex align-items-center">
                            <img src={star} alt="rating" className="rating-icon me-2" />
                            <span className="fs-14 fw-500 me-4">4.8 (10)</span>
                            <span>$52/<span className="text-ash me-3">night</span></span>
                            <span className="fs-14 txt-light-ash">$167 total</span>
                        </div>
                    </div>
                </div>

                <div className="d-flex hotel-info align-items-center mb-5">
                    <img src={hotelThree} alt="hotel_three" className="hotel-pic me-4" />
                    <div>
                        <h5 className="lh-base">AR Lounge & Pool (r&r + b&b)</h5>
                        <p className="txt-ash mb-2 word-spacing">4 guests 2 bedrooms 2 beds 2 baths</p>
                        <p className="txt-ash mb-2">Wif Air conditioning Kitchen</p>
                        <p className="txt-ash mb-2">Cancellation fexibility availiable</p>
                        <div className="d-flex align-items-center">
                            <img src={star} alt="rating" className="rating-icon me-2" />
                            <span className="fs-14 fw-500 me-4">4.9 (25)</span>
                            <span>$44/<span className="text-ash me-3">night</span></span>
                            <span className="fs-14 txt-light-ash">$167 total</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="map ">
                <img src={googleMap} alt="google map of the destination" />
            </div>
        </section>
    );
};

export default Search;