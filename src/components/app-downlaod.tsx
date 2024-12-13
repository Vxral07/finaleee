import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "./ui/dialog";
import { GooglePlay, AppStore } from "./pages/advisory";

const AppDownlaod = () => {

    return (
        <Dialog>
            <DialogTrigger asChild>
                <div className="pointer-events-auto">
                    {/* <ModeToggle /> */}
                    <button
                        className="md:col-start-2 inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#3d4957,45%,#1e2631,55%,#3d4957)] bg-[length:200%_100%] px-4 lg:px-6 font-medium text-background transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 whitespace-nowrap"
                        type="button"
                    >
                        Download now
                    </button>
                </div>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Download App</DialogTitle>
                    <DialogDescription>
                        Would you like to know more? Download Now
                    </DialogDescription>
                </DialogHeader>
                <div className="flex flex-wrap content-center items-center justify-between px-5">
                    <GooglePlay />
                    <AppStore />
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default AppDownlaod;