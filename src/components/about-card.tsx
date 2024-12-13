const AboutCard = ({
    item,
}: {
    item: {
        name: string;
        description: string;
        designation: string;
        id: number;
    };
}) => {
    return (
        <div className="relative w-full max-w-2xl my-8 md:my-12 flex flex-col items-start space-y-4 sm:flex-row sm:space-y-0 sm:space-x-6 px-4 py-8 border-2 border-secondary shadow-lg rounded-lg">
            <span className="absolute text-xs font-medium top-0 left-0 rounded-br-lg rounded-tl-lg px-2 py-1 bg-primary border-secondary border-b-2 border-r-2 ">
                {item.designation}
            </span>

            <div className="w-full flex justify-center items-center">
                <img
                    className="object-cover rounded-md max-w-xs"
                    src={`/team/abt-${item.id}.png`}
                />
            </div>

            <div className="w-full sm:w-auto flex flex-col items-center sm:items-start">
                <p className="font-display mb-2 text-2xl font-semibold">
                    {item.name}
                </p>

                <div className="mb-4 md:text-lg text-secondary">
                    <p>{item.description}</p>
                </div>
            </div>
        </div>
    );
};

export default AboutCard;
