import { Link } from "react-router-dom";

const GameCard = ({ singleData }) => {
    const { _id, title, image, rating, genre, release_date, platforms, developer, short_description } = singleData;
    return (
        <div className="card bg-base-100 shadow-sm">
            <figure>
                <img
                    src={image}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{short_description}</p>
                <p className="font-semibold">Genre: {genre}</p>
                <p className="font-semibold">Rating: {rating}</p>
                <p className="font-semibold">Release_Date: {release_date}</p>
                <div className="font-semibold space-x-2">Platform: {platforms.map((platform, id) => <p className="inline" key={id}>{platform}</p>)}</div>
                <p className="font-semibold">Developer: {developer}</p>
                <Link to={`/gameDetails/${_id}`} className="btn">Explore Details</Link>
            </div>
        </div>
    );
};

export default GameCard;