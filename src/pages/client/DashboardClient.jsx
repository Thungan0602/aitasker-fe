// src/pages/DashboardClient.jsx
import {
  Briefcase,
  FileText,
  Wallet,
  TrendingUp,
  MessageSquare,
  Sparkles,
  ArrowUpRight,
  ArrowRight,
  CheckCircle,
  Star,
  ClipboardCheck,
  DollarSign,
} from "lucide-react";
import { Link } from "react-router-dom";
import MessagesIcon from "../../components/ui/MesageIcon";
import Button from "../../components/ui/Button";
import StatCard from "../../components/ui/StatCard";
import DataTable from "../../components/ui/DataTable";
import { clientTable } from "../../data/clientTable";

import {
  jobStreamsData,
  topExpertsData,
  statsData,
} from "../../data/dashboardClientMockData";
import { allProjectsData } from "../../data/projectsMockData";
export default function DashboardClient() {
  // LỌC DỮ LIỆU: Chỉ lấy những dự án của Client có tên là "Al-Xasker Elite"
  const clientJobs = allProjectsData.filter(
    (project) => project.client === "Al-Xasker Elite",
  );



  return (
    <div className="space-y-8 max-w-[1400px] mx-auto pb-12">
      {/* 1. TOP TITLE & ACTION BUTTONS */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-[#1a1a3c]">
            Dashboard Overview
          </h1>
          <p className="text-gray-500 mt-1">
            Track your technical execution and active AI workstreams.
          </p>
        </div>
        <Button
          className="flex gap-2 px-6"
          variant="primary"
          leftIcon={<Sparkles size={16} />}
        >
          New Project
        </Button>
      </div>

      {/* 2. STATS CARDS BLOCK (3 Cột) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {statsData.map((card) => (
          <StatCard
            key={card.id}
            label={card.label}
            value={card.value}
            icon={card.icon}
            iconBgColor={card.iconBgColor}
            iconTextColor={card.iconTextColor}
            subtext={card.subtext}
          />
        ))}
      </div>

      {/* 3. MAIN SECTION (Bảng/Biểu đồ & Danh sách chuyên gia) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* CỘT TRÁI (Chiếm 2/3 không gian): Bảng việc & Biểu đồ */}

        {/* A. Active Job Streams (Bảng) */}
        <div className="lg:col-span-2 space-y-8 bg-white rounded-2xl border border-gray-100 shadow-sm max-h-fit">
          <div className="overflow-x-auto">
            <DataTable
              title="Active Job Streams"
              data={clientJobs}
              columns={clientTable()}
              extraHeader={
                <Link
                  to="/projects"
                  className="flex items-center gap-1 text-sm font-bold text-gray-500 hover:text-orange-500 transition-colors">
                  View All <ArrowRight size={16} />
                </Link>
              }
            />
          </div>
        </div>

        {/* CỘT PHẢI (Chiếm 1/3 không gian): Danh sách chuyên gia */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex flex-col justify-between">
          <div>
            <h3 className="font-bold text-[#1a1a3c] uppercase tracking-wider text-xs mb-6">
              Top Performing Experts
            </h3>
            <div className="space-y-6">
              {topExpertsData.map((expert, idx) => (
                <div key={idx} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={expert.img}
                      alt={expert.name}
                      className="w-11 h-11 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-bold text-[#1a1a3c] text-sm">
                        {expert.name}
                      </h4>
                      <p className="text-xs text-gray-400 mt-0.5">
                        {expert.role}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-amber-500 text-sm">
                      ★ {expert.rating}
                    </div>
                    <div className="text-[11px] text-gray-400 mt-0.5">
                      {expert.tasks}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button className="w-full border border-gray-200 text-gray-700 font-semibold py-3 rounded-xl mt-8 text-sm hover:bg-gray-50 transition-all shadow-sm">
            Browse Network
          </button>
        </div>
      </div>
      {/* 4. FLOATING MESSAGE ICON */}
      <MessagesIcon />
    </div>
  );
}
