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
    const [active, setActive] = useState("");

    return (
        <div className="place-section d-md-flex pt-5">
            <div className="place-info">
                <div style={{ marginLeft: '135px' }} >
                    <h1 className="text-white font-link">COX'S BAZAR</h1>
                    <p className="text-white mb-4">Cox's Bazar is a city, fishing port, tourism centre and <br /> district headquarters in southeastern Bangladesh. It is <br />famous mostly for its long natural sandy beach and it...</p>
                    <button type="button" className="btn px-4">Booking<FontAwesomeIcon icon={faArrowRight} className="ms-2" /></button>
                </div>
            </div>

            <div className="place-pic ">
                {(() => {
                    if (active === "coxs bazar") {
                        return (
                            <Booking />
                        )
                    } else if (active === "sreemongol") {
                        return (
                            <Booking />
                        )
                    }
                    else if (active === "sundarbans") {
                        return (
                            <Booking />
                        )
                    } else {
                        return (
                            <>
                                <div className="row row-cols-1 row-cols-md-3 g-4 ">
                                    <div className="col">
                                        <Link to="#" className="card h-100" onClick={() => setActive("coxs bazar")}>
                                            <img src={sajek} className="card-img-top h-100 w-100" alt="..." />
                                            <div className="bottom-left font-link">COX'S BAZAR</div>
                                        </Link>
                                    </div>
                                    <div className="col">
                                        <div className=" card h-100" onClick={() => setActive("sreemongol")}>
                                            <img src={sreemongol} className="card-img-top h-100 w-100" alt="..." />
                                            <div className="bottom-left font-link">SREEMANGAL</div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="card h-100" onClick={() => setActive("sundarbans")}>
                                            <img src={sundorbon} className="card-img-top h-100 w-100" alt="..." />
                                            <div className="bottom-left font-link">SUNDARBANS</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-5 pt-4">
                                    <button className="rounded-circle me-2 scroller"><FontAwesomeIcon icon={faAngleLeft} /></button>
                                    <button className="rounded-circle scroller"><FontAwesomeIcon icon={faAngleRight} /></button>
                                </div>
                            </>
                        )
                    }
                })()}
            </div>
        </div>
    );
};

export default Destinations;