import React from "react";
import logo from "../../assets/images/logo01.png";
import Button from "../ui/Button";

export default function MarketplaceLayout({ children }) {
    return (
        <div className="min-h-screen bg-[#f6f8fd] text-[#0b1b2f]">
            <aside className="fixed left-0 top-0 z-20 h-screen w-[190px] bg-white px-5 py-6">
                <div className="mb-8 flex items-center">
                  <img src={logo} alt="Logo" className="h-12 w-auto rounded-full" />
                </div>

                <nav className="space-y-2 text-xs font-semibold">
                    <div className="rounded-2xl bg-orange-100 px-4 py-3 text-orange-600">
                        Marketplace
                    </div>
                    <div className="px-4 py-3 text-slate-500">My Services</div>
                </nav>

                <div className="mt-8 border-t border-slate-100 pt-6">
                    <h4 className="mb-4 text-xs font-black text-slate-800">Categories</h4>

                    {[
                        "NLP & LLMs",
                        "Computer Vision",
                        "Data Engineering",
                        "Reinforcement Learning",
                    ].map((item) => (
                        <label
                            key={item}
                            className="mb-3 flex items-center gap-2 text-[11px] text-slate-500"
                        >
                            <input type="checkbox" className="accent-orange-500" />
                            {item}
                        </label>
                    ))}
                </div>

                <div className="mt-7">
                    <h4 className="mb-3 text-xs font-black text-slate-800">Price Range</h4>
                    <input type="range" className="w-full accent-orange-500" />
                    <div className="mt-1 flex justify-between text-[10px] text-slate-400">
                        <span>$100</span>
                        <span>$10k+</span>
                    </div>
                </div>

                <div className="mt-7">
                    <h4 className="mb-3 text-xs font-black text-slate-800">Min. Rating</h4>

                    <label className="mb-3 flex items-center gap-2 text-[11px] text-slate-500">
                        <input type="radio" name="rating" className="accent-orange-500" />
                        4.5 & up
                    </label>

                    <label className="flex items-center gap-2 text-[11px] text-slate-500">
                        <input type="radio" name="rating" className="accent-orange-500" />
                        4.0 & up
                    </label>
                </div>

                <div className="absolute bottom-8 left-5 right-5">
                    <Button className="w-full rounded-xl">
                        Post a Job
                    </Button>

                    <div className="mt-7 space-y-4 text-xs text-slate-500">
                        <p>Support</p>
                        <p>Settings</p>
                    </div>
                </div>
            </aside>

            <main className="ml-[190px] min-h-screen">
                <header className="sticky top-0 z-10 flex h-[68px] items-center justify-between bg-white px-8">
                    <div className="mx-auto w-[440px]">
                        <input
                            className="w-full rounded-full bg-[#eef3fd] px-6 py-3 text-xs outline-none placeholder:text-slate-400"
                            placeholder="Search for AI services..."
                        />
                    </div>

                    <Button variant="outline" size="lg">
                        Sign in
                    </Button>
                </header>

                {children}
            </main>
        </div>
    );
}