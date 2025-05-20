"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, MessageCircle } from "lucide-react"

export function Hero() {
  const [particles, setParticles] = useState<Array<{ x: number; y: number; size: number; opacity: number }>>([])

  useEffect(() => {
    // Inicializar partículas apenas no lado do cliente
    const newParticles = Array.from({ length: 20 }).map(() => ({
      x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1000),
      y: Math.random() * (typeof window !== "undefined" ? window.innerHeight : 800),
      size: Math.random() * 4 + 1,
      opacity: Math.random() * 0.5 + 0.1,
    }))
    setParticles(newParticles)
  }, [])

  return (
    <section id="home" className="relative overflow-hidden py-20 md:py-32">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div
            className="md:w-1/2 mb-10 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-[#F2F2F0] mb-4 leading-tight">
              Engenharia Digital 
              <br />
              para Soluções de Alto Impacto!
            </h1>
            <p className="text-xl text-[#8C8C88] mb-8 max-w-lg">
              Unimos inovação e excelência para transformar o seu negócio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-[#595956] hover:bg-[#595956]/80 text-[#F2F2F0] group"
                onClick={() => window.open('https://wa.me/5571999648913?text=Tenho%20uma%20ideia%20de%20software')}
              >
                <span>Vamos Conversar</span>
                <MessageCircle className="ml-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => window.location.href = "#projetos"}
                className="border-[#595956] text-[#F2F2F0] hover:bg-[#595956]/20 group"
              >
                <span>Ver Projetos</span>
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </motion.div>
          <motion.div
            className="md:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <div className="relative w-80 h-80 group">
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-[#ff0000] to-[#00ffff] rounded-2xl"
                animate={{
                  scale: [1, 1.05, 1],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 4,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "loop",
                }}
              />
              <Image
                src="/monq-logo.png"
                alt="Visualização 3D abstrata"
                width={400}
                height={400}
                className="relative z-10 w-full h-full object-cover rounded-2xl 
        group-hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] 
        transition-shadow duration-300"
              />
              <motion.div
                className="absolute inset-0 border-2 border-transparent 
        group-hover:border-[#00ffff]/50 rounded-2xl"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Partículas de fundo */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="particles-container">
          {particles.map((particle, index) => (
            <motion.div
              key={index}
              className="particle"
              initial={{
                x: particle.x,
                y: particle.y,
                opacity: particle.opacity,
                scale: Math.random() * 0.5 + 0.5,
              }}
              animate={{
                y: [null, Math.random() * 800],
                x: [null, Math.random() * 1000],
              }}
              transition={{
                duration: Math.random() * 20 + 10,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
              style={{
                position: "absolute",
                width: particle.size + "px",
                height: particle.size + "px",
                borderRadius: "50%",
                backgroundColor: "#595956",
              }}
            />
          ))}
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-[#00010D] via-[#00010D]/95 to-[#00010D]"></div>
    </section>
  )
}
