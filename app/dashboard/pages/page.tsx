import { BaseItem } from "@/app/_components/table/custom-table-body"
import CustomDataTable from "../../_components/table/custom-data-table"

interface Pages extends BaseItem {
  pageName: string
  view: React.ReactNode
  date: string
}

const initialData: Pages[] = [
  {
    id: 1,
    pageName: "salman masqati",
    active: true,
    view: (
      <a
        className="text-sky-500"
        href="https://dubairealestateproperties.com/property"
      >
        View
      </a>
    ),
    date: "Jan 08,2021",
  },
]

export default function Page() {
  return (
    <div>
      <h1 className="text-2xl font-medium mx-8 mt-4">Pages</h1>
      <CustomDataTable initialData={initialData} />
    </div>
  )
}
