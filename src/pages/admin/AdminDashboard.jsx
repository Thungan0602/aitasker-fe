import { Link } from "react-router-dom";

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gray-100 flex">

      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg p-6">

        <h1 className="text-3xl font-bold text-orange-500 mb-10">
          AITasker
        </h1>

        <div className="space-y-4">

          <button className="w-full text-left bg-orange-100 text-orange-500 p-3 rounded-xl">
            Dashboard
          </button>

          <Link to="/manageuser">
          <button className="w-full text-left hover:bg-gray-100 p-3 rounded-xl">
             Manage Users
          </button>
          </Link>

          <Link to="/admin/manage-jobs">
            <button className="w-full text-left hover:bg-gray-100 p-3 rounded-xl">
              Manage Jobs
            </button>
          </Link>

          <Link to="/admin/manage-services">
            <button className="w-full text-left hover:bg-gray-100 p-3 rounded-xl">
              Manage Services
            </button>
          </Link>

          <Link to="/admin/reports">
            <button className="w-full text-left hover:bg-gray-100 p-3 rounded-xl">
              Reports
            </button>
          </Link>

          <Link to="/admin/statistics">
            <button className="w-full text-left hover:bg-gray-100 p-3 rounded-xl">
              Statistics
            </button>
          </Link>

          <Link to="/admin/settings">
            <button className="w-full text-left hover:bg-gray-100 p-3 rounded-xl">
              Settings
            </button>
          </Link>

        </div>

      </div>

      {/* Main Content */}
      <div className="flex-1 p-10">

        <h1 className="text-4xl font-bold mb-2">
          Admin Dashboard
        </h1>

        <p className="text-gray-500 mb-10">
          Manage platform users and system
        </p>

        {/* Cards */}
        <div className="grid grid-cols-3 gap-6">

          <div className="bg-white p-6 rounded-2xl shadow">
            <h2 className="text-gray-500">
              Total Users
            </h2>
            <p className="text-4xl font-bold mt-4">
              12,450
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow">
            <h2 className="text-gray-500">
              Active Experts
            </h2>
            <p className="text-4xl font-bold mt-4">
              8,432
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow">
            <h2 className="text-gray-500">
              Suspended Accounts
            </h2>
            <p className="text-4xl font-bold mt-4">
              42
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow">
            <h2 className="text-gray-500">
              Total Jobs
            </h2>
            <p className="text-4xl font-bold mt-4">
              1,245
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow">
            <h2 className="text-gray-500">
              Total Services
            </h2>
            <p className="text-4xl font-bold mt-4">
              520
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow">
            <h2 className="text-gray-500">
              Pending Reports
            </h2>
            <p className="text-4xl font-bold mt-4">
              15
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}