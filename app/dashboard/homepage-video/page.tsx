import { BaseItem } from "@/app/_components/table/custom-table-body"
import CustomDataTable from "../../_components/table/custom-data-table"

interface HomePageVideo extends BaseItem {
  video: React.ReactNode
  videoUrl: string
  heading: string
  buttonText: string
  view: React.ReactNode
  date: string
}

const initialData: HomePageVideo[] = [
  {
    id: 1,
    video: (
      <video className="h-14 w-40" controls>
        <source
          src="https://dubairealestateproperties.com/admin_dReP060606/images/homepage-video/video_4301_Pexels%20Videos%201128104.mp4"
          type="video/mp4"
        />
      </video>
    ),
    videoUrl:
      "https://dubairealestateproperties.com/admin_dReP060606/images/homepage-video/video_4301_Pexels%20Videos%201128104.mp4",
    heading: "Beachfront Dubai",
    buttonText: "Read More",
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
      <h1 className="text-2xl font-medium mx-8 mt-4">Home Page Video</h1>
      <CustomDataTable initialData={initialData} />
    </div>
  )
}
