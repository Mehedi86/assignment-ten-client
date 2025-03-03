import React from 'react';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
    const navigate = useNavigate();
    return (
        <div className="w-full min-h-[600px] flex justify-center items-center">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <h2 className="text-2xl font-semibold text-center">Register your account</h2>
                    <form className="fieldset">
                        <label className="fieldset-label text-lg">Name</label>
                        <input type="text" className="input" placeholder="Name" name="name" />
                        <label className="fieldset-label text-lg">Photo URL</label>
                        <input type="text" className="input" placeholder="Photo URL" name="url" />
                        <label className="fieldset-label text-lg">Email</label>
                        <input type="email" className="input" placeholder="Email" name="email" />
                        <label className="fieldset-label text-lg">Password</label>
                        {/* {passwordError && <p className="text-red-600">{passwordError}</p>} */}
                        <button className="btn btn-neutral mt-4">Register</button>
                    </form>
                    <button className="btn"> Login with google</button>
                    <p>Already have an account? <span onClick={() => navigate("/login")} className="text-red-400 cursor-pointer">Login</span></p>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;