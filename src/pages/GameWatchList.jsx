import { Navigate, useLoaderData, useLocation } from "react-router-dom";


const GameWatchList = () => {
    const loadedWatchlist = useLoaderData();
    const location = useLocation();

    if (location.pathname == "/gameWatchList/undefined") {
        return <Navigate to="/"></Navigate>
    }
    
    return (
        <div className="container mx-auto">
            <h2 className="text-4xl my-12 font-semibold text-center">My Watchlist</h2>
            <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Genre</th>
                            <th>Publish Year</th>
                            <th>Rating</th>
                        </tr>
                    </thead>
                    <tbody>
                        {loadedWatchlist.map((single, index) => <tr key={single._id}>
                            <th>{index+1}</th>
                            <th>{single.title}</th>
                            <th>{single.genre}</th>
                            <th>{single.publishYear}</th>
                            <th>{single.rating}</th>
                        </tr>)}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default GameWatchList;