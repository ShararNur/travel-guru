import React from 'react';
import './Login.css';
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useState } from 'react';
import { initializeApp } from 'firebase/app';


const Login = () => {
    const [newUser, setNewUser] = useState(false);
    const firebaseConfig = {

        apiKey: "AIzaSyCPKpGjjXA8Jo3DS3K11JGp1Sf2OXgGNkM",
        authDomain: "travel-guru-6feb4.firebaseapp.com",
        projectId: "travel-guru-6feb4",
        storageBucket: "travel-guru-6feb4.appspot.com",
        messagingSenderId: "334205359796",
        appId: "1:334205359796:web:12a8ff2c864b46eb5029e1"
        //...
    };
    const app = initializeApp(firebaseConfig);

    return (
        <div className="login-module">
            <form action="#">
                <div className="login-box">
                    {newUser ? <h4 className="fw-bold">Create an account</h4> : <h4 className="fw-bold">Login</h4>}
                    {newUser &&
                        <>
                            <div className="input-field">
                                <input type="text" className="form-control" id="exampleInputFirstName" placeholder="First Name" />
                            </div>
                            <div className="input-field">
                                <input type="text" className="form-control" placeholder="Last Name" id="exampleInputLastName" />
                            </div>
                        </>
                    }
                    <div className="input-field">
                        <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Username or Email" />
                    </div>
                    <div className="input-field">
                        <input type="password" className="form-control" placeholder="Password" id="exampleInputPassword" />
                    </div>
                    {
                        newUser &&
                        <div className="input-field">
                            <input type="password" className="form-control" placeholder="Confirm Password" id="exampleInputConfirmPassword" />
                        </div>

                    }
                    {newUser === false ?
                        <div className="form-check mb-5 d-flex justify-content-between">
                            <div>
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label">Remember Me</label>
                            </div>
                            <div className="forgot-pass">
                                <a className="lnk-toggler text-right pull-right" href="#">Forgot password</a>
                            </div>
                        </div>
                        : ""
                    }
                    <input type="submit" value={newUser ? "Create an account" : "Login"} className="login-btn" />

                    <div className="text-center mt-3 fs-13">
                        {newUser ? <p className="m-0">Already have an account? <a href="#" onClick={() => setNewUser(false)}>Login</a></p>
                            : <p className="m-0">Don't have an account? <a href="#" onClick={() => setNewUser(true)}>Create an account</a></p>}
                    </div>
                </div >
            </form >

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
        </div >
    );
};

export default Login;