import { BaseItem } from "@/app/_components/table/custom-table-body"
import CustomDataTable from "../../_components/table/custom-data-table"

interface MetaData extends BaseItem {
  pageName: string
  metaTitle: string
  metaKeyword: string
  metaDescription: string
  date: string
}

const initialData: MetaData[] = [
  {
    id: 1,
    pageName: 'Privacy Policy',
    metaTitle: 'Privacy Policy',
    metaKeyword: 'Privacy Policy',
    metaDescription: 'Privacy Policy',
    active: true,
    date: 'Jan 08,2021',
  },
  {
    id: 2,
    pageName: 'Privacy Policy',
    metaTitle: 'Privacy Policy',
    metaKeyword: 'Privacy Policy',
    metaDescription: 'Privacy Policy',
    active: true,
    date: 'Jan 08,2021',
  },
  {
    id: 3,
    pageName: 'Privacy Policy',
    metaTitle: 'Privacy Policy',
    metaKeyword: 'Privacy Policy',
    metaDescription: 'Privacy Policy',
    active: true,
    date: 'Jan 08,2021',
  },
]

export default function Page(){
  return (
    <div>
      <h1 className="text-2xl font-medium mx-8 mt-4">Page Content</h1>
      <CustomDataTable initialData={initialData}/>
    </div>
  )
}