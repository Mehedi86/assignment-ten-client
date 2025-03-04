import Swal from "sweetalert2";


const AddReview = () => {
    const handleAddReview = e => {
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

        const reviewToPost = {
            cover_url, title, description, username, rating, publishYear,
            genre, email
        }
        
        fetch('http://localhost:5000/addReview', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(reviewToPost)
        }).then(res=> res.json()).then(data=> {
            console.log(data);
            Swal.fire({
                title: "Drag me!",
                icon: "success",
                draggable: true
              });
        })
    }
    return (
        <div className="bg-[url(/11.png)] min-h-screen pt-24 bg-no-repeat">
            <div className="bg-[#F4F3F0] md:w-2/3 mx-auto px-8 py-4">
                <div className="md:w-1/2 mx-auto my-12 space-y-6 text-center">
                    <h2 className="text-4xl">Add Review</h2>
                    <p>Reviewing game will enhanced your game reviewing skills and your reviews are useful for another gamers who do will to play this game.</p>
                </div>
                <form onSubmit={handleAddReview}>
                    <div className="md:flex gap-4">
                        <div className="md:w-1/2 space-y-4">
                            <div>
                                <label>Cover Image</label>
                                <input type="text" placeholder="Cover Image" className="input w-full" name="cover" />
                            </div>
                            <div>
                                <label>Game Title/Name</label>
                                <input type="text" placeholder="Game Title/Name" className="input w-full" name="title" />
                            </div>
                            <div>
                                <label>Review Description</label>
                                <input type="text" placeholder="Review Description" className="input w-full" name="description" />
                            </div>
                            <div>
                                <label>User Name</label>
                                <input type="text" placeholder="User Name" className="input w-full" name="username" />
                            </div>
                        </div>
                        <div className="md:w-1/2 space-y-4">
                            <div>
                                <label>Rating</label>
                                <input type="text" placeholder="Rating" className="input w-full" name="rating" />
                            </div>
                            <div>
                                <label>Publishing year</label>
                                <input type="text" placeholder="Publishing year" className="input w-full" name="publish" />
                            </div>
                            <div className="flex flex-col">
                                <label>Genres:</label>
                                <select className="p-2 bg-white rounded border border-gray-300" name="genre">
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
                                <input type="text" placeholder="User Email" className="input w-full" name="email" />
                            </div>
                        </div>
                    </div>
                    <button className="btn btn-block bg-neutral-600 my-6 text-white">Add Review</button>
                </form>
            </div>
        </div>
    );
};

export default AddReview;