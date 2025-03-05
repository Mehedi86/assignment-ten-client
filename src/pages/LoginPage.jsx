import { useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const LoginPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    
    const { signInWithGoogle, setNavigateLocation, setLoadUserForList } = useContext(AuthContext);

    const googleSignInHandler = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result);
                setNavigateLocation(location?.state);
                setLoadUserForList(location?.state);
                navigate(location.state ? location.state : '/')
            })
            .catch(error => {
                console.log("Error", error.message)
            })
    }

    return (
        <div className="w-full min-h-[600px] flex justify-center items-center">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <h2 className="text-2xl font-semibold text-center">Login your account</h2>
                    <form className="fieldset">
                        <label className="fieldset-label text-lg">Email</label>
                        <input type="email" className="input" placeholder="Email" name="email" />
                        <label className="fieldset-label text-lg">Password</label>
                        <input type="password" className="input" placeholder="Password" name="password" />
                        <button className="btn btn-neutral my-2">Login</button>
                    </form>
                    <button onClick={googleSignInHandler} className="btn"><FaGoogle /> Login with google</button>
                    <p>Dont have an account? <span onClick={() => navigate("/register")} className="text-red-400 cursor-pointer">Login</span></p>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;