import React from 'react';
import './Destinations.css';
import sajek from '../../resources/Image/Sajek.png';
import sreemongol from '../../resources/Image/Sreemongol.png'
import sundorbon from '../../resources/Image/sundorbon.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import Booking from '../Booking/Booking';
import { Link } from 'react-router-dom';
import CoxsBazar from '../Places/CoxsBazar';


const Destinations = () => {
    return (
        <div className="place-section d-md-flex justify-content-center flex-wrap ">
            <div className="place-info">
                <div style={{ marginLeft: '121px' }} >
                    <h1 className="text-white font-link">COX'S BAZAR</h1>
                    <p className="text-white mb-4">Cox's Bazar is a city, fishing port, tourism centre and <br /> district headquarters in southeastern Bangladesh. It is <br />famous mostly for its long natural sandy beach and it...</p>
                    {/* <button type="button" className="btn px-4">Booking<FontAwesomeIcon icon={faArrowRight} className="ms-2" /></button> */}
                    <Link to="/booking" state={{ from: "Cox's Bazar" }} className="booking-btn">Booking<FontAwesomeIcon icon={faArrowRight} className="ms-2 " /></Link>
                </div>
            </div>

            <div className="place-pic ">
                <div className="row row-cols-1 row-cols-md-3 g-4 me-0">
                    <div className="col">
                        <Link to="/booking" state={{ from: "Cox's Bazar" }} className="card h-100">
                            <img src={sajek} className="card-img-top h-100 w-100" alt="..." />
                            <div className="bottom-left font-link">COX'S BAZAR</div>
                        </Link>
                    </div>
                    <div className="col">
                        <Link to="/booking" state={{ from: "Sreemangal" }} className=" card h-100">
                            <img src={sreemongol} className="card-img-top h-100 w-100" alt="..." />
                            <div className="bottom-left font-link">SREEMANGAL</div>
                        </Link>
                    </div>
                    <div className="col">
                        <Link to="/booking" state={{ from: "Sundarbans" }} className="card h-100">
                            <img src={sundorbon} className="card-img-top h-100 w-100" alt="..." />
                            <div className="bottom-left font-link">SUNDARBANS</div>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="mt-5 pt-4 ">
                <button className="rounded-circle me-2 scroller"><FontAwesomeIcon icon={faAngleLeft} /></button>
                <button className="rounded-circle scroller"><FontAwesomeIcon icon={faAngleRight} /></button>
            </div>
        </div>
    );
};

export default Destinations;