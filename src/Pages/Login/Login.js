import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import useTitle from '../../Hooks/useTitle';


const Login = () => {
    const { login, loading } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    useTitle('Login')
    const from = location.state?.from.pathname || '/';

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        if (loading) {
            return <div className="radial-progress" style={{ "--value": 70 }}></div>
        }
        else {
            login(email, password)
                .then(result => {
                    const user = result.user;
                    const currentUser = {
                        email: user.email
                    }

                    // jwt token
                    fetch('http://localhost:5000/jwt', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(currentUser)
                    })
                        .then(res => res.json())
                        .then(data => {
                            localStorage.setItem('sage-token', data.token);
                            navigate(from, { replace: true });
                        })
                })
                .then(error => console.error(error));
        }
    };

    return (
        <div className='m-12'>
            <div className="hero w-full">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="card flex-shrink-0  w-full max-w-sm shadow-2xl bg-base-100 py-8 px-6">
                        <h1 className="text-5xl text-center font-bold">Login!</h1>
                        <form onSubmit={handleLogin} className="card-body ">
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
                                <input name='password' type="password" placeholder="password" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Login" />
                            </div>
                            <p>Have an account? <Link className='text-violet-600 font-bold' to='/signup'>Sign up</Link></p>
                        </form>
                    </div>
                </div>
            </div >
        </div>

    );
};

export default Login;