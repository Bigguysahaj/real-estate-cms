import Provider from "@/app/provider"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/sonner"
import AuthWrapper from "@/components/wrapper/auth-wrapper"
import { Analytics } from "@vercel/analytics/react"
import { GeistSans } from "geist/font/sans"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: {
    default: "Dubai Real Estate CMS",
    template: `%s | Dubai Real Estate`,
  },
  description:
    "All in one CMS to manage content for multiple high performance lead generating website.",
  openGraph: {
    description:
      "All in one CMS to manage content for multiple high performance lead generating website.",
    images: [
      "https://binghatti-gems.com/uploads/images/2023-05/JumeirahVillageCircle2.jpg",
    ],
    url: "",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <AuthWrapper>
      <html lang='en' suppressHydrationWarning>
        <head>
          <link
            rel='preload'
            href='https://utfs.io/f/31dba2ff-6c3b-4927-99cd-b928eaa54d5f-5w20ij.png'
            as='image'
          />
          <link
            rel='preload'
            href='https://utfs.io/f/69a12ab1-4d57-4913-90f9-38c6aca6c373-1txg2.png'
            as='image'
          />
        </head>
        <body className={GeistSans.className}>
          <Provider>
            <ThemeProvider
              attribute='class'
              defaultTheme='system'
              enableSystem
              disableTransitionOnChange>
              {children}
              <Toaster />
            </ThemeProvider>
          </Provider>
          <Analytics />
        </body>
      </html>
    </AuthWrapper>
  )
}
