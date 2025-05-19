"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

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

const teamMembers = [
  {
    name: "Atila Almeida",
    role: "Arquiteto de Software",
    description:
      "Especialista em arquiteturas escaláveis e soluções de alta performance com mais de 12 anos de experiência.",
    skills: ["Java", "AWS", "Microserviços"],
    image: "/team/atila-almeida.jpg",
  },
  {
    name: "Gabriel Pontes",
    role: "Líder de Desenvolvimento Frontend",
    description: "Especializado na criação de interfaces modernas e responsivas com foco em experiência do usuário.",
    skills: ["React", "TypeScript", "UX/UI"],
    image: "/team/gabriel-pontes.jpg",
  },
  {
    name: "Lucas Lima",
    role: "Especialista em IA e Machine Learning",
    description: "Desenvolve soluções inovadoras utilizando inteligência artificial e aprendizado de máquina.",
    skills: ["Python", "TensorFlow", "Computer Vision"],
    image: "/team/lucas-lima.jpg",
  },
  {
    name: "Mauricio Menezes",
    role: "Líder de Desenvolvimento Backend",
    description: "Especialista em sistemas distribuídos e bancos de dados de alta performance.",
    skills: ["Node.js", "MongoDB", "Kubernetes"],
    image: "/team/mauricio-menezes.jpg",
  },
]

const expertise = [
  "Gestão de Projetos",
  "Planejamento Estratégico",
  "Infraestrutura Cloud",
  "Bancos de Dados",
  "Desenvolvimento Full-stack",
  "Inteligência Artificial",
  "Automação de Processos",
  "Interfaces Modernas",
  "Testes Automatizados",
  "Aplicações Mobile",
  "Segurança da Informação",
  "Integração de Sistemas",
]

export function Team() {
  return (
    <section id="equipe" className="py-20 bg-[#00010D]">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#F2F2F0] mb-4">Nossa Equipe de Especialistas</h2>
          <p className="text-xl text-[#8C8C88] max-w-3xl mx-auto">
            Conheça os profissionais talentosos por trás de nossos projetos de sucesso
          </p>
        </motion.div>

        <motion.div
          className="mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <div className="bg-[#0D0D0D] rounded-2xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
              <div>
                <h3 className="text-2xl font-bold text-[#F2F2F0] mb-4">Time Multidisciplinar</h3>
                <p className="text-[#8C8C88] mb-6">
                  Nossa equipe diversificada reúne décadas de experiência combinada em diversas áreas de software,
                  permitindo que entreguemos soluções completas e integradas para qualquer desafio tecnológico.
                </p>
                <div className="grid grid-cols-2 gap-3 mt-6">
                  {expertise.map((skill, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center gap-2"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Badge className="bg-[#595956]/20 text-[#8C8C88]">{skill}</Badge>
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className="flex justify-center items-center">
                <Image
                  src="/software-team-office.png"
                  alt="Equipe MONQ Software"
                  width={500}
                  height={300}
                  className="rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          {teamMembers.map((member, index) => (
            <motion.div key={index} variants={fadeIn}>
              <Card className="bg-[#0D0D0D] border-[#595956]/20 h-full hover:shadow-lg hover:shadow-[#595956]/10 transition-all">
                <CardContent className="p-6">
                  <div className="mb-4 rounded-xl overflow-hidden group relative">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={300}
                      height={300}
                      className="w-full h-auto transition-transform group-hover:scale-105 duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#00010D] to-transparent opacity-60"></div>
                  </div>
                  <h3 className="text-xl font-bold text-[#F2F2F0] mb-1">{member.name}</h3>
                  <p className="text-[#8C8C88] mb-3">{member.role}</p>
                  <p className="text-[#8C8C88] mb-4">{member.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {member.skills.map((skill, idx) => (
                      <Badge key={idx} className="bg-[#595956]/20 text-[#8C8C88]">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
