"use client"

import PageWrapper from "@/components/wrapper/page-wrapper"
import { useRouter } from "next/navigation"
import Dashboard from "./dashboard/page"

export default function Home() {
  const router = useRouter()
  router.push("/dashboard")
  return (
    <PageWrapper>Taking you to the sign in page, please sign in</PageWrapper>
  )
}
