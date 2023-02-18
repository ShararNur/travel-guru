import React from 'react';
import { useLocation } from 'react-router-dom';
import './Booking.css';



const Booking = () => {

    const { state } = useLocation();

    const renderPlaceInfo = () => {
        if (state?.from === "Cox's Bazar") {
            return (

                "Cox’s Bazar is a town on the southeast coast of Bangladesh. It’s known for its very long, sandy beachfront, stretching from Sea Beach in the north to Kolatoli Beach in the south. Aggameda Khyang monastery is home to bronze statues and centuries-old Buddhist manuscripts. South of town, the tropical rainforest of Himchari National Park has waterfalls and many birds. North, sea turtles breed on nearby Sonadia Island. "

            )
        }
        else if (state?.from === "Sreemangal") {
            return (
                "Sreemangal is an upazila of Moulvibazar District in the Sylhet Division of Bangladesh.It is located at the southwest of the district, and borders the Habiganj District to the west and the Indian state of Tripura to the south."
            )
        }
        else if (state?.from === "Sundarbans") {
            return (
                "Sundarbans is a mangrove area in the delta formed by the confluence of the Padma, Brahmaputra and Meghna Rivers in the Bay of Bengal. Sundarban Reserve Forest of Bangladesh is the largest mangrove forest in the world"

            )
        }
    }

    const onSubmit = (e) => {
        e.preventDefault();

    }


    return (
        <div className="main">
            <div className="dark-overlay">
                <div className="booking d-md-flex pt-5">
                    <div className="place-info">
                        <div style={{ maxWidth: '505px' }} >
                            <h1 className="text-white font-link text-uppercase">{state?.from}</h1>
                            <p className="text-white mb-4">{renderPlaceInfo()}</p>
                        </div>
                    </div>

                    <div className="d-flex justify-content-center">
                        <form className="booking-panel bg-white d-flex flex-column p-4 ">
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Origin</label>
                                <input type="email" className="form-control fw-bold" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Destination</label>
                                <input type="text" className="form-control fw-bold" id="exampleInputPassword1" value={state?.from} autoComplete="off" />
                            </div>
                            <div className="mb-3 d-flex justify-content-between">
                                {/* <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label> */}
                                <div className="datePicker">
                                    <label htmlFor="fromDate" className="form-label">From</label>
                                    <input type="date" className="form-control fw-bold" id="fromDate" />
                                </div>
                                <div className="datePicker">
                                    <label htmlFor="toDate" className="form-label">To</label>
                                    <input type="date" className="form-control fw-bold" id="toDate" />
                                </div>
                            </div>
                            <button type="submit" className="btn" onClick={() => onSubmit()}>Start Booking</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Booking;