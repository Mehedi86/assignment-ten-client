import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import Swal from 'sweetalert2';

const RegisterPage = () => {
    const navigate = useNavigate();
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const [errorMsg, setErrorMsg] = useState(null);
    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photoUrl = form.url.value;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(name, photoUrl, email, password)

        const passwordValidationRegex = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;

        if (!passwordValidationRegex.test(password)) {
            setErrorMsg('Please, Check your password. You need to add Minimum 6 characters, a Uppercase and a lowercase');
            return;
        }
        setErrorMsg(null);

        createUser(email, password)
            .then((result) => {
                console.log(result)
                updateUserProfile({ displayName: name, photoURL: photoUrl })
                    .then(() => {
                        // update successful
                        Swal.fire({
                            title: "Registration Successful!",
                            icon: "success",
                            draggable: true
                          });
                    })
                    .catch(error => {
                        console.log("Error", error.message)
                    })
                navigate("/");
            })
            .catch(error => {
                console.log(error.message)
            })
    }
    return (
        <div className="w-full min-h-[600px] flex justify-center items-center">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <h2 className="text-2xl font-semibold text-center">Register your account</h2>
                    <form onSubmit={handleRegister} className="fieldset">
                        <label className="fieldset-label text-lg">Name</label>
                        <input type="text" className="input" placeholder="Name" name="name" />
                        <label className="fieldset-label text-lg">Photo URL</label>
                        <input type="text" className="input" placeholder="Photo URL" name="url" />
                        <label className="fieldset-label text-lg">Email</label>
                        <input type="email" className="input" placeholder="Email" name="email" />
                        <label className="fieldset-label text-lg">Password</label>
                        <input type="password" className="input" placeholder="Password" name="password" />
                        {errorMsg && <p className='mt-2 text-red-400'>{errorMsg}</p>}
                        <button className="btn btn-neutral mt-4">Register</button>
                    </form>
                    <p>Already have an account? <span onClick={() => navigate("/login")} className="text-red-400 cursor-pointer">Login</span></p>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;