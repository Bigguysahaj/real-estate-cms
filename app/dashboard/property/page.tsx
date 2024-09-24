import { BaseItem } from "@/app/_components/table/custom-table-body"
import CustomDataTable from "../../_components/table/custom-data-table"
import Image from "next/image"

interface Property extends BaseItem {
  developerName: string
  propertyName: string
  type: string
  location: string
  featuredProperty: React.ReactNode
  paymentPlan: React.ReactNode
  floorPlan: React.ReactNode
  pointOfInterest: React.ReactNode
  apartmentFacility: React.ReactNode
  sliderImage: React.ReactNode
  view: React.ReactNode
  date: string
}

const initialData: Property[] = [
  {
    id: 1,
    developerName: "Wasl Group",
    propertyName: "South Garden by Wasl Properties at Wasl Gate",
    type: "Sale",
    location: "Wasl Gate",
    featuredProperty: (
      <a className="text-sky-500" href="#">
        Manage
      </a>
    ),
    paymentPlan: (
      <a className="text-sky-500" href="#">
        Manage
      </a>
    ),
    floorPlan: (
      <a className="text-sky-500" href="#">
        Manage
      </a>
    ),
    pointOfInterest: (
      <a className="text-sky-500" href="#">
        Manage
      </a>
    ),
    apartmentFacility: (
      <a className="text-sky-500" href="#">
        Manage
      </a>
    ),
    sliderImage: (
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
      <h1 className="text-2xl font-medium mx-8 mt-4">Property</h1>
      <CustomDataTable initialData={initialData} />
    </div>
  )
}
