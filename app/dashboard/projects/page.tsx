"use client"

import { ProjectProps } from "@/lib/types"
import ViewModule from "../_components/view-module"
import { initialProjects } from "./_default-projects"
import React, { useState } from "react"

export default function Project() {
  const [projects, setProjects] = useState<ProjectProps[]>(initialProjects)
  return <ViewModule items={projects} setItems={setProjects} title='Projects' />
}
