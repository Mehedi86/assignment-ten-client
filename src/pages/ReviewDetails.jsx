import { useContext } from "react";
import { Navigate, useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const ReviewDetails = () => {

    const reviewDetails = useLoaderData();
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const { _id, cover_url, title, description, username, rating, publishYear, genre } = reviewDetails;

    const addToWatchListHandler = () => {
        const email = user?.email;
        const InfoForWatchlist = { email, title, rating, publishYear, genre }
        fetch('http://localhost:5000/myWatchlist', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(InfoForWatchlist)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }

    return (
        <div>
            <div className="min-h-[360px] bg-[#D2B48C] pt-8 ">
                <h2 className="text-4xl mb-12 font-semibold text-center">Review Details</h2>
            </div>
            <div className="container mx-auto rounded-xl p-4 -mt-48 mb-12 flex gap-4 bg-stone-50">
                <div className="w-1/3 p-4">
                    <img className="w-full rounded-xl h-[400px] p-2" src={cover_url} alt="" />
                </div>
                <div className="w-2/3 p-4">
                    <h1 className="text-2xl font-bold">Review Title: {title}</h1>
                    <p className="text-xl font-semibold py-2">Genre: {genre}</p>
                    <p className="text-xl font-semibold py-2 text-neutral-400">Published: {publishYear}</p>
                    <h2 className="text-xl font-bold">Rating: {rating}</h2>
                    <h2 className="text-2xl my-2 text-orange-200 font-semibold">Author: {username}</h2>
                    <p className="font-semibold text-gray-400">Description: {description}</p>
                    <button className="btn bg-[#D2B48C] text-lg font-bold my-6" onClick={user ? addToWatchListHandler : ()=> navigate("/login")}>Add to WatchList</button>
                </div>
            </div>
        </div>
    );
};

export default ReviewDetails;