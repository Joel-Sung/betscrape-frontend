const headerStyle = "px-4 py-2"
const evenRowStyle = "hover:bg-gray-100"
const oddRowStyle = "bg-gray-200 hover:bg-gray-100"

export default function BetDetailsTable() {
  
  return (
    <table className="table-auto text-left w-full">
      <thead className="bg-gray-400">
        <tr>
          <th className={headerStyle}>Time</th>
          <th className={headerStyle}>Agent</th>
          <th className={headerStyle}>Description</th>
          <th className={headerStyle}>HDP | O/U</th>
          <th className={headerStyle}>Odds</th>
        </tr>
      </thead>
      <tbody>
      </tbody>
    </table>
  )
}
