import { BaseItem } from "@/app/_components/table/custom-table-body"
import CustomDataTable from "../../_components/table/custom-data-table"

interface CallBack extends BaseItem {
  name: string
  email: string
  phone: number
  message: string
  date: string
}

const initialData: CallBack[] = [
  {
    id: 1,
    name: "joe",
    email: "email@gmail.com",
    phone: 1231231232,
    message: "Privacy Policy",
    active: true,
    date: "Jan 08,2021",
  },
]

export default function Page() {
  return (
    <div>
      <h1 className="text-2xl font-medium mx-8 mt-4">Get a Callback</h1>
      <CustomDataTable initialData={initialData} />
    </div>
  )
}
