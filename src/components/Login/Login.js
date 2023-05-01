import React, { useContext } from 'react';
import './Login.css';
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useLocation, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPass, initializeLoginFramework, signInWithEmailAndPass } from './loginManager';
import { UserContext } from '../../App';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Login = () => {
    const [newUser, setNewUser] = useState('');
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);


    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        password: '',
        photo: '',
    })

    const navigate = useNavigate();
    let location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
    // console.log(location);

    // console.log(location);


    initializeLoginFramework();

    const handleChange = (evt) => {
        const value = evt.target.value;
        setUser({ ...user, [evt.target.name]: value })
        // console.log(user);
    }

    const handleSubmit = (evt) => {

        // console.log(user.email, user.password);
        if (newUser && user.email && user.password) {
            createUserWithEmailAndPass(user.name, user.email, user.password)
                .then(res => {
                    console.log(res);
                    toast.success("Signed up successfully!")
                    handleResponse(res, true);
                })
        }

        if (!newUser && user.email && user.password) {
            signInWithEmailAndPass(user.email, user.password)
                .then(res => {
                    console.log(res);

                    if (res?.error) {
                        toast.error(res.error)
                        return;
                    }

                    // navigate("/search");


                    // setUser(res);
                    // setLoggedInUser(res);
                    // navigate(from, { replace: true });
                    handleResponse(res, true);
                })
        }
        evt.preventDefault();
    }


    const handleResponse = (res, redirect) => {
        setUser(res);
        console.log(user);
        setLoggedInUser(res);
        if (redirect) {
            navigate(from, { replace: true });
        }
    }

    return (
        <div className="login-module">
            <ToastContainer />
            <form onSubmit={handleSubmit}>
                <div className="login-box">
                    {newUser ?
                        <>
                            <h4 className="fw-bold">Create an account</h4>
                            <div className="input-field">
                                <input type="text" className="form-control" id="firstName" placeholder="First Name" />
                            </div>
                            <div className="input-field">
                                <input type="text" className="form-control" placeholder="Last Name" id="exampleInputLastName" />
                            </div>
                        </>
                        : <h4 className="fw-bold">Login</h4>}

                    <div className="input-field">
                        <input type="email" className="form-control" id="email" name="email" value={user.email} onChange={handleChange} placeholder="Username or Email" />
                    </div>
                    <div className="input-field">
                        <input type="password" className="form-control" name="password" value={user.password} onChange={handleChange} placeholder="Password" id="password" />
                    </div>
                    {
                        newUser &&
                        <div className="input-field">
                            <input type="password" className="form-control" placeholder="Confirm Password" id="exampleInputConfirmPassword" />
                        </div>

                    }
                    {newUser ? ''
                        :
                        <div className="form-check mb-5 d-flex justify-content-between">
                            <div>
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label">Remember Me</label>
                            </div>
                            <div className="forgot-pass">
                                <a className="lnk-toggler text-right pull-right" href="#">Forgot password</a>
                            </div>
                        </div>

                    }
                    <input type="submit" value={newUser ? "Create an account" : "Login"} className="login-btn" />

                    <div className="text-center mt-3 fs-13">
                        {newUser ? <p className="m-0">Already have an account? <a href="#" onClick={() => setNewUser(false)}>Login</a></p>
                            : <p className="m-0">Don't have an account? <a href="#" onClick={() => setNewUser(true)}>Create an account</a></p>}
                    </div>
                </div>
            </form>

            <p className="or my-4" ><span className="or-span">Or</span></p>

            <div className="d-grid gap-2 col-4 mx-auto">
                <div className="buttons rounded-pill py-2">
                    <FaFacebook className="fb-icon ms-2" fill="#3076FF" />
                    <span className="ms-6"> Continue with Facebook</span>
                </div>
                <div className="buttons rounded-pill py-2">
                    <FcGoogle className="fb-icon ms-2" />
                    <span className="ms-6"> Continue with Google</span>
                </div>
            </div>
        </div>
    );
};

export default Login;