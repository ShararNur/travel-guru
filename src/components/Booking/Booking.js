import React from 'react';
import { createSearchParams, useLocation, useNavigate, useParams } from 'react-router-dom';
import './Booking.css';
import { useForm } from "react-hook-form";




const Booking = () => {


    const { state } = useLocation();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    console.log(state);


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

    const onSubmit = (data) => {

        if (data !== undefined) {
            navigate(`/search/${state?.from}`);
        };

    }


    return (
        <div className="booking d-md-flex">
            <div className="place-info">
                <div style={{ maxWidth: '505px' }} >
                    <h1 className="text-white font-link text-uppercase">{state?.from}</h1>
                    <p className="text-white mb-4">{renderPlaceInfo()}</p>
                </div>
            </div>

            <div className="d-flex justify-content-center">
                <form className="booking-panel bg-white d-flex flex-column p-4">
                    <div className="mb-3">
                        <label htmlFor="origin" className="form-label">Origin</label>
                        <input type="text" {...register("origin", { required: true })} className="form-control fw-bold" id="origin" aria-describedby="origin" />
                        {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
                        {errors.origin && <span>This field is required</span>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="destination" className="form-label">Destination</label>
                        <input type="text" {...register("destination", { required: true })} className="form-control fw-bold" id="destination" value={state?.from} autoComplete="off" />
                    </div>
                    <div className="mb-3 d-flex justify-content-between">
                        {/* <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label> */}
                        <div className="datePicker">
                            <label htmlFor="fromDate" className="form-label">From</label>
                            <input type="date" {...register("fromDate", { required: true })} className="form-control fw-bold" id="fromDate" />
                            {errors.fromDate && <span>This field is required</span>}
                        </div>
                        <div className="datePicker">
                            <label htmlFor="toDate" className="form-label">To</label>
                            <input type="date" {...register("toDate", { required: true })} className="form-control fw-bold" id="toDate" />
                            {errors.toDate && <span>This field is required</span>}
                        </div>
                    </div>
                    <button type="submit" className="btn" onClick={handleSubmit(onSubmit)}>Start Booking</button>
                </form>
            </div>
        </div>
    );
};

export default Booking;