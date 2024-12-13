import { useNavigate } from "react-router-dom";

const exclusives = [
    {
        title: "Global Portfolios ",
        description:
            "Expand your investment horizon globally with our partnership, ensuring a diversified portfolio tailored to your needs.",
        image: "/exclusives/trading.png",
    },
    /*{
        title: "Fractional Gold",
        description:
            "Stay tuned for our upcoming Gold offering, featuring fractional gold investments for accessible wealth accumulation.",
        image: "/exclusives/gold.png",
    },*/
];

const Exclusives = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col gap-8 pb-12 items-center justify-center antialiased container">
            {/* <h1 className="text-3xl font-black   tracking-tighter md:text-3xl text-center">
                Exclusively at Nuqi
            </h1> */}
            <div className="grid md:grid-cols-1 gap-4 md:gap-8">
                {exclusives.map((e, index) => (
                    <div className="relative flex flex-col mt-6 bg-gradient-to-br from-[#3d4957] to-[#282e3a] text-white shadow-md bg-clip-border rounded-xl max-w-xl text-center">
                        <div className="flex justify-center items-center pt-6 w-full">
                            <img src={e.image} className="" />
                        </div>
                        <div className="p-6">
                            <h5 className="block mb-2   text-lg antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                                {e.title}
                            </h5>
                            <p className="block   text-sm antialiased font-light leading-relaxed text-inherit">
                                {e.description}
                            </p>
                        </div>
                        <div className="p-6 pt-0">
                            <a href="#" className="inline-block">
                                <button
                                    className="flex items-center gap-2 px-4 py-2   text-xs font-bold text-center uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-slate-500/10 active:bg-gray-900/20"
                                    type="button"
                                    onClick={() => {
                                        if (index !== 2) {
                                            navigate("/advisory");
                                        }
                                    }}
                                >
                                    {index !== 1 ? "Learn More" : "Coming Soon"}
                                    {index !== 1 && (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke-width="2"
                                            stroke="currentColor"
                                            className="w-4 h-4"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                            ></path>
                                        </svg>
                                    )}
                                </button>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Exclusives;
