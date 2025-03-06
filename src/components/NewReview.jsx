

const NewReview = () => {
    return (
        <div className="container mx-auto bg-neutral-300 my-12">
            <h2 className="text-center text-2xl md:text-4xl font-semibold py-6">Request For review Game</h2>
            <div className="md:flex justify-center">
                <div className="p-2">
                    <label>Your Name</label>
                    <br />
                    <input className="md:input border" type="text" placeholder="Your name" />
                </div>
                <div className="p-2">
                    <label>Your email</label>
                    <br />
                    <input className="md:input border" type="text" placeholder="Email" />
                </div>
                <div className="p-2">
                    <label>Games Name</label>
                    <br />
                    <input className="md:input border" type="text" placeholder="Games Name" />
                </div>
            </div>
            <div className="md:flex justify-center ml-2 md:ml-0  py-4">
                <button className="btn btn-neutral">Submit</button>
            </div>
        </div>
    );
};

export default NewReview;