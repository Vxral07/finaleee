import { Card, Carousel } from "@/components/ui/apple-cards-carousel";
import { blogs } from "@/lib/blogs";
import { ChevronDown } from "lucide-react";
import { useMemo, useState } from "react";
import '../../styles/ethosphere.css';

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../ui/select";
import { SparklesCore } from "../ui/sparkles";

const Ethosphere = () => {
    const [selectedYear, setSelectedYear] = useState<string>("2024");
    const [selectedMonth, setSelectedMonth] = useState<string>("none");

    const yearOptions = [
        { label: "2024", value: "2024" },
    ];

    const monthOptions = [
        { label: "All", value: "none" },
        { label: "January", value: "January" },
        { label: "February", value: "February" },
        { label: "March", value: "March" },
        { label: "April", value: "April" },
        { label: "May", value: "May" },
        { label: "June", value: "June" },
        { label: "July", value: "July" },
        { label: "August", value: "August" },
        { label: "September", value: "September" },
        { label: "October", value: "October" },
        { label: "November", value: "November" },
        { label: "December", value: "December" }
    ];

    const filterBlogs = useMemo(() => {
        const filteredBlogs = selectedMonth === "none"
            ? blogs.filter((blog) => blog.date.includes(selectedYear))
            : blogs.filter((blog) => blog.date.includes(selectedYear) && blog.date.includes(selectedMonth));
        return filteredBlogs.reverse();
    }, [selectedYear, selectedMonth]);

    const blogCards = filterBlogs.map((blog, index) => (
        <Card
            key={blog.id}
            index={index}
            card={{
                src: blog.image,
                edition: blog.id,
                title: blog.heading,
                description: blog.description,
                date: blog.date,
                path: blog.path
            }}
        />
    ));

    return (
        <div className="max-w-screen">

            <div className="h-[10rem] w-full  flex flex-col items-center justify-center overflow-hidden rounded-md">
                <h2 className="text-3xl pb-5 font-bold leading-tight text-cyan-400 hover:text-cyan-400 sm:text-4xl lg:text-5xl">
                    Ethosphere
                </h2>
                <div className="w-[40rem] h-10 relative">
                    {/* Gradients */}
                    <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
                    <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
                    <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
                    <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

                    {/* Core component */}
                    <SparklesCore
                        background="transparent"
                        minSize={0.4}
                        maxSize={1}
                        particleDensity={1200}
                        className="w-full h-full"
                        particleColor="#030F26"
                    />
                    {/* Radial Gradient to prevent sharp edges */}
                    <div className="absolute inset-0 w-full h-full  [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center mt-20 mx-4">
                <div className="w-full overflow-x-auto flex flex-row justify-start gap-1 sm:gap-5 container mb-4">

                    <Select
                        defaultValue={selectedYear}
                        onValueChange={(value) => setSelectedYear(value)}
                    >
                        <SelectTrigger className="w-fit h-8">
                            <SelectValue className="-z-20">
                                <div className="flex flex-row rounded-2xl items-center">
                                    {selectedYear} <ChevronDown className="w-5 h-5" />
                                </div>
                            </SelectValue>
                        </SelectTrigger>
                        <SelectContent className="w-min bg-black text-white">
                            {
                                yearOptions.map(({ label, value }) => <SelectItem value={value}>{label}</SelectItem>)
                            }
                        </SelectContent>
                    </Select>
                    <Select
                        defaultValue={selectedMonth}
                        onValueChange={(value) => setSelectedMonth(value)}
                    >
                        <SelectTrigger className="w-fit h-8 mr-2">
                            <SelectValue className="-z-20">
                                <div className="flex flex-row rounded-2xl items-center">
                                    {selectedMonth === "none" ? "All Month" : selectedMonth} <ChevronDown className="w-5 h-5" />
                                </div>
                            </SelectValue>
                        </SelectTrigger>
                        <SelectContent className="w-min bg-black text-white">
                            {
                                monthOptions.map(({ label, value }) => <SelectItem value={value}>{label}</SelectItem>)
                            }
                        </SelectContent>
                    </Select>
                </div>
                <Carousel items={blogCards} />
            </div>
        </div>
    );
};
export default Ethosphere;