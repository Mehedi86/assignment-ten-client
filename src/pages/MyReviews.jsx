import { Navigate, useLoaderData, useLocation } from "react-router-dom";
import ReviewCard from "../components/ReviewCard";
import { useState } from "react";


const MyReviews = () => {
    const loadedReview = useLoaderData();
    const [reviews, setReviews] = useState(loadedReview);
    const location = useLocation();

    if (location.pathname == "/myReviews/undefined") {
        return <Navigate to="/"></Navigate>
    }

    const deleteReview = (_id) => {
        fetch(`http://localhost:5000/updateReviews/${_id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                const remaining = reviews.filter(r => r._id !== _id);
                setReviews(remaining);
            })
    }

    return (
        <div>
            <h2 className="text-[#331A15] font-semibold text-4xl text-center my-8">My Reviews</h2>
            <div className="w-2/3 mx-auto grid grid-cols-2 gap-4">
                {reviews.map(singleReview => <ReviewCard
                    key={singleReview._id}
                    singleReview={singleReview}
                    setReviews={setReviews}
                    deleteReview={deleteReview} />)}
            </div>
        </div>
    );
};

export default MyReviews;