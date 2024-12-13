const Screening = () => (
    <div className="mb-12">
        <div className="container">
            <h1 className="text-3xl font-black   tracking-tighter md:text-3xl text-center">
                Rigorous Screenings
            </h1>
            <h2 className="text-xl font-semibold   tracking-tighter md:text-xl text-center py-2 text-secondary">
                Our <span className="text-primary">halal investments</span> are
                structured in accordance with the strictest Islamic principles
            </h2>
        </div>
        <div
            style={{ borderColor: "#E2B6AD" }}
            className="mt-8 grid grid-cols-2 md:grid-cols-4 lg:mx-52 gap-5"
        >
            <Icon image="/screening/cigarette.png" name="Tobacco" />
            <Icon image="/screening/link.png" name="Excess debt" />
            <Icon image="/screening/alcoholic-drink.png" name="Alcohol" />
            <Icon image="/screening/weapon.png" name="Firearms" />
            <Icon image="/screening/card-game.png" name="Gambling" />
            <Icon
                image="/screening/video-views.png"
                name="Adult entertainment"
            />
            <Icon image="/screening/pork.png" name="Impure food stocks" />
            <Icon image="/screening/bank.png" name="Usurious institutions" />
        </div>
    </div>
);

const Icon = ({ name, image }: { name: string; image: string }) => (
    <div className="border-inherit flex justify-center items-center flex-col">
        <div className="bg-red border-2 bg-primary border-secondary rounded-full w-24 h-24 relative">
            <div className="w-0.5 h-24 bg-secondary -rotate-45 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
            <img src={image} className="scale-50" />
        </div>
        <div className="text-center text-sm font-semibold mt-3 mb-2">
            {name}
        </div>
    </div>
);

export default Screening;
