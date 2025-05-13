"use client"

import { useState } from "react"
import { Sidebar } from "@/components/sidebar"
import { DashboardHeader } from "@/components/dashboard-header"
import { MetricCards } from "@/components/metric-cards"
import { PerformanceChart } from "@/components/performance-chart"
import { RecentTransactionsTable } from "@/components/recent-transactions-table"

export function DashboardPage() {
  const [period, setPeriod] = useState("Last 30 days")

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1 overflow-auto p-8">
        <DashboardHeader period={period} setPeriod={setPeriod} />
        <MetricCards period={period} />
        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-7">
          <div className="rounded-lg border bg-white p-6 shadow-sm lg:col-span-4">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-lg font-medium">Performance</h3>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  <div className="h-3 w-3 rounded-full bg-blue-500"></div>
                  <span className="text-sm text-gray-500">This period</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="h-3 w-3 rounded-full bg-gray-300"></div>
                  <span className="text-sm text-gray-500">Previous period</span>
                </div>
              </div>
            </div>
            <PerformanceChart />
          </div>
          <div className="rounded-lg border bg-white p-6 shadow-sm lg:col-span-3">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-lg font-medium">Recent Transactions</h3>
              <button className="text-sm font-medium text-blue-600 hover:text-blue-800">View all</button>
            </div>
            <RecentTransactionsTable />
          </div>
        </div>
      </main>
    </div>
  )
}
