
import { Search, Bell, Settings, Eye, Pencil, Trash2, UserPlus } from "lucide-react";

export default function ManageUsersNew() {
  const users = [
    {
      name: "Sarah Chen",
      email: "sarah.c@designai.com",
      role: "AI Expert",
      status: "Active",
      joinDate: "Oct 12, 2023",
      lastLogin: "2 hours ago",
    },
    {
      name: "Marcus Holloway",
      email: "marcus@techstack.io",
      role: "Client",
      status: "Active",
      joinDate: "Nov 05, 2023",
      lastLogin: "Yesterday",
    },
    {
      name: "Elena Rodriguez",
      email: "elena.r@neural.net",
      role: "AI Expert",
      status: "Pending",
      joinDate: "Dec 20, 2023",
      lastLogin: "Never",
    },
    {
      name: "James Wilson",
      email: "j.wilson@legacy.com",
      role: "Client",
      status: "Suspended",
      joinDate: "Feb 01, 2023",
      lastLogin: "3 months ago",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f7f8fc] flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r flex flex-col justify-between">
        <div>
          <div className="p-6">
            <h1 className="text-2xl font-bold text-orange-500">
              AITasker
            </h1>
            <p className="text-xs text-gray-500">
              Enterprise Portal
            </p>
          </div>

          <nav className="px-4 space-y-2">
            <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-100">
              Dashboard
            </button>

            <button className="w-full text-left px-4 py-3 rounded-lg bg-orange-100 text-orange-600 font-semibold">
              Manage Users
            </button>

            <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-100">
              Manage Jobs
            </button>

            <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-100">
              Manage Services
            </button>

            <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-100">
              Statistics
            </button>

            <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-100">
              Reports
            </button>

            <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-100">
              Settings
            </button>
          </nav>
        </div>

        <div className="p-4 border-t">
          <button className="text-red-500 font-medium">
            Logout
          </button>
        </div>
      </aside>

      {/* Content */}
      <main className="flex-1 p-6">
        {/* Top Bar */}
        <div className="bg-white rounded-xl p-4 flex justify-between items-center shadow-sm">
          <div className="flex items-center gap-3 border rounded-lg px-3 py-2 w-[350px]">
            <Search size={18} />
            <input
              className="outline-none w-full"
              placeholder="Search platform users..."
            />
          </div>

          <div className="flex items-center gap-4">
            <Bell />
            <Settings />
            <div className="flex items-center gap-3">
              <img
                src="https://i.pravatar.cc/50"
                alt=""
                className="w-10 h-10 rounded-full"
              />
              <div>
                <p className="font-semibold">
                  Alex Rivera
                </p>
                <p className="text-xs text-gray-500">
                  Super Admin
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Title */}
        <div className="mt-6 flex justify-between items-center">
          <div>
            <h2 className="text-4xl font-bold">
              Manage Users
            </h2>
            <p className="text-gray-500 mt-1">
              Manage platform users, permissions and account status.
            </p>
          </div>

          <button className="bg-orange-500 text-white px-5 py-3 rounded-lg flex items-center gap-2">
            <UserPlus size={18} />
            Add User
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-4 mt-6">
          <StatCard title="TOTAL USERS" value="12,450" />
          <StatCard title="ACTIVE CLIENTS" value="4,018" />
          <StatCard title="ACTIVE AI EXPERTS" value="8,432" />
          <StatCard title="SUSPENDED" value="42" />
        </div>

        <div className="grid grid-cols-4 gap-6 mt-6">
          {/* Table */}
          <div className="col-span-3 bg-white rounded-xl shadow-sm overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-4 text-left">USER</th>
                  <th className="p-4 text-left">ROLE</th>
                  <th className="p-4 text-left">STATUS</th>
                  <th className="p-4 text-left">JOIN DATE</th>
                  <th className="p-4 text-left">LAST LOGIN</th>
                  <th className="p-4 text-left">ACTIONS</th>
                </tr>
              </thead>

              <tbody>
                {users.map((user, index) => (
                  <tr key={index} className="border-t">
                    <td className="p-4">
                      <div className="font-semibold">
                        {user.name}
                      </div>
                      <div className="text-sm text-gray-500">
                        {user.email}
                      </div>
                    </td>

                    <td className="p-4">{user.role}</td>

                    <td className="p-4">
                      <span
                        className={
                          user.status === "Active"
                            ? "text-green-600"
                            : user.status === "Pending"
                            ? "text-orange-500"
                            : "text-red-500"
                        }
                      >
                        {user.status}
                      </span>
                    </td>

                    <td className="p-4">{user.joinDate}</td>

                    <td className="p-4">{user.lastLogin}</td>

                    <td className="p-4">
                      <div className="flex gap-3">
                        <Eye size={18} />
                        <Pencil size={18} />
                        <Trash2
                          size={18}
                          className="text-red-500"
                        />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Right Panel */}
          <div className="space-y-4">
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <h3 className="font-bold mb-4">
                Pending Verification
              </h3>

              <p className="font-semibold">
                David Miller
              </p>

              <p className="text-orange-500">
                Python & ML Expert
              </p>

              <div className="flex gap-2 mt-4">
                <button className="bg-orange-500 text-white px-3 py-1 rounded">
                  Approve
                </button>

                <button className="border px-3 py-1 rounded">
                  Reject
                </button>
              </div>
            </div>

            <div className="bg-white rounded-xl p-4 shadow-sm">
              <h3 className="font-bold mb-3">
                Recent Registrations
              </h3>

              <ul className="space-y-3 text-sm">
                <li>Thomas Wright - Client</li>
                <li>Linda Chen - AI Expert</li>
                <li>Urban Dev Co. - Client</li>
                <li>Alex Volkov - AI Expert</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function StatCard({ title, value }) {
  return (
    <div className="bg-white p-5 rounded-xl shadow-sm">
      <p className="text-sm text-gray-500">
        {title}
      </p>

      <h3 className="text-3xl font-bold mt-2">
        {value}
      </h3>
    </div>
  );
}

