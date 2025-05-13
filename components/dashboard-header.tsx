"use client"

import { ChevronDown } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function DashboardHeader({ period, setPeriod }) {
  const periods = ["Today", "Yesterday", "Last 7 days", "Last 30 days", "This month", "Last month"]

  return (
    <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-center">
      <h1 className="text-2xl font-bold">Dashboard Overview</h1>
      <div className="flex items-center gap-4">
        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center gap-1 rounded-md border bg-white px-3 py-2 text-sm font-medium shadow-sm hover:bg-gray-50">
            {period}
            <ChevronDown className="h-4 w-4" />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {periods.map((p) => (
              <DropdownMenuItem key={p} onClick={() => setPeriod(p)}>
                {p}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  )
}
