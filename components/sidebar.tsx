import Link from "next/link"
import { LayoutDashboard, BarChart2, Users, ShoppingCart, Settings, HelpCircle, LogOut } from "lucide-react"

export function Sidebar() {
  return (
    <div className="hidden w-64 flex-shrink-0 border-r bg-white md:flex md:flex-col">
      <div className="flex h-16 items-center border-b px-6">
        <h1 className="text-xl font-bold">Dashboard</h1>
      </div>
      <div className="flex flex-1 flex-col overflow-y-auto py-4">
        <nav className="flex-1 space-y-1 px-2">
          <SidebarItem icon={<LayoutDashboard className="h-5 w-5" />} label="Dashboard" active />
          <SidebarItem icon={<BarChart2 className="h-5 w-5" />} label="Analytics" />
          <SidebarItem icon={<Users className="h-5 w-5" />} label="Customers" />
          <SidebarItem icon={<ShoppingCart className="h-5 w-5" />} label="Orders" />
          <SidebarItem icon={<Settings className="h-5 w-5" />} label="Settings" />
          <SidebarItem icon={<HelpCircle className="h-5 w-5" />} label="Help Center" />
        </nav>
        <div className="mt-auto border-t px-2 py-4">
          <SidebarItem icon={<LogOut className="h-5 w-5" />} label="Logout" />
        </div>
      </div>
    </div>
  )
}

function SidebarItem({ icon, label, active = false }) {
  return (
    <Link
      href="#"
      className={`group flex items-center rounded-md px-3 py-2 text-sm font-medium ${
        active ? "bg-blue-50 text-blue-600" : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
      }`}
    >
      <span className={`mr-3 ${active ? "text-blue-600" : "text-gray-500 group-hover:text-gray-700"}`}>{icon}</span>
      {label}
    </Link>
  )
}
