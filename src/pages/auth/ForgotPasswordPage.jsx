import React from "react";
import logo from "../../assets/images/logo01.png";
import Button from "../../components/ui/Button";

export default function ForgotPasswordPage() {
    return (
        <div className="h-screen w-screen overflow-hidden bg-white">
            <div className="grid h-full w-full grid-cols-1 bg-white lg:grid-cols-[60%_40%]">
                <section className="flex items-center justify-center bg-[#1f3348] px-8 py-10">
                    <div className="w-full max-w-[430px]">
                        <div className="mb-7">
                            <h1 className="text-3xl font-black text-orange-500">
                                Forgot Password?
                            </h1>

                            <p className="mt-3 text-sm leading-relaxed text-slate-400">
                                Enter the email address associated with your account and
                                <br />
                                we will send you a link to reset your password.
                            </p>
                        </div>

                        <form className="space-y-5">
                            <div>
                                <label className="mb-2 block text-xs font-black text-orange-500">
                                    Email
                                </label>

                                <input
                                    type="email"
                                    placeholder="name@company.ai"
                                    className="w-full rounded-md border border-slate-300 bg-[#f7f7fb] px-4 py-3 text-sm outline-none placeholder:text-slate-400 focus:border-orange-500"
                                />
                            </div>

                            <Button className="w-full rounded-md">
                                Send Reset Link <span className="ml-2 text-lg">→</span>
                            </Button>
                        </form>

                        <div className="mt-8 text-center">
                            <button className="text-sm font-bold text-orange-500">
                                ← Back to Login
                            </button>
                        </div>
                    </div>
                </section>

                <section className="hidden items-center justify-center bg-white px-10 lg:flex">
                    <div className="flex flex-col items-center">
                        <img
                            src={logo}
                            alt="AITasker Logo"
                            className="w-[520x] max-w-full object-contain"
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