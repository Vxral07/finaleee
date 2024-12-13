import { ArrowRight } from "lucide-react";

const Video = () => {
    return (
        <div className="flex flex-col gap-8 pb-12 items-center justify-center antialiased">
            <div>
                <h1 className="text-3xl font-black   tracking-tighter md:text-3xl text-center">
                    Get Started
                </h1>
                <h2 className="text-xl font-bold   tracking-tighter md:text-xl text-center py-2 text-secondary">
                    Your <span className="text-primary">Nuqi</span> App
                </h2>
            </div>
            <div className="lg:flex items-center justify-between">
                <video
                    controls
                    className="max-w-3xl container rounded-md "
                    poster="/video-thumbnail.jpg"
                >
                    <source src="/movie.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="hidden md:flex flex-col gap-y-4 justify-center items-center">
                    <p className=" max-w-prose">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Et pariatur sequi facere deserunt, aspernatur vero
                        voluptates ex! Ipsum, temporibus doloribus ut nam
                        consequatur voluptate minus! Ratione ullam minima
                        facilis voluptatem! Expedita cupiditate doloremque, illo
                        recusandae blanditiis consequuntur iste, laudantium
                        accusantium et, soluta ipsa possimus fugit ut ullam
                        eligendi repudiandae. Excepturi qui quis dolore eum
                        dolor mollitia quibusdam totam. Tempore, maiores?
                    </p>
                    <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#3d4957,45%,#282e3a,55%,#3d4957)] bg-[length:200%_100%] px-3 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                        Learn more <ArrowRight className="ml-2" />
                    </button>
                </div>
                <div className="md:hidden flex justify-center py-4">
                    <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#3d4957,45%,#282e3a,55%,#3d4957)] bg-[length:200%_100%] px-3 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                        Learn more <ArrowRight className="ml-2" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Video;
