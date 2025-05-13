export function RecentTransactionsTable() {
  const transactions = [
    {
      id: "#12345",
      customer: "John Doe",
      date: "Apr 23, 2023",
      amount: "$125.00",
      status: "Completed",
    },
    {
      id: "#12346",
      customer: "Jane Smith",
      date: "Apr 22, 2023",
      amount: "$250.00",
      status: "Processing",
    },
    {
      id: "#12347",
      customer: "Robert Johnson",
      date: "Apr 21, 2023",
      amount: "$350.00",
      status: "Completed",
    },
    {
      id: "#12348",
      customer: "Emily Davis",
      date: "Apr 20, 2023",
      amount: "$75.00",
      status: "Completed",
    },
  ]

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left text-sm">
        <thead>
          <tr className="border-b text-xs uppercase text-gray-500">
            <th className="pb-2 font-medium">ID</th>
            <th className="pb-2 font-medium">Customer</th>
            <th className="pb-2 font-medium">Date</th>
            <th className="pb-2 font-medium">Amount</th>
            <th className="pb-2 font-medium">Status</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => (
            <tr key={index} className="border-b last:border-0 hover:bg-gray-50">
              <td className="py-3 font-medium">{transaction.id}</td>
              <td className="py-3">{transaction.customer}</td>
              <td className="py-3 text-gray-500">{transaction.date}</td>
              <td className="py-3 font-medium">{transaction.amount}</td>
              <td className="py-3">
                <span
                  className={`inline-flex rounded-full px-2 py-1 text-xs font-medium ${
                    transaction.status === "Completed" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                  }`}
                >
                  {transaction.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
