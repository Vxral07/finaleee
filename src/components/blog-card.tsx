// import { ArrowRight } from "lucide-react";
import React from "react";

interface BlogCardProps {
    blog: {
        id: string;
        path: string;
        image: string;
        description: string;
        heading: string;
        content: JSX.Element;
        date: string;
        tags: string[];
    };
}

const BlogCard: React.FC<BlogCardProps> = ({ blog }) => {
    return (
        <div className="rounded-md ring-1 ring-zinc-900/5 bg-slate-50 group-hover:opacity-10 relative p-4 ">
            <div className="my-auto">
                <img
                    src={`/etho/donald-trump.jpg`}
                    className="w-full h-40 rounded-md object-cover"
                />
                <div className="absolute top-0 rounded-full right-0 px-3 py-1 m-5 backdrop-blur-sm">
                    <p className="font-medium text-white text-sm text-left">
                        {blog.id} Edition
                    </p>
                </div>
                <div>
                    <h1 className="font-medium text-lg py-2 text-left"> {blog.heading}</h1>
                    <p className="line-clamp-3 text-left">{blog.description}</p>
                </div>
                <div className="flex flex-row items-center justify-between mt-3 pr-5">
                    <p className="text-xs text-gray-500 font-bold">
                        {blog.date}
                    </p>
                    <button onClick={() => window.location.href = blog.path} className="flex justify-end items-center hover:cursor-pointer rounded-xl">
                        <p className="text-xs font-semibold underline">Read more</p>
                        {/* <ArrowRight className="h-4 w-4" /> */}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;


// import { ArrowRight } from "lucide-react";
// import React from "react";

// interface BlogCardProps {
//     blog: {
//         id: string;
//         path: string;
//         image: string;
//         description: string;
//         heading: string;
//         content: JSX.Element;
//         date: string;
//         tags: string[];
//     };
// }

// const BlogCard: React.FC<BlogCardProps> = ({ blog }) => {
//     return (
//         <button onClick={() => window.location.href = blog.path} className="rounded-md  bg-slate-50 group-hover:opacity-10 relative p-4 hover:cursor-pointer hover:rounded-md hover:bg-[#282e3a] hover:text-white">
//             <div className="my-auto">
//                 {/* <img
//                     src={`/blogs/${blog.image}`}
//                     className="absolute inset-0 opacity-0 rounded-md -z-10 transition-opacity duration-300"
//                 /> */}
//                 <div className="absolute inset-0 bg-secondary opacity-0 group-hover:opacity-75 transition-opacity duration-300 -z-10"></div>
//                 <div>
//                     <h1 className="font-bold text-xl py-2"> {blog.heading}</h1>
//                     <p className=" line-clamp-3">{blog.description}</p>
//                 </div>
//                 <div className="flex justify-center items-center gap-1 py-3">
//                     <p className="text-lg font-semibold">Read More</p>
//                     <ArrowRight />
//                 </div>
//             </div>
//         </button>
//     );
// };

// export default BlogCard;
