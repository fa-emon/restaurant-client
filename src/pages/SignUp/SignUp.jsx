import { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';
import SocialLogin from '../shared/socialLogin/SocialLogin';

const SignUp = () => {
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const { register, handleSubmit, reset, formState: { errors }, } = useForm();

    const navigate = useNavigate();

    return (
        <>
            <Helmet>
                <title>restaurant/signup</title>
            </Helmet>

            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Sign Up now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                        <form className="card-body" onSubmit={handleSubmit((data) => {
                            createUser(data.email, data.password)
                                .then((result) => {
                                    const loggedUser = result.user;
                                    console.log(loggedUser);
                                    reset();

                                    updateUserProfile(data.name, data.photoURL)
                                        .then(() => {
                                            const storeInDB = { name: data.name, email: data.email };
                                            fetch("http://localhost:5000/users", {
                                                method: "POST",
                                                body: JSON.stringify(storeInDB),
                                                headers: {
                                                    "Content-type": "application/json"
                                                }
                                            })
                                                .then((response) => response.json())
                                                .then((data) => {
                                                    if (data.insertedId) {
                                                        Swal.fire({
                                                            title: 'User updated successfully.',
                                                            showClass: {
                                                                popup: 'animate__animated animate__fadeInDown'
                                                            },
                                                            hideClass: {
                                                                popup: 'animate__animated animate__fadeOutUp'
                                                            }
                                                        })
                                                        navigate('/')
                                                    }
                                                });

                                        })
                                        .catch((error) => {
                                            console.error('error', error)
                                        })
                                })
                                .catch((error) => {
                                    console.error('error', error)
                                })
                        })}>
                            {/* {Name field} */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text"
                                    {...register('name')}
                                    placeholder="name" name="name" className="input input-bordered" />
                            </div>

                            {/* {photo URL field} */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text"
                                    {...register('photoURL', { required: true })}
                                    placeholder="photo URL" className="input input-bordered" />
                                {errors.photoURL && <p className='text-red-500'>photo URL is required.</p>}
                            </div>

                            {/* {email field} */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email"
                                    {...register('email', { required: true })}
                                    placeholder="email" name="email" className="input input-bordered" />
                                {errors.email && <p className='text-red-500'>email is required.</p>}
                            </div>

                            {/* {password field} */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password"
                                    {...register('password', {
                                        required: true,
                                        minLength: 6,
                                        maxLength: 20,
                                        pattern: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
                                    })}
                                    name="password"
                                    placeholder="password" className="input input-bordered" />
                                {errors.password?.type === "required" && (
                                    <p className='text-red-500'>Password is required.</p>
                                )}
                                {errors.password?.type === "minLength" && (
                                    <p className='text-red-500'>password must be atleast 6 character.</p>
                                )}
                                {errors.password?.type === "pattern" && (
                                    <p className='text-red-500'>password must have one uppercase letter, one smallercase letter, one digit and one special symbol.</p>
                                )}
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" className="btn btn-primary" value="SIGN UP" />
                            </div>
                            <p className='text-[#D1A054] font-medium text-xl text-center'><small>Already have an account? <Link to={'/login'}>SIGN IN</Link></small></p>
                            <div>
                                <p className='text-[#444] font-medium font-xl text-center'>Or sign up with </p>
                                <SocialLogin></SocialLogin>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;