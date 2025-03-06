import { Link, Navigate, useLoaderData, useLocation } from "react-router-dom";
// import ReviewCard from '../components/ReviewCard';
import { MdModeEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { useState } from "react";
import Swal from "sweetalert2";



const MyReviews = () => {
    const loadedReview = useLoaderData();
    const [reviews, setReviews] = useState(loadedReview);
    const location = useLocation();

    if (location.pathname == "/myReviews/undefined") {
        return <Navigate to="/"></Navigate>
    }

    const deleteReview = (_id) => {
        fetch(`https://assignment-10-server-side-neon.vercel.app/updateReviews/${_id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                const remaining = reviews.filter(r => r._id !== _id);
                setReviews(remaining);
                Swal.fire({
                    title: "Deleted",
                    icon: "success",
                    draggable: true
                  });
            })
    }

    return (
        <div className="container mx-auto">
            <h2 className="text-[#331A15] font-semibold text-2xl md:text-4xl text-center my-8">My Reviews</h2>
            <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
                <table className="table text-center">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Name</th>
                            <th>Genre</th>
                            <th>Publish Year</th>
                            <th>Rating</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {reviews.map((single, index) => <tr className="text-cener" key={single._id}>
                            <th>{index + 1}</th>
                            <th>{single.title}</th>
                            <th>{single.genre}</th>
                            <th>{single.publishYear}</th>
                            <th>{single.rating}</th>
                            <th>
                                {location.pathname == "/allReviews" ? <Link to={`/reviewDetails/${single._id}`} className="btn bg-[#D2B48C] text-white"><LuSquareMenu size={20} />Explore Details</Link> : <div className="flex flex-col justify-end">
                                    <Link to={`/updateReview/${single._id}`} className="btn bg-[#3C393B] text-white"><MdModeEdit size={20} /></Link>
                                    <button onClick={() => deleteReview(single._id)} className="btn bg-[#EA4744] text-white"><MdDelete size={20} /></button>
                                </div>}
                            </th>
                        </tr>)}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyReviews;