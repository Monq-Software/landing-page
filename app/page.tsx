"use client"

import { useEffect } from "react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { BackToTop } from "@/components/ui/back-to-top"
import { Hero } from "@/components/sections/hero"
import { Stats } from "@/components/sections/stats"
import { Services } from "@/components/sections/services"
import { Process } from "@/components/sections/process"
import { Team } from "@/components/sections/team"
import { Projects } from "@/components/sections/projects"
import { Contact } from "@/components/sections/contact"

export default function Home() {
  // Adiciona smooth scroll para navegação
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const anchor = target.closest("a")

      if (anchor && anchor.hash && anchor.hash.startsWith("#")) {
        e.preventDefault()
        const targetElement = document.querySelector(anchor.hash)
        if (targetElement) {
          window.scrollTo({
            top: targetElement.getBoundingClientRect().top + window.scrollY - 100,
            behavior: "smooth",
          })
        }
      }
    }

    document.addEventListener("click", handleAnchorClick)
    return () => document.removeEventListener("click", handleAnchorClick)
  }, [])

  return (
    <div className="flex flex-col min-h-screen bg-[#00010D]">
      <Header />

      <main className="flex-1">
        <Hero />
        <Stats />
        <Team />
        <Projects />
        <Services />
        <Process />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
    </div>
  )
}
