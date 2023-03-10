import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import useTitle from '../../Hooks/useTitle';

const SignUp = () => {
    const { createUser, loading } = useContext(AuthContext);
    useTitle('Signup')

    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        if (loading) {
            return <div className="radial-progress" style={{ "--value": 70 }}></div>
        }
        else {
            createUser(email, password)
                .then(result => {
                    const user = result.user;
                    console.log(user);
                    form.reset();
                })
                .catch(error => console.error(error));
        }

    };

    return (
        <div className="hero lg:w-full">
            <div className="hero-content flex-col lg:flex-row">
                <div className="card flex-shrink-0  lg:w-full lg:max-w-sm shadow-2xl bg-base-100 lg:py-8 lg:px-6">
                    <h1 className="text-5xl text-center font-bold text-violet-700">Sign up!</h1>
                    <form onSubmit={handleSignUp} className="card-body ">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input name='name' type="text" placeholder="Your Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name='email' type="text" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control"></div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Sign Up" />
                        </div>
                        <p>Already have an account? <Link className='text-violet-600 font-bold' to='/login'>Login</Link></p>
                    </form>
                </div>
            </div>
        </div >
    );
};

export default SignUp;