import { BaseItem } from "@/app/_components/table/custom-table-body"
import CustomDataTable from "../../_components/table/custom-data-table"
import Image from "next/image"

interface PopularCommunity extends BaseItem {
  communityName: string
  image: React.ReactNode
  view: React.ReactNode
  date: string
}

const initialData: PopularCommunity[] = [
  {
    id: 1,
    communityName: "Aljurf Garden",
    image: (
      <Image
        src="https://dubairealestateproperties.com/admin_dReP060606/images/popular_community/popular_comm_img_867_burj-royal.jpg"
        alt="Naseer the team lead"
        width={200}
        height={200}
      />
    ),
    view: (
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
      <h1 className="text-2xl font-medium mx-8 mt-4">Popular Community</h1>
      <CustomDataTable initialData={initialData} />
    </div>
  )
}
