import { BaseItem } from "@/app/_components/table/custom-table-body"
import CustomDataTable from "../../_components/table/custom-data-table"

interface PaymentPlan extends BaseItem {
  name: string
  email: string
  phone: number
  IPAddress: string
  countryCode: React.ReactNode
  url: React.ReactNode
  date: string
}

const initialData: PaymentPlan[] = [
  {
    id: 1,
    name: "asiya",
    email: "email@gmail.com",
    phone: 1231231232,
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
      <h1 className="text-2xl font-medium mx-8 mt-4">Payment Plan</h1>
      <CustomDataTable initialData={initialData} />
    </div>
  )
}
