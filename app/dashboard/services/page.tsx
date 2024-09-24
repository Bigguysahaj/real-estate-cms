import { BaseItem } from "@/app/_components/table/custom-table-body"
import CustomDataTable from "../../_components/table/custom-data-table"

interface Career extends BaseItem {
  heading: string
  description: string
  link: React.ReactNode
  View: React.ReactNode
  date: string
}

const initialData: Career[] = [
  {
    id: 1,
    heading: "Property Management",
    link: (
      <a className="text-sky-500" href="#">
        Link
      </a>
    ),
    View: (
      <a className="text-sky-500" href="#">
        View
      </a>
    ),
    description:
      "Newport Homes offer property management services that provide comprehensive solutions, each tailored to meet specific requirements and objectives. Our sole objective is to guarantee utmost convenience to our local and international clients while ensuring th..",
    active: true,
    date: "Jan 08,2021",
  },
]

export default function Page() {
  return (
    <div>
      <h1 className="text-2xl font-medium mx-8 mt-4">Career</h1>
      <CustomDataTable initialData={initialData} />
    </div>
  )
}
