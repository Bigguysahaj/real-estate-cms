import { BaseItem } from "@/app/_components/table/custom-table-body"
import CustomDataTable from "../../_components/table/custom-data-table"
import Image from "next/image"

interface Team extends BaseItem {
  image: React.ReactNode
  name: string
  designation: string
  email: string
  view: React.ReactNode
  date: string
}

const initialData: Team[] = [
  {
    id: 1,
    image: (
      <Image
        src="https://dubairealestateproperties.com/admin_dReP060606/images/team/team_img_7_naseer.jpg"
        alt="Naseer the team lead"
        width={200}
        height={200}
      />
    ),
    name: "salman masqati",
    view: (
      <a
        className="text-sky-500"
        href="https://emirates-estates.com/nakheel/nakheel-dubai-island-plots"
      >
        View
      </a>
    ),
    designation: "Real Estate Administrator",
    email: "email@gmail.com",
    active: true,
    date: "Jan 08,2021",
  },
]

export default function Page() {
  return (
    <div>
      <h1 className="text-2xl font-medium mx-8 mt-4">Team</h1>
      <CustomDataTable initialData={initialData} />
    </div>
  )
}
