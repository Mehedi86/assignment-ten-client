import { useLoaderData } from "react-router-dom";
import ReviewCard from "../components/ReviewCard";
import { useState } from "react";


const AllReviews = () => {
    const loadedReview = useLoaderData();
    const [reviews, setReviews] = useState(loadedReview);
    console.log(reviews);


    const genres = ["Action", "Adventure", "RPG", "FPS", "Battle Royale", "Strategy", "Sports", "Racing", "Simulation", "Puzzle", "Fighting", "Survival"]


    const sortByRating = () => {
        const sortByRating = [...loadedReview].sort((a, b) => b.rating - a.rating);
        setReviews(sortByRating);
    }
    const sortByPublishYear = () => {
        const sortByRating = [...loadedReview].sort((a, b) => b.publishYear - a.publishYear);
        setReviews(sortByRating);
    }

    const filterByGenre = (genre) => {
        const reviewByGenre = [...loadedReview].filter(singleReview => singleReview.genre == genre);
        setReviews(reviewByGenre);
    }

    return (
        <div className="mb-10">
            <h2 className="text-[#331A15] font-semibold text-4xl text-center my-8">All Reviews</h2>
            <div className="flex justify-end mb-12 w-2/3 mx-auto">
                <details className="dropdown">
                    <summary className="btn m-1">{"Filter >>"}</summary>
                    <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        {genres.map((genre, id) => <li key={id}><button onClick={() => filterByGenre(genre)} className="cursor-pointer">{genre}</button></li>)}
                    </ul>
                </details>
                <details className="dropdown">
                    <summary className="btn m-1">{"Sort >>"}</summary>
                    <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li><button onClick={sortByRating} className="cursor-pointer">Sort by rating</button></li>
                        <li><button onClick={sortByPublishYear} className="cursor-pointer">Sort by year</button></li>
                    </ul>
                </details>
            </div>
            <div className="w-2/3 mx-auto grid grid-cols-2 gap-4">
                {reviews.map(singleReview => <ReviewCard
                    key={singleReview._id}
                    singleReview={singleReview} />)}
            </div>
        </div>
    );
};

export default AllReviews;