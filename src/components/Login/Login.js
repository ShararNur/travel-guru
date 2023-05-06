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
import FormInput from '../FormInput/FormInput';



const Login = () => {
    const [newUser, setNewUser] = useState('');
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);


    const [user, setUser] = useState({
        isSignedIn: false,
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
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

    // const handleBlur = (evt) => {
    //     let isFieldValid = true;
    //     if (evt.target.name === "email") {
    //         isFieldValid = /\S+@\S+\.\S+/.test(evt.target.value);
    //     }

    //     if (evt.target.name === "password") {
    //         const isPasswordValid = evt.target.value.length > 6;
    //         const passwordHasNumber = /\d{1}/.test(evt.target.value);
    //         isFieldValid = isPasswordValid && passwordHasNumber;
    //     }
    //     console.log(isFieldValid);
    //     if (isFieldValid) {
    //         const newUserInfo = { ...user };
    //         newUserInfo[evt.target.name] = evt.target.value;
    //         setUser(newUserInfo);
    //     }

    // }

    const handleSubmit = (evt) => {
        console.log("clicked");

        // console.log(user.email, user.password);
        if (newUser && user.email && user.password) {
            createUserWithEmailAndPass(user.firstName, user.lastName, user.email, user.password)
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
        setLoggedInUser(res);
        if (redirect) {
            navigate(from, { replace: true });
        }
    }

    return (
        <div className="login-module">
            <ToastContainer />
            <form onSubmit={handleSubmit} autoComplete="off">
                <div className="login-box">
                    {newUser ?
                        <>
                            <h4 className="fw-bold ms-1 mt-1">Create an account</h4>
                            {/* <div className="input-field">
                                <input type="text" className="form-control" id="firstName" placeholder="First Name" />
                            </div>
                            <div className="input-field">
                                <input type="text" className="form-control" placeholder="Last Name" id="exampleInputLastName" />
                            </div> */}
                            <FormInput type="text" id="firstName" name="firstName" placeholder="First Name" value={user.firstName} onChange={handleChange} errorMessage="First Name length must be 3 or higher!" pattern="^(?=(?:[^A-Za-z]*[A-Za-z]){3})(?![^\d~`?!^*¨ˆ;@=$%{}\[\]|\\\/<>#“.,]*[\d~`?!^*¨ˆ;@=$%{}\[\]|\\\/<>#“.,])\S+(?: \S+){0,2}$" />
                            <FormInput type="text" id="lastName" name="lastName" placeholder="Last Name" value={user.lastName} onChange={handleChange} errorMessage="Last Name length must be 3 or higher!" pattern="^(?=(?:[^A-Za-z]*[A-Za-z]){3})(?![^\d~`?!^*¨ˆ;@=$%{}\[\]|\\\/<>#“.,]*[\d~`?!^*¨ˆ;@=$%{}\[\]|\\\/<>#“.,])\S+(?: \S+){0,2}$" />
                        </>
                        : <h4 className="fw-bold ms-1">Login</h4>}

                    {/* <div className="input-field">
                        <input type="email" className="form-control" id="email" name="email" value={user.email} onChange={handleChange} placeholder="Username or Email" autoComplete="off" />
                    </div>
                    <div className="input-field">
                        <input type="password" className="form-control" name="password" value={user.password} onChange={handleChange} placeholder="Password" id="password" />
                    </div> */}
                    <FormInput type="email" id="email" name="email" placeholder="Username or Email" value={user.email} onChange={handleChange} errorMessage='It should be a valid email address!' />
                    <FormInput type="password" id="password" name="password" placeholder="Password" value={user.password} onChange={handleChange} errorMessage='Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!' pattern="^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@_#$%^&*])[a-zA-Z0-9!@_#$%^&*]{8,20}$" />
                    {
                        newUser &&

                        <FormInput type="password" id="confirmPassword" name="confirmPassword" placeholder="Confirm Password" value={user.confirmPassword} onChange={handleChange} errorMessage="Passwords don't match!" pattern={user.password} />

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