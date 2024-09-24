import { BaseItem } from "@/app/_components/table/custom-table-body"
import CustomDataTable from "../../_components/table/custom-data-table"

interface Career extends BaseItem {
  name: string
  email: string
  cv: React.ReactNode
  designation: string
  message: string
  IPAddress: string
  countryCode: React.ReactNode
  date: string
}

const initialData: Career[] = [
  {
    id: 1,
    name: "salman masqati",
    email: "email@gmail.com",
    cv: (
      <a
        className="text-sky-500"
        href="https://emirates-estates.com/nakheel/nakheel-dubai-island-plots"
      >
        View
      </a>
    ),
    designation: "Real Estate Administrator",
    message:
      "Greetings. I hope this email finds you well. My name is Salman Masqati, Residing in the UAE with 3 years of experience in the real estate field and holding a UAE driving license too.",
    IPAddress: "109.177.133.102",
    countryCode: <>+971</>,
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
