;

const GameCard = ({ singleData }) => {
    const { title, image, rating, genre, release_date, platforms, developer, short_description } = singleData;
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
                <p className="font-semibold space-x-2">Platform: {platforms.map((platform, id) => <p className="inline" key={id}>{platform}</p>)}</p>
                <p className="font-semibold">Developer: {developer}</p>
                <button className="btn">Explore Details</button>
            </div>
        </div>
    );
};

export default GameCard;