"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Users, Lightbulb } from "lucide-react"

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

export function Stats() {
  return (
    <section className="py-16 bg-[#0D0D0D]">
      <div className="container mx-auto px-4">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <motion.div className="bg-[#00010D] rounded-2xl overflow-hidden" variants={fadeIn}>
            <div className="p-8">
              <h2 className="text-3xl md:text-4xl font-bold text-[#F2F2F0] mb-4">
                <span className="text-[#595956]">M</span>odularidade
                <br />
                <span className="text-[#595956]">O</span>rquestração
                <br />
                <span className="text-[#595956]">N</span>etworking
                <br />
                <span className="text-[#595956]">Q</span>ualidade
              </h2>
              <p className="text-[#8C8C88] mb-4">
                Nossa abordagem simboliza raciocínio rápido, adaptação, criatividade e solução de problemas para
                garantir que seu projeto tenha sucesso em todas as etapas.
              </p>
            </div>
            <Image
              src="/monq-logo.png"
              alt="Design Desenvolver Entregar"
              width={600}
              height={300}
              className="w-full h-auto"
            />
          </motion.div>
          <div className="grid grid-cols-1 gap-6">
            <motion.div className="bg-[#0D0D0D] border border-[#595956]/20 p-6 rounded-xl" variants={fadeIn}>
              <h3 className="text-[#F2F2F0] text-lg mb-2">Habilidades</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center gap-2 mb-4">
                  <Code className="text-[#8C8C88] h-5 w-5" />
                  <span className="text-[#8C8C88]">Desenvolvimento Full-stack</span>
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <Users className="text-[#8C8C88] h-5 w-5" />
                  <span className="text-[#8C8C88]">Design UX/UI</span>
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <Lightbulb className="text-[#8C8C88] h-5 w-5" />
                  <span className="text-[#8C8C88]">Arquitetura de Soluções</span>
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <Code className="text-[#8C8C88] h-5 w-5" />
                  <span className="text-[#8C8C88]">Inteligência Artificial</span>
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <Users className="text-[#8C8C88] h-5 w-5" />
                  <span className="text-[#8C8C88]">DevOps & Cloud</span>
                </div>
                <div className="flex items-center gap-2">
                  <Lightbulb className="text-[#8C8C88] h-5 w-5" />
                  <span className="text-[#8C8C88]">Segurança & Compliance</span>
                </div>
              </div>
            </motion.div>
            {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div variants={fadeIn}>
                <Card className="bg-[#0D0D0D] border-[#595956]/20 h-full">
                  <CardContent className="p-6">
                    <div className="text-[#F2F2F0] text-4xl font-bold mb-2">500+</div>
                    <p className="text-[#8C8C88]">Projetos Concluídos</p>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div variants={fadeIn}>
                <Card className="bg-[#0D0D0D] border-[#595956]/20 h-full">
                  <CardContent className="p-6">
                    <div className="text-[#F2F2F0] text-4xl font-bold mb-2">15+</div>
                    <p className="text-[#8C8C88]">Anos de Experiência</p>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div variants={fadeIn}>
                <Card className="bg-[#0D0D0D] border-[#595956]/20 h-full">
                  <CardContent className="p-6">
                    <div className="text-[#F2F2F0] text-4xl font-bold mb-2">1M+</div>
                    <p className="text-[#8C8C88]">Horas de Código</p>
                  </CardContent>
                </Card>
              </motion.div>
            </div> */}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
