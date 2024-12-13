// import { GooglePlay, AppStore } from "./pages/advisory";
// import { Highlight } from "./ui/hero-highlight";
import videoSrc from '/main_1.mp4'

const Hero = () => {
    return (
        <div className="conatiner ">
            <div className='flex justify-center w-full'>
            <video
                    className="max-h-[calc(100vh-7rem)] w-[80vw] object-cover"
                    autoPlay
                    muted
                    playsInline
                    loop
                >
                    <source src={videoSrc} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
        </div>
        </div>
    );
};

export default Hero;
