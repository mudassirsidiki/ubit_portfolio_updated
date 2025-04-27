import type React from "react"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}
