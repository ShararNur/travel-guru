import React from 'react';
import { createSearchParams, useLocation, useNavigate, useParams } from 'react-router-dom';
import './Booking.css';
import { useForm } from "react-hook-form";
import { Col, Container, Row } from 'react-bootstrap';




const Booking = () => {


    const { place } = useParams();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const renderPlaceInfo = () => {
        if (place === "Cox's Bazar") {
            return (
                "Cox’s Bazar is a town on the southeast coast of Bangladesh. It’s known for its very long, sandy beachfront, stretching from Sea Beach in the north to Kolatoli Beach in the south. Aggameda Khyang monastery is home to bronze statues and centuries-old Buddhist manuscripts. South of town, the tropical rainforest of Himchari National Park has waterfalls and many birds. North, sea turtles breed on nearby Sonadia Island. "
            )
        }
        else if (place === "Sreemangal") {
            return (
                "Sreemangal is an upazila of Moulvibazar District in the Sylhet Division of Bangladesh.It is located at the southwest of the district, and borders the Habiganj District to the west and the Indian state of Tripura to the south."
            )
        }
        else if (place === "Sundarbans") {
            return (
                "Sundarbans is a mangrove area in the delta formed by the confluence of the Padma, Brahmaputra and Meghna Rivers in the Bay of Bengal. Sundarban Reserve Forest of Bangladesh is the largest mangrove forest in the world"

            )
        }
    }

    const onSubmit = (data) => {

        if (data !== undefined) {
            navigate(`/search/${place}`);
        };

    }


    return (
        <Container className='custom-margin'>
            <Row>
                <Col sm={6} xl={6}>
                    <div className="place-info mt-3">
                        <h1 className="font-weight-bold">{place}</h1>
                        <p className="text-white mb-4">{renderPlaceInfo()}</p>
                    </div>
                </Col>
                <Col xl={1}></Col>
                <Col sm={6} xl={5}>
                    <div className="d-flex justify-content-end">
                        <form className="booking-panel bg-white d-flex flex-column p-4">
                            <div className="mb-3">
                                <label htmlFor="origin" className="form-label">Origin</label>
                                <input type="text" {...register("origin", { required: true })} className="form-control fw-bold" id="origin" />
                                {errors.origin && <span>This field is required</span>}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="destination" className="form-label">Destination</label>
                                <input type="text" {...register("destination", { required: true })} className="form-control fw-bold" id="destination" value={place} autoComplete="off" />
                            </div>
                            <div className="mb-3 d-flex justify-content-between">
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
                </Col>

            </Row>
        </Container>
    );
};

export default Booking;