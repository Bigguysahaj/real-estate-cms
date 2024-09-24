import { BaseItem } from "@/app/_components/table/custom-table-body"
import CustomDataTable from "../../_components/table/custom-data-table"

interface ContactUs extends BaseItem {
  name: string
  email: string
  topic: string
  phone: number
  message: string
}

const initialData: ContactUs[] = [
  {
    id: 1,
    name: "joe",
    email: "email@gmail.com",
    topic: " ",
    phone: 1231231232,
    message: "Privacy Policy",
    active: true,
  },
]

export default function Page() {
  return (
    <div>
      <h1 className="text-2xl font-medium mx-8 mt-4">Contact Us</h1>
      <CustomDataTable initialData={initialData} />
    </div>
  )
}
