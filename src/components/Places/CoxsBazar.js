import React from 'react';

const CoxsBazar = () => {

    return (
        <div className="main">
            <div className="dark-overlay">
                <div className="place-section d-md-flex pt-5">
                    <div className="place-info">
                        <div style={{ marginLeft: '135px', maxWidth: '505px' }} >
                            <h1 className="text-white font-link">COX'S BAZAR</h1>
                            <p className="text-white mb-4">Cox’s Bazar is a town on the southeast coast of Bangladesh. It’s known for its very long, sandy beachfront, stretching from Sea Beach in the north to Kolatoli Beach in the south. Aggameda Khyang monastery is home to bronze statues and centuries-old Buddhist manuscripts. South of town, the tropical rainforest of Himchari National Park has waterfalls and many birds. North, sea turtles breed on nearby Sonadia Island.</p>
                        </div>
                    </div>

                    <div className="place-pic ">
                        <div className="d-flex justify-content-center">
                            <form className="booking-panel bg-white d-flex flex-column p-4 ">
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Origin</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Destination</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1" />
                                </div>
                                <div className="mb-3 d-flex justify-content-between">
                                    {/* <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label> */}
                                    <label htmlFor="fromDate" className="form-label">From</label>
                                    <div className="datePicker">
                                        <input type="date" className="form-control" id="fromDate" />
                                    </div>
                                    <div className="datePicker">
                                        <label htmlFor="toDate" className="form-label">To</label>
                                        <input type="date" className="form-control" id="toDate" />
                                    </div>
                                </div>
                                <button type="submit" className="btn ">Start Booking</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoxsBazar;