import { BaseItem } from "@/app/_components/table/custom-table-body"
import CustomDataTable from "../../_components/table/custom-data-table"

interface MetaData extends BaseItem {
  pageName: string
  content: string
  view: string
  date: string
}

const initialData: MetaData[] = [
  {
    id: 1,
    pageName: 'career',
    content: `Welcomes to Newport Homes, a leading portal, where you will have excellent career prospects. Currently, we are looking for active team members, who have the hunger and desire to perform in a challenging environment.
      With Newport Homes there is no limit to where our staff can go. We have a genuine focus on our people and it underlies everything we do. Investing time and training in our employees allow us to bring them success and company progression.

      We put people first clients and staff. These 10 points are an outline of our company ethos.

      We set high standards to aspire
      We welcome constructive criticism from employees and clients alike
      We act for our clients own interests before ours
      We strive to be the best real estate company in Dubai to work for
      We are willing to challenge the normal real estate practice in Dubai
      We believe in respect for each other as human beings is more important than commission
      We listen to our clients and to the market
      We are committed to adding value to our services
      We have other objectives than pure financial return
      We are focused on the bigger picture
      `,
    view: 'View',
    active: true,
    date: 'Jan 08,2021',
  }
]

export default function Page(){
  return (
    <div>
      <h1 className="text-2xl font-medium mx-8 mt-4">Page Content</h1>
      <CustomDataTable initialData={initialData}/>
    </div>
  )
}