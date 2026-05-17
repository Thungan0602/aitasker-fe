import React from "react";
import logo from "../../assets/images/logo01.png";
import Button from "../../components/ui/Button";
import Badge from "../../components/ui/Badge";
import {
  FiBriefcase,
  FiGrid,
  FiMessageSquare,
  FiBell,
  FiSettings,
  FiCode,
  FiCpu,
  FiActivity,
  FiHome,
  FiClock,
  FiUsers,
  FiHelpCircle,
  FiLogOut,
} from "react-icons/fi";

export default function JobDetail() {
  return (
    <div className="min-h-screen bg-[#f4f6fb] text-[#111331]">
      <div className="flex min-h-screen w-full">
        {/* Main */}
        <main className="flex-1">
          
          <section className="mx-auto grid max-w-[1180px] grid-cols-[1fr_280px] gap-8 px-8 py-10">
            {/* Left content */}
            <div>
              <p className="mb-5 text-xs text-slate-500">
                Marketplace / <span className="font-black text-[#111331]">Job Details</span>
              </p>

              <h1 className="max-w-[680px] text-5xl font-black leading-tight tracking-tight">
                Neural Network Optimization for Fintech
              </h1>

              <div className="mt-5 flex flex-wrap gap-2">
                <Badge>AI Architecture</Badge>
                <Badge className="bg-[#eef2ff] text-[#111331]">FINTECH</Badge>
                <Badge className="bg-[#eef2ff] text-[#111331]">
                  High-Frequency Trading
                </Badge>
              </div>

              <Section title="Detailed Description">
                <p>
                  We are seeking an elite Machine Learning Engineer to optimize our
                  proprietary neural network architecture used for ultra-low latency
                  fintech applications. The project involves refining existing
                  transformer models to reduce inference time by at least 15% without
                  compromising predictive accuracy.
                </p>

                <p className="mt-5">
                  You will work closely with our quant teams to audit current
                  bottlenecks in the data pipeline and implement hardware-aware
                  optimizations for NVIDIA H100 environments. This is a
                  mission-critical project for our Q3 trading infrastructure rollout.
                </p>
              </Section>

              <Section title="Technical Requirements">
                <div className="grid grid-cols-2 gap-5">
                  <Requirement
                    icon={<FiCode />}
                    title="Advanced PyTorch/C++"
                    text="Deep expertise in custom CUDA kernels and TensorRT optimization."
                  />
                  <Requirement
                    icon={<FiCpu />}
                    title="Quantization Logic"
                    text="Experience with INT8 and FP8 quantization strategies for LLMs."
                  />
                  <Requirement
                    icon={<FiActivity />}
                    title="Latency Profiling"
                    text="Proficiency with Nsight Systems and deep profiling tools."
                  />
                  <Requirement
                    icon={<FiHome />}
                    title="Fintech Domain"
                    text="Understanding of market data structures and order book dynamics."
                  />
                </div>
              </Section>

              <Section title="Deliverables">
                <ul className="space-y-3 text-sm leading-relaxed text-slate-600">
                  <li className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-orange-500" />
                    Optimized inference engine compatible with NVIDIA Triton Inference Server.
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-orange-500" />
                    Comprehensive benchmark report comparing old vs. new architecture latency.
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-orange-500" />
                    Documented technical specification for the optimization pipeline.
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-orange-500" />
                    Knowledge transfer session with the internal Engineering team.
                  </li>
                </ul>
              </Section>

              <Section title="About the Project">
                <div className="overflow-hidden rounded-3xl">
                  <img
                    src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=900"
                    alt="Project"
                    className="h-[220px] w-full object-cover"
                  />
                </div>

                <p className="mt-5 text-sm leading-relaxed text-slate-600">
                  This initiative is part of our broader “Titan” project, aimed at
                  revolutionizing how AI models interact with real-time financial
                  markets. You will be joining at a critical juncture as we prepare
                  for a global launch.
                </p>
              </Section>
            </div>

            {/* Right cards */}
            <aside className="space-y-6">
              <div className="rounded-3xl bg-white p-7 shadow-[0_14px_35px_rgba(15,23,42,0.08)]">
                <InfoRow label="Budget" value="$25,000" />
                <InfoRow label="Duration" value="3 months" />
                <InfoRow label="Experience Level" value="Expert" orange />

                <Button className="mt-6 w-full rounded-full py-4 text-base">
                  Apply Now
                </Button>

                <button className="mt-4 w-full rounded-full border border-slate-200 bg-white py-4 text-sm font-black text-[#111331]">
                  Save for Later
                </button>

                <div className="mt-6 space-y-3 border-t border-slate-100 pt-5 text-xs text-slate-500">
                  <p className="flex items-center gap-2">
                    <FiClock /> Posted 4 hours ago
                  </p>
                  <p className="flex items-center gap-2">
                    <FiUsers /> 12 Applications received
                  </p>
                </div>
              </div>

              <div className="rounded-3xl bg-white p-7 shadow-[0_14px_35px_rgba(15,23,42,0.08)]">
                <h3 className="mb-5 text-sm font-black">About the Client</h3>

                <div className="flex items-center gap-3">
                  <img
                    src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=100"
                    alt=""
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-sm font-black">NexGen FinSystems</p>
                    <p className="text-[11px] text-slate-400">5.0 / 42 reviews</p>
                  </div>
                </div>

                <div className="mt-6 space-y-3 text-xs">
                  <InfoRow label="Location" value="New York, USA" />
                  <InfoRow label="Total Spent" value="$450k+" />
                  <InfoRow label="Member since" value="Jan 2021" />
                </div>

                <button className="mt-6 text-xs font-black text-orange-500">
                  View Profile
                </button>
              </div>

              <div className="rounded-3xl bg-white p-6 shadow-[0_14px_35px_rgba(15,23,42,0.08)]">
                <p className="text-xs font-black text-slate-500">Job Popularity Score</p>
                <div className="mt-3 h-2 rounded-full bg-slate-200">
                  <div className="h-2 w-[75%] rounded-full bg-orange-500" />
                </div>
                <p className="mt-2 text-[11px] text-slate-400">
                  Top 5% of active job listings
                </p>
              </div>
            </aside>
          </section>
        </main>
      </div>
    </div>
  );
}

function SidebarItem({ icon, text, active }) {
  return (
    <div
      className={`flex items-center gap-3 rounded-2xl px-4 py-3 ${
        active ? "bg-orange-500 text-white" : "hover:bg-orange-50"
      }`}
    >
      {icon}
      <span>{text}</span>
    </div>
  );
}

function SidebarMini({ icon, text }) {
  return (
    <div className="flex items-center gap-3">
      {icon}
      <span>{text}</span>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <section className="mt-12">
      <h2 className="mb-5 border-b border-slate-200 pb-3 text-2xl font-black">
        {title}
      </h2>
      <div className="text-sm leading-relaxed text-slate-600">{children}</div>
    </section>
  );
}

function Requirement({ icon, title, text }) {
  return (
    <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
      <div className="mb-3 text-lg text-orange-500">{icon}</div>
      <h3 className="text-sm font-black text-[#111331]">{title}</h3>
      <p className="mt-2 text-xs leading-relaxed text-slate-500">{text}</p>
    </div>
  );
}

function InfoRow({ label, value, orange }) {
  return (
    <div className="mb-4 flex items-center justify-between gap-4 text-sm">
      <span className="text-slate-500">{label}</span>
      <span className={`font-black ${orange ? "text-orange-500" : "text-[#111331]"}`}>
        {value}
      </span>
    </div>
  );
}