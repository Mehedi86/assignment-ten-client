import { useLoaderData } from "react-router-dom";
import ReviewCard from "../components/ReviewCard";


const MyReviews = () => {
    const loadedReview = useLoaderData();
    console.log(loadedReview)
    return (
        <div>
            <h2 className="text-[#331A15] font-semibold text-4xl text-center my-8">My Reviews</h2>
            <div className="w-2/3 mx-auto grid grid-cols-2 gap-4">
                {loadedReview.map(singleReview => <ReviewCard
                    key={singleReview._id}
                    singleReview={singleReview} />)}
            </div>
        </div>
    );
};

export default MyReviews;