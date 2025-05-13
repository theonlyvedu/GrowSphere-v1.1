import { TrendingUp, Users, ShoppingCart, DollarSign } from "lucide-react"

export function MetricCards({ period }) {
  const metrics = [
    {
      title: "Total Revenue",
      value: "$45,231.89",
      change: "+20.1%",
      trend: "up",
      icon: <DollarSign className="h-5 w-5" />,
    },
    {
      title: "New Customers",
      value: "1,205",
      change: "+18.2%",
      trend: "up",
      icon: <Users className="h-5 w-5" />,
    },
    {
      title: "Total Orders",
      value: "12,234",
      change: "+12.5%",
      trend: "up",
      icon: <ShoppingCart className="h-5 w-5" />,
    },
    {
      title: "Conversion Rate",
      value: "3.24%",
      change: "-0.4%",
      trend: "down",
      icon: <TrendingUp className="h-5 w-5" />,
    },
  ]

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {metrics.map((metric, index) => (
        <div key={index} className="rounded-lg border bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="rounded-md bg-gray-100 p-2 text-gray-700">{metric.icon}</span>
            <span className={`text-sm font-medium ${metric.trend === "up" ? "text-green-600" : "text-red-600"}`}>
              {metric.change}
            </span>
          </div>
          <div className="mt-4">
            <h3 className="text-sm font-medium text-gray-500">{metric.title}</h3>
            <p className="mt-2 text-3xl font-bold">{metric.value}</p>
            <p className="mt-1 text-xs text-gray-500">{period}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
