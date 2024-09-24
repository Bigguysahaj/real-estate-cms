import { BaseItem } from "@/app/_components/table/custom-table-body"
import CustomDataTable from "../../_components/table/custom-data-table"

interface PropertyEnquiry extends BaseItem {
  propertyName: string
  username: string
  email: string
  phone: number
  message: string
  IPAddress: string
  countryCode: React.ReactNode
  url: React.ReactNode
  date: string
}

const initialData: PropertyEnquiry[] = [
  {
    id: 1,
    propertyName: "Nakheel Dubai Island - Limited Plots For Sale",
    username: "asiya",
    email: "email@gmail.com",
    phone: 1231231232,
    message: "interested in Dubai Island plots",
    IPAddress: "109.177.133.102",
    countryCode: <>+971</>,
    url: (
      <a
        className="text-sky-500"
        href="https://emirates-estates.com/nakheel/nakheel-dubai-island-plots"
      >
        View
      </a>
    ),
    active: true,
    date: "Jan 08,2021",
  },
]

export default function Page() {
  return (
    <div>
      <h1 className="text-2xl font-medium mx-8 mt-4">Property Enquiry</h1>
      <CustomDataTable initialData={initialData} />
    </div>
  )
}
