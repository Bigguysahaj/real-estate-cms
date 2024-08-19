"use client"
import { useState } from "react"
import ViewModule from "../_components/view-module"
import { Developers } from "./_developers"

interface Item {
  id: number
  title: string
  content: string
  image: string
  amenities: string[]
}

export default function Dashboard() {
  const [developers, setDevelopers] = useState<Item[]>(Developers)
  return (
    <ViewModule
      items={developers}
      setItems={setDevelopers}
      title='Developers'
    />
  )
}
