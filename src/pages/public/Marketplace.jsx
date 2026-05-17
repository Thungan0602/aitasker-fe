import React from "react";
import MarketplaceLayout from "../../components/layout/MarketplaceLayout";
import ServiceCard from "../../components/common/ServiceCard";
import FeaturedServiceCard from "../../components/common/FeaturedServiceCard";
import Button from "../../components/ui/Button";

const services = [
    {
        title: "Enterprise LLM Fine-tuning",
        author: "Dr. Aris Thorn",
        price: "$2,450",
        rating: "4.9",
        image:
            "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=800",
        tags: ["NLP", "ENTERPRISE"],
    },
    {
        title: "Custom Object Detection API",
        author: "Sarah Chen",
        price: "$1,800",
        rating: "5.0",
        image:
            "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800",
        tags: ["VISION", "REAL-TIME"],
    },
    {
        title: "ETL Pipeline Automation",
        author: "Marcus Vane",
        price: "$1,200",
        rating: "4.8",
        image:
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800",
        tags: ["DATA", "PIPELINE"],
    },
    {
        title: "Generative Asset Pipeline",
        author: "Elena Rossi",
        price: "$3,100",
        rating: "4.7",
        image:
            "https://images.unsplash.com/photo-1620121692029-d088224ddc74?q=80&w=800",
        tags: ["CREATIVE", "GAN"],
    },
];

export default function Marketplace() {
    return (
        <MarketplaceLayout>
            <section className="px-14 py-10 max-w-[1500px] mx-auto">
                <div className="mb-8 flex items-end justify-between">
                    <div>
                        <p className="mb-2 text-xs text-slate-500">
                            Marketplace /{" "}
                            <span className="font-black text-slate-800">All Services</span>
                        </p>

                        <h1 className="text-4xl font-black tracking-tight text-[#0b1b2f]">
                            AI Expert Marketplace
                        </h1>

                        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-500">
                            Deploy enterprise-grade AI solutions with vetted specialists in
                            LLM fine-tuning, computer vision, and neural architecture.
                        </p>
                    </div>

                    <Button variant="ghost">
                        Sort by: Featured⌄
                    </Button>
                </div>

                <div className="grid grid-cols-4 gap-8">
                    <ServiceCard service={services[0]} />
                    <ServiceCard service={services[1]} />
                    <ServiceCard service={services[2]} />
                    <ServiceCard service={services[3]} />

                    <FeaturedServiceCard />

                    <ServiceCard service={services[0]} />
                    <ServiceCard service={services[1]} />
                </div>

                <div className="mt-12 flex flex-col items-center">
                    <Button variant="outline" className="px-14">
                        Load 24 More Services
                    </Button>

                    <div className="mt-5 flex items-center gap-3 text-xs font-bold">
                        <button className="h-8 w-8 rounded-full bg-orange-500 text-white">
                            1
                        </button>
                        <button className="h-8 w-8 rounded-full bg-white text-slate-600">
                            2
                        </button>
                        <button className="h-8 w-8 rounded-full bg-white text-slate-600">
                            3
                        </button>
                        <span className="text-slate-500">...</span>
                        <button className="h-8 w-8 rounded-full bg-white text-slate-600">
                            12
                        </button>
                    </div>
                </div>
            </section>
        </MarketplaceLayout>
    );
}