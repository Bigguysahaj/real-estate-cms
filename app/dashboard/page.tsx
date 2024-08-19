import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { BarChartComponent } from "../_components/bar-chart"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BarChartBetter } from "../_components/bar-chart-better"

export default async function Dashboard() {
  return (
    <div className='flex flex-col justify-center items-start flex-wrap px-4 pt-4 gap-4'>
      <Card className='w-[20rem]'>
        <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
          <CardTitle className='text-sm font-medium'>
            Total leads in last 30 days
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className='text-2xl font-bold'>30</div>
        </CardContent>
      </Card>
      <div className='flex flex-wrap gap-2'>
        <BarChartComponent />
        <BarChartBetter />
      </div>
    </div>
  )
}
