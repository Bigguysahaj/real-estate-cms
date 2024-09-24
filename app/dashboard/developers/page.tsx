import { BaseItem } from "@/app/_components/table/custom-table-body"
import CustomDataTable from "../../_components/table/custom-data-table"
import Image from "next/image"

interface Developers extends BaseItem {
  locationName: string
  image: React.ReactNode
  view: React.ReactNode
  date: string
}

const initialData: Developers[] = [
  {
    id: 1,
    locationName: "Heilbronn Properties",
    image: (
      <Image
        src="https://dubairealestateproperties.com/admin_dReP060606/images/developer/develop_img_2145_Developer%20Logo.webp"
        alt="Naseer the team lead"
        width={200}
        height={200}
      />
    ),
    view: (
      <a
        className="text-sky-500"
        href="https://dubairealestateproperties.com/developer"
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
      <h1 className="text-2xl font-medium mx-8 mt-4">Developer</h1>
      <CustomDataTable initialData={initialData} />
    </div>
  )
}
