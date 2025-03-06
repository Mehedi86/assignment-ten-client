import Lottie from "lottie-react";
import animation from "../../src/animation.json"

const LottieReact = () => {
    return (
         <Lottie animationData={animation} loop={true} style={{ width: 50, height: 50 }}/>
    );
};

export default LottieReact;