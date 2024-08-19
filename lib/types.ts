export interface ProjectProps {
  id: number
  title: string
  content: string
  image: string
  amenities: string[]
}


export enum View {
  Grid = "grid",
  List = "list",
}