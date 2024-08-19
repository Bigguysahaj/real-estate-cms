"use client"

import { ProjectProps } from "@/lib/types"
import ViewModule from "../_components/view-module"
import { Communities } from "./_default-communities"
import React, { useState } from "react"

export default function Project() {
  const [community, setCommunity] = useState<ProjectProps[]>(Communities)
  return (
    <ViewModule items={community} setItems={setCommunity} title='Communities' />
  )
}
