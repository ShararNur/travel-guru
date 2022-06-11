import React from 'react';
import './Login.css';
import { FaFacebook } from "react-icons/fa";

const Login = () => {
    return (
        <div className="login-module">
            <form action="#">
                <div className="login-box">
                    <h4 className="fw-bold">Login</h4>
                    <div className="txtb">
                        <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Username or Email" />
                    </div>
                    <div className="txtb">
                        <input type="password" className="form-control" placeholder="Password" id="exampleInputPassword1" />
                    </div>
                    <div className="form-check mb-5 d-flex justify-content-between">
                        <div>
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                            <label className="form-check-label">Remember Me</label>
                        </div>
                        <div className="forgot-pass">
                            <a className="lnk-toggler text-right pull-right" href="#">Forgot password</a>
                        </div>
                    </div>
                    <input type="submit" value="Login" className="login-btn" />

                    <div className="text-center mt-3 fs-13">
                        Don't have account? <a href="#">Create an account</a>
                    </div>
                </div>
            </form>

            <p className="or my-4" ><span className="or-span">Or</span></p>

            <div className="d-grid gap-2 col-4 mx-auto">
                <div className="btn-fb rounded-pill py-2">
                    <FaFacebook className="text-start ab" />
                    <span className=""> Continue with Facebook</span>
                </div>
                <div className="" type="button">Continue with Google</div>
            </div>
        </div>
    );
};

export default Login;