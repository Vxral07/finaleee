import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "./ui/dialog";
import { LockClosedIcon } from '@radix-ui/react-icons';
import { useState } from "react"

const ShowOTPSection = () => {
    const [otp, setOTP] = useState("")

    const onSendOtp = () => {
        // console.log(email)
    }

    const onVerifyOTP = () => {
        console.log(otp)
    }
    return (
        <Dialog>
            <DialogTrigger asChild>
                <div className="pointer-events-auto">
                    {/* <ModeToggle /> */}
                    <button
                        className="md:col-start-2 inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#3d4957,45%,#1e2631,55%,#3d4957)] bg-[length:200%_100%] px-4 lg:px-6 font-medium text-background transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 whitespace-nowrap"
                        type="button"
                        onClick={onSendOtp}
                    >
                        Send OTP
                    </button>
                </div>
            </DialogTrigger>
            <DialogContent className="flex flex-col max-w-md">
                <DialogHeader>
                    <DialogTitle>Verify OTP to Unlock</DialogTitle>
                    <DialogDescription>
                        Last step to unlock all list.
                    </DialogDescription>
                </DialogHeader>
                <input type="text"
                    onChange={(e) => setOTP(e.target.value)}
                    placeholder="OTP" value={otp} className="border-2 border-slate-500 rounded-md p-2 mt-5 w-full " />
                <button
                    className="md:col-start-2 self-center mt-5 inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#3d4957,45%,#1e2631,55%,#3d4957)] bg-[length:200%_100%] px-4 lg:px-6 font-medium text-background transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 whitespace-nowrap"
                    onClick={onVerifyOTP}
                >
                    Verify OTP
                </button>
            </DialogContent>
        </Dialog>
    )
}

const UserLoginRequired = () => {
    const [email, setEmail] = useState("")
    return (
        <Dialog>
            <DialogTrigger asChild>
                <div className="pointer-events-auto">
                    {/* <ModeToggle /> */}
                    <button
                        className="md:col-start-2 inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#3d4957,45%,#1e2631,55%,#3d4957)] bg-[length:200%_100%] px-4 lg:px-6 font-medium text-background transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 whitespace-nowrap"
                        type="button"
                    >
                        <LockClosedIcon className="mr-2 h-6 w-6" />
                        Sign-Up for free and unlock.
                    </button>
                </div>
            </DialogTrigger>
            <DialogContent className="flex flex-col max-w-md">
                <DialogHeader>
                    <DialogTitle>Sign-Up to Unlock</DialogTitle>
                    <DialogDescription>
                        Sign-up for free and unlock all list.
                    </DialogDescription>
                </DialogHeader>
                <input type="text"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    placeholder="Enter your email" className="border-2 border-slate-500 rounded-md p-2 mt-5 w-full " />
                <ShowOTPSection />
            </DialogContent>
        </Dialog>
    );
};

export default UserLoginRequired;