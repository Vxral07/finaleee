const Press = () => {
    return (
        <div className="bg-primary/25 p-4">
            <div className="flex flex-col md:flex-row items-center justify-between container">
                <div className="flex flex-col gap-6 justify-center max-w-prose">
                    <h3 className="font-bold text-3xl">
                        NUQI Digital Wealth
                        <br />
                        attains DFSA License
                    </h3>
                    <p>
                        A prominent fintech company has proudly announced its
                        successful acquisition of the prestigious Dubai
                        Financial Services Authority(DFSA) license within the
                        UAE. This significant achievement represents a
                        monumental stride forward for Nuqi Digital Wealth UAE,
                        further solidifying its position as a distinguished
                        ethical financial advisory firm committed to responsible
                        and sustainable investment practices...
                    </p>
                    <a
                        href="https://gulfnews.com/business/corporate-news/nuqi-digital-wealth-attains-dfsa-license-1.1705932392422"
                        target="_blank"
                        className="bg-black rounded-md px-4 py-2 max-w-min whitespace-nowrap text-white"
                    >
                        Learn more
                    </a>
                </div>
                <img src="/blog.jpg" className="rounded-md md:scale-75 m-4" />
            </div>
        </div>
    );
};

export default Press;
