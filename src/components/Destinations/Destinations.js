import React from 'react';
import './Destinations.css';
import sajek from '../../resources/Image/Sajek.png';
import sreemongol from '../../resources/Image/Sreemongol.png'
import sundorbon from '../../resources/Image/sundorbon.png';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'react-bootstrap';


const Destinations = () => {
    return (
        <div className="place-section d-md-flex pt-5">
            <div className="place-info">
                <div style={{ marginLeft: '180px' }}>
                    <h1 className="text-white fw-bolder font-link">COX'S BAZAR</h1>
                    <p className="text-white fw-light mb-4">Cox's Bazar is a city, fishing port, tourism centre and <br /> district headquarters in southeastern Bangladesh. It is <br />famous mostly for its long natural sandy beach and it...</p>
                    <button type="button" className="btn btn-warning px-4 btn-font">Booking<FontAwesomeIcon icon={faArrowRight} className="ms-2" /></button>
                </div>
            </div>

            <div className="place-pic">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    <div className="col">
                        <div className="card h-100 border-0 rounded-pill">
                            <img src={sajek} className="card-img-top" alt="..." />
                            <div className="bottom-left font-link">COX'S BAZAR</div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 border-0 rounded-pill">
                            <img src={sreemongol} className="card-img-top" alt="..." />
                            <div className="bottom-left font-link">SREEMANGAL</div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 border-0 rounded-pill">
                            <img src={sundorbon} className="card-img-top" alt="..." />
                            <div className="bottom-left font-link">SUNDARBANS</div>
                        </div>
                    </div>
                </div>
                <div className="mt-5 pt-4">
                    <button className="rounded-circle me-2 scroller "><FontAwesomeIcon icon={faAngleLeft} className="m-2" /></button>
                    <button className="rounded-circle scroller"><FontAwesomeIcon icon={faAngleRight} className="m-2" /></button>
                </div>
            </div>
        </div>
    );
};

export default Destinations;