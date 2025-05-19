"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, CheckCircle, Users, BarChart3, Clock, Zap } from "lucide-react"

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

const projects = [
  {
    title: "Modernização de Plataforma Bancária",
    description:
      "Redesenhamos e reconstruímos uma plataforma bancária legada em uma solução moderna e escalável com segurança e experiência do usuário aprimoradas.",
    image: "assets/place-holder.png",
    technologies: ["React", "Node.js", "PostgreSQL", "AWS"],
    stats: [
      { icon: CheckCircle, text: "40% mais rápido" },
      { icon: Users, text: "+200 mil usuários" },
    ],
  },
  {
    title: "Plataforma de Varejo Omnichannel",
    description:
      "Desenvolvemos uma solução abrangente de e-commerce integrando experiências de compra online e em loja com inventário em tempo real.",
    image: "assets/place-holder.png",
    technologies: ["React Native", "GraphQL", "MongoDB", "Azure"],
    stats: [
      { icon: BarChart3, text: "35% aumento nas vendas" },
      { icon: Clock, text: "99,9% de disponibilidade" },
    ],
  },
  {
    title: "Sistema de Captura Biométrica",
    description:
      "Desenvolvemos um sistema avançado de captura biométrica incluindo assinatura digital, impressão digital e reconhecimento facial para instituições financeiras.",
    image: "assets/place-holder.png",
    category: "Segurança",
    technologies: ["Java", "OpenCV", "PostgreSQL", "Docker"],
    stats: [
      { icon: CheckCircle, text: "99,7% precisão" },
      { icon: Clock, text: "Verificação em 2 segundos" },
    ],
  },
  {
    title: "Integração com Sistemas Federais",
    description:
      "Criamos uma plataforma de integração com sistemas do SERPRO para validação de documentos e informações cadastrais em tempo real.",
    image: "assets/place-holder.png",
    category: "Governo",
    technologies: ["Java", "Spring Boot", "Oracle", "Kubernetes"],
    stats: [
      { icon: Zap, text: "Milhões de requisições/dia" },
      { icon: CheckCircle, text: "Zero falhas de segurança" },
    ],
  },
  {
    title: "Plataforma de Integração Multiorgãos",
    description:
      "Desenvolvemos um sistema que integra dados entre múltiplos órgãos governamentais como polícia, Detran e outros, facilitando a troca segura de informações.",
    image: "assets/place-holder.png",
    technologies: ["C#", ".NET Core", "SQL Server", "Azure"],
    stats: [
      { icon: Users, text: "+30 órgãos integrados" },
      { icon: Clock, text: "Resposta em milissegundos" },
    ],
  },
  {
    title: "Sistema de IA Multimodal",
    description:
      "Criamos uma solução de inteligência artificial para reconhecimento e extração de informações de imagens e textos para automatizar processos documentais.",
    image: "assets/place-holder.png",
    technologies: ["Python", "TensorFlow", "PyTorch", "GCP"],
    stats: [
      { icon: CheckCircle, text: "95% precisão" },
      { icon: BarChart3, text: "70% redução de tempo" },
    ],
  },
]

export function Projects() {
  return (
    <section id="projetos" className="py-20 bg-[#0D0D0D]">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#F2F2F0] mb-4">Nossos Projetos</h2>
          <p className="text-xl text-[#8C8C88] max-w-3xl mx-auto">
            Explore nosso portfólio de soluções de software bem-sucedidas
          </p>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              whileHover={{ scale: 1.05, zIndex: 10 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Card className="bg-[#00010D] border-[#595956]/20 overflow-hidden h-full hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all duration-300">
                <CardContent className="p-6 relative">
                  <h3 className="text-xl font-bold text-[#F2F2F0] mb-2">{project.title}</h3>
                  <p className="text-[#8C8C88] mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, idx) => (
                      <Badge
                        key={idx}
                        className="bg-[#ff0000]/10 text-[#ff0000] border-[#ff0000]/40 hover:bg-[#ff0000]/20 transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center gap-4">
                    {project.stats.map((stat, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <stat.icon className="text-[#00ffff] h-5 w-5" />
                        <span className="text-[#00ffff]">{stat.text}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          className="mt-12 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
        </motion.div>
      </div>
    </section>
  )
}