import { useLoaderData } from "react-router-dom";


const GameDetails = () => {
    const loadedGameData = useLoaderData();
    
    const { developer, game_info, genre, image, platforms, rating, release_date, short_description, title } = loadedGameData;
    return (
        <div>
            <div className="md:min-h-[360px] md:bg-[#D2B48C] pt-8 ">
                <h2 className="text-2xl md:text-4xl mb-12 font-semibold text-center">Game Details</h2>
            </div>
            <div className="container mx-auto rounded-xl md:p-4 md:-mt-48 mb-12 md:flex gap-4 bg-stone-50">
                <div className="md:w-1/3 md:p-4">
                    <img className="w-full rounded-xl h-[400px] p-2" src={image} alt="" />
                </div>
                <div className="md:w-2/3 p-4">
                    <h1 className="text-2xl font-bold">Review Title: {title}</h1>
                    <p className="text-xl font-semibold py-2">Genre: {genre}</p>
                    <p className="text-xl font-semibold py-2 text-neutral-400">Release Date: {release_date}</p>
                    <h2 className="text-xl font-bold">Rating: {rating}</h2>
                    <h2 className="text-2xl my-2 text-orange-200 font-semibold">Developer: {developer}</h2>
                    <div className="font-semibold space-x-2">Platform: {platforms.map((platform, id) => <p className="inline" key={id}>{platform}</p>)}</div>
                    <p className="font-semibold text-gray-400">Description: {game_info} {short_description}</p>
                </div>
            </div>
        </div>
    );
};

export default GameDetails;