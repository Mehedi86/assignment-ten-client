import { LuSquareMenu } from "react-icons/lu";
import { MdModeEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";

const ReviewCard = ({ singleReview }) => {
    const location = useLocation();
    const { _id, cover_url, title, genre, rating, publishYear } = singleReview;

    return (
        <div className="flex items-center gap-4 w-full p-6 bg-[#F5F4F1] rounded-xl">
            <div>
                <img className="w-60" src={cover_url || "hello"} alt="" />
            </div>
            <div className="flex items-center justify-between w-full">
                <div>
                    <p><span className="font-semibold">Title:</span> {title}</p>
                    <p><span className="font-semibold">Genre:</span> {genre}</p>
                    <p><span className="font-semibold">Rating:</span> {rating}</p>
                    <p><span className="font-semibold">Publish Year:</span> {publishYear}</p>
                </div>
                <div>
                    {location.pathname == "/allReviews" ? <Link to={`/reviewDetails/${_id}`} className="btn bg-[#D2B48C] text-white"><LuSquareMenu size={20} />Explore Details</Link> : <div className="flex flex-col justify-end">
                        <Link to={`/updateReview/${_id}`} className="btn bg-[#3C393B] text-white"><MdModeEdit size={20} /></Link>
                        <button className="btn bg-[#EA4744] text-white"><MdDelete size={20} /></button>
                    </div>}
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;