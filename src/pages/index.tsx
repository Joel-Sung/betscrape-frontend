import BetDetailsTable from "@/components/BetDetailsTable"
import EmptySpace from "@/components/EmptySpace"
import SiteDetailsTable from "@/components/SiteDetailsTable"

export default function Main() {
  return (
    <>
      <SiteDetailsTable />
      <EmptySpace height={100}/>
      <BetDetailsTable />
    </>
  )
}
