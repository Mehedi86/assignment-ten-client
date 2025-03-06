import Lottie from "lottie-react";
import animation from "../../src/animation.json"

const LottieReact = () => {
    return (
         <Lottie className="rounded overflow-hidden h-6 w-6 md:h-10 md:w-10" animationData={animation} loop={true} />
    );
};

export default LottieReact;