import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UpdateReview = () => {
    const loadedReview = useLoaderData();
    const { cover_url, description, email, genre, publishYear, rating, title, username, _id } = loadedReview;
    const handleUpdateReview = e => {
        e.preventDefault();
        const form = e.target;
        const cover_url = form.cover.value;
        const title = form.title.value;
        const description = form.description.value;
        const username = form.username.value;
        const rating = form.rating.value;
        const publishYear = form.publish.value;
        const genre = form.genre.value;
        const email = form.email.value;

        const updatedReview = { cover_url, title, description, username, rating, publishYear, genre, email }

        fetch(`http://localhost:5000/updateReviews/${_id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updatedReview)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }
    return (
        <div className="bg-[url(/11.png)] min-h-screen pt-24 bg-no-repeat">
            <div className="bg-[#F4F3F0] md:w-2/3 mx-auto px-8 py-4">
                <div className="md:w-1/2 mx-auto my-12 space-y-6 text-center">
                    <h2 className="text-4xl">Add Review</h2>
                    <p>Reviewing game will enhanced your game reviewing skills and your reviews are useful for another gamers who do will to play this game.</p>
                </div>
                <form onSubmit={handleUpdateReview}>
                    <div className="md:flex gap-4">
                        <div className="md:w-1/2 space-y-4">
                            <div>
                                <label>Game Title/Name</label>
                                <input type="text" placeholder="Game Title/Name" className="input w-full" name="title" defaultValue={title} />
                            </div>
                            <div>
                                <label>Cover Image</label>
                                <input type="text" placeholder="Cover Image" className="input w-full" name="cover" defaultValue={cover_url} />
                            </div>
                            <div>
                                <label>Review Description</label>
                                <input type="text" placeholder="Review Description" className="input w-full" name="description" defaultValue={description} />
                            </div>
                            <div>
                                <label>User Name</label>
                                <input type="text" placeholder="User Name" className="input w-full" name="username" value={username} readOnly />
                            </div>
                        </div>
                        <div className="md:w-1/2 space-y-4">
                            <div>
                                <label>Rating</label>
                                <input type="text" placeholder="Rating" className="input w-full" name="rating" defaultValue={rating} />
                            </div>
                            <div>
                                <label>Publishing year</label>
                                <input type="text" placeholder="Publishing year" className="input w-full" name="publish" defaultValue={publishYear} />
                            </div>
                            <div className="flex flex-col">
                                <label>Genres:</label>
                                <select className="p-2 bg-white rounded border border-gray-300" name="genre" defaultValue={genre}>
                                    <option>Action</option>
                                    <option>Adventure</option>
                                    <option>RPG</option>
                                    <option>FPS</option>
                                    <option>Battle Royale</option>
                                    <option>Strategy</option>
                                    <option>Sports</option>
                                    <option>Racing</option>
                                    <option>Simulation</option>
                                    <option>Puzzle</option>
                                    <option>Fighting</option>
                                    <option>Survival</option>
                                </select>
                            </div>
                            <div>
                                <label>User Email</label>
                                <input type="text" placeholder="User Email" className="input w-full" name="email" value={email} readOnly />
                            </div>
                        </div>
                    </div>
                    <button className="btn btn-block bg-neutral-600 my-6 text-white">Update Review</button>
                </form>
            </div>
        </div>
    );
};

export default UpdateReview;