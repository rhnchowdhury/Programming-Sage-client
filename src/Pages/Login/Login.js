import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {

    const handleLogin = event => {
        event.preventDefault()
    };

    return (

        <div className="hero w-full">
            <div className="hero-content flex-col lg:flex-row">
                <div className="card flex-shrink-0  w-full max-w-sm shadow-2xl bg-base-100">
                    <h1 className="text-5xl text-center font-bold">Login!</h1>
                    <form onClick={handleLogin} className="card-body ">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name='email' type="text" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name='password' type="text" placeholder="password" className="input input-bordered" />
                            {/* <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>

                            </label> */}
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Login" />
                        </div>
                        <p>Have an account? <Link>Sign up</Link></p>
                    </form>
                </div>
            </div>
        </div >

    );
};

export default Login;