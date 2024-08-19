interface Item {
    id: number
    title: string
    content: string
    image: string
    amenities?: string[]
  }
  
  export const Developers: Item[] = [
      {
        id: 0,
        title: "Emaar Properties",
        content:
          "With a net asset value of AED 177.5 Bn (USD 48.3 Bn)*, Emaar Properties is among the most admired and valuable real estate development companies in the world. Emaar, which has established competencies in real estate, retail and shopping malls, hospitality, and leisure, shapes new lifestyles through its commitment to design excellence, build quality, and timely delivery.",
        image:
          "https://properties-emaar-com.azureedge.net/wp-content/uploads/2021/09/TURKEY2-440x570.jpg",
        amenities: ["sky scrapers", "beach front"],
      }
    ]
    