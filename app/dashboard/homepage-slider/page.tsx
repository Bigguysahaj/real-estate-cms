import { BaseItem } from "@/app/_components/table/custom-table-body"
import CustomDataTable from "../../_components/table/custom-data-table"
import Image from "next/image"

interface HomePageSlider extends BaseItem {
  mainImage: React.ReactNode
  smallImage: React.ReactNode
  title: string
  subTitle: string
  oneLiner: string
  view: React.ReactNode
  date: string
}

const initialData: HomePageSlider[] = [
  {
    id: 1,
    mainImage: (
      <Image
        src="https://dubairealestateproperties.com/admin_dReP060606/images/homepage-slider/main/slider_main_img_4520_jannat-by-deyaar.webp"
        alt="Jannat by Deyaar"
        width={200}
        height={200}
      />
    ),
    smallImage: (
      <Image
        src="https://dubairealestateproperties.com/admin_dReP060606/images/homepage-slider/main/slider_main_img_4520_jannat-by-deyaar.webp"
        alt="Jannat by Deyaar"
        width={200}
        height={200}
      />
    ),
    title: "Jannat by Deyaar at Midtown in Dubai Production City For SALE",
    subTitle: "1, 2 & 3 bedroom apartments",
    oneLiner: "12% Down Payment",
    view: (
      <a className="text-sky-500" href="https://dubairealestateproperties.com/">
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
      <h1 className="text-2xl font-medium mx-8 mt-4">Home Page Slider</h1>
      <CustomDataTable initialData={initialData} />
    </div>
  )
}
