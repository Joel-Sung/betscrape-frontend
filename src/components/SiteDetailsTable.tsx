import { SiteCredentials } from "@/types/supabaseTypes"
import { useEffect, useState } from "react"
import { getSiteCredentials } from "../api/supabaseAPI"

const data = [
  { agent: '1absolute', website: '1absolutewager.com', refreshRate: '1', status: '', telegram: '' },
  { agent: 'betwcs', website: 'betwcs.com', refreshRate: '3', status: '', telegram: '' },
  { agent: 'bric168', website: 'ag.bric168.net', refreshRate: '5', status: '', telegram: '' },
  { agent: 'diamondsb', website: 'Diamondsb.ag', refreshRate: '6', status: '', telegram: '' },
  { agent: 'kwin99', website: 'ag1.kwin99.net', refreshRate: '7', status: '', telegram: '' },
  { agent: 'ssi28', website: 'ssi28.net', refreshRate: '8', status: '', telegram: '' },
]

const headerStyle = "px-4 py-2 text-center"
const evenRowStyle = "hover:bg-gray-100"
const oddRowStyle = "bg-gray-200 hover:bg-gray-100"
const cellStyle = "text-center"

export default function SiteDetailsTable() {

  const [siteCredentials, setSiteCredentials] = useState<SiteCredentials[]>([])

  useEffect(() => {
    async function getData() {
      await getSiteCredentials().then((credentials) => {
        setSiteCredentials(credentials)
      })
    }
    getData()
  }, [])
  
  return (
    <table className="table-auto text-left w-full">
      <thead className="bg-gray-400">
        <tr>
          <th className={headerStyle}>Agent</th>
          <th className={headerStyle}>Username</th>
          <th className={headerStyle}>Password</th>
          <th className={headerStyle}>Refresh Rate</th>
          <th className={headerStyle}>Status</th>
          <th className={headerStyle}>Telegram</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => {
          const credentials = siteCredentials.length > 0
            ? siteCredentials.filter((credential) => {return credential.website === item.website})[0]
            : {username: '', password: ''}
          return (
            <tr key={index} className={index % 2 == 0 ? evenRowStyle : oddRowStyle}>
              <td className={cellStyle}>{item.agent}</td>
              <td className={cellStyle}>{credentials.username}</td>
              <td className={cellStyle}>{credentials.password}</td>
              <td className={cellStyle}>{item.refreshRate} min</td>
              <td className={cellStyle}>{item.status}</td>
              <td className={cellStyle}>{item.telegram}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
