import logo from "../../assets/images/logo02.png";
import Button from "../../components/ui/Button";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaUserTie } from "react-icons/fa";
import { RiRobot2Line } from "react-icons/ri";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function RegisterPage() {
    const [showPassword, setShowPassword] = useState(false);
    return (
        <div className="h-screen w-screen overflow-hidden bg-white">
            <div className="grid h-full w-full grid-cols-1 bg-white lg:grid-cols-[60%_40%]">
                {/* Left Register Form */}
                <section className="flex items-center justify-center bg-[#1f3348] px-8 py-10">
                    <div className="w-full max-w-[430px] rounded-xl border border-slate-400/70 px-8 py-8">
                        <div className="mb-7">
                            <h1 className="text-3xl font-black text-orange-500">
                                Create your account
                            </h1>
                            <p className="mt-2 text-sm text-slate-400">
                                Access the elite AI task marketplace today.
                            </p>
                        </div>

                        <form className="space-y-5">
                            <div>
                                <label className="mb-2 block text-xs font-black text-orange-500">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter your full name"
                                    className="w-full rounded-md border border-slate-300 bg-white px-4 py-3 text-sm outline-none placeholder:text-slate-300 focus:border-orange-500"
                                />
                            </div>

                            <div>
                                <label className="mb-2 block text-xs font-black text-orange-500">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    placeholder="name@company.com"
                                    className="w-full rounded-md border border-slate-300 bg-white px-4 py-3 text-sm outline-none placeholder:text-slate-300 focus:border-orange-500"
                                />
                            </div>

                            <div>
                                <div className="mb-2 flex items-center justify-between">
                                    <label className="text-xs font-black text-orange-500">
                                        Password
                                    </label>

                                    <span className="text-[11px] font-bold text-slate-400">
                                        8+ characters
                                    </span>
                                </div>

                                <div className="relative">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        placeholder="••••••••"
                                        className="w-full rounded-md border border-slate-300 bg-white px-4 py-3 pr-10 text-sm outline-none placeholder:text-slate-300 focus:border-orange-500"
                                    />

                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500"
                                    >
                                        {showPassword ? (
                                            // mắt mở
                                            <svg
                                                className="h-5 w-5"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z" />
                                                <circle cx="12" cy="12" r="3" />
                                            </svg>
                                        ) : (
                                            // mắt đóng
                                            <svg
                                                className="h-5 w-5"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M3 3l18 18" />
                                                <path d="M10.5 10.5a2 2 0 0 0 3 3" />
                                                <path d="M9.88 5.09A9.77 9.77 0 0 1 12 5c6.5 0 10 7 10 7a17.6 17.6 0 0 1-2.16 2.94" />
                                                <path d="M6.61 6.61A17.3 17.3 0 0 0 2 12s3.5 7 10 7a9.76 9.76 0 0 0 5.39-1.61" />
                                            </svg>
                                        )}
                                    </button>
                                </div>
                            </div>

                            <div>
                                <label className="mb-3 block text-xs font-black text-orange-500">
                                    Select your role
                                </label>

                                <div className="grid grid-cols-2 gap-3">
                                    <button
                                        type="button"
                                        className="flex items-center justify-center gap-2 rounded-md bg-white px-4 py-3 text-sm font-bold text-[#123047] shadow-sm transition hover:ring-2 hover:ring-orange-500"
                                    >
                                        <FaUserTie className="text-teal-600" />
                                        Client
                                    </button>

                                    <button
                                        type="button"
                                        className="flex items-center justify-center gap-2 rounded-md bg-white px-4 py-3 text-sm font-bold text-[#123047] shadow-sm transition hover:ring-2 hover:ring-orange-500"
                                    >
                                        <RiRobot2Line className="text-teal-600" />
                                        Expert
                                    </button>
                                </div>
                            </div>

                            <Button className="w-full rounded-md">
                                Create Account <span className="ml-2 text-lg">→</span>
                            </Button>
                        </form>

                        <div className="my-7 flex items-center gap-4">
                            <div className="h-px flex-1 bg-slate-400" />
                            <span className="text-[10px] font-bold text-slate-500">OR</span>
                            <div className="h-px flex-1 bg-slate-400" />
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                            <button className="flex items-center justify-center gap-3 bg-white px-4 py-3 text-xs font-bold text-slate-700 shadow-sm">
                                <FcGoogle className="text-xl" />
                                Sign up with Google
                            </button>

                            <button className="flex items-center justify-center gap-3 bg-[#2f6df6] px-4 py-3 text-xs font-bold text-white shadow-sm">
                                <FaFacebook className="text-xl text-white" />
                                Sign up with Facebook
                            </button>
                        </div>

                        <p className="mt-7 text-center text-xs text-slate-500">
                            Already have an account?{" "}
                            <Link
                                to="/login"
                                className="font-bold text-orange-500 hover:underline"
                            >
                                Sign in
                            </Link>
                        </p>
                    </div>
                </section>

                {/* Right Logo */}
                <section className="hidden items-center justify-center bg-white px-10 lg:flex">
                    <div className="flex flex-col items-center">
                        <img
                            src={logo}
                            alt="AITasker Logo"
                            className="w-[590px] max-w-full object-contain"
                        />

                        <div className="mt-8 flex flex-col items-center gap-3">
                            <span className="h-2 w-2 rounded-full bg-orange-500" />
                            <span className="h-2 w-2 rounded-full bg-[#132238]" />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}