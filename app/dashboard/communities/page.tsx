import { BaseItem } from "@/app/_components/table/custom-table-body"
import CustomDataTable from "../../_components/table/custom-data-table"
import Image from "next/image"

interface Communities extends BaseItem {
  image: React.ReactNode
  communityName: string
  communityLocation: string
  description: string
  area: string
  price: number
  manageCommunityFacility: React.ReactNode
  view: React.ReactNode
  date: string
}

const initialData: Communities[] = [
  {
    id: 1,
    image: (
      <Image
        src="https://dubairealestateproperties.com/admin_dReP060606/images/community/comm_img_6913_Siniya%20Island.webp"
        alt="Naseer the team lead"
        width={200}
        height={200}
      />
    ),
    communityName: "Siniya Island	",
    communityLocation: "Umm Al Quwain",
    description:
      "Sobha Realty developed a posh residential and resort community, Sobha Siniya Island.",
    area: "",
    price: 0,
    manageCommunityFacility: (
      <a className="text-sky-500" href="#">
        Manage
      </a>
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
      <h1 className="text-2xl font-medium mx-8 mt-4">Communities</h1>
      <CustomDataTable initialData={initialData} />
    </div>
  )
}
