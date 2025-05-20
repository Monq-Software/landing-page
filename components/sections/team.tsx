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
    linkedin: "https://www.linkedin.com/in/atila-bezerra/",
    role: "Arquiteto de Soluções | Infraestrutura & Integrações",
    description:
      "Possui sólida experiência com APIs governamentais, integração com dispositivos biométricos, segurança da informação, infraestrutura escalável e integração de hardwares especializados com aplicações .NET.",
    skills: ["C#", ".NET Core e Framework", "Aplicações Windows", "RESTAPIs", "Azure Cloud", "Docker e Kubernetes", "CI/CD", "SQL e NoSQL", "OIDC", "Observabilidade"],
    image: "/team/atila-almeida.jpg",
  },
  {
    linkedin: "https://www.linkedin.com/in/gabpontes/",
    name: "Gabriel Pontes",
    role: "Arquiteto de Soluções | Software & Cybersecurity",
    description: "Especializado em soluções de software modernas com ênfase em segurança digital, integrando biometria, criptografia e infraestrutura em nuvem para garantir alta confiabilidade e proteção de dados.",
    skills: [
      "Azure Cloud",
      "AWS",
      "Kubernetes",
      "Microservices",
      "Clean Architecture",
      "Domain-Driven Design (DDD)",
      "CI/CD",
      "DevSecOps",
      "Cybersecurity",
      "OWASP",
      "MITRE ATT&CK",
      "Purple Team"
    ],
    image: "/team/gabriel-pontes.jpg"
  },
  {
    linkedin: "https://linkedin.com/in/lucaslimacoder",
    name: "Lucas Lima",
    role: "Líder de Desenvolvimento Frontend",
    description: "Especializado na criação de interfaces modernas e responsivas com foco em experiência do usuário.",
    skills: ["Node.js", "MongoDB", "TypeScript", "UX/UI", "Agentes de IA"],
    image: "/team/lucas-lima.jpg",
  },
  {
    linkedin: "https://www.linkedin.com/in/mau-me/",
    name: "Mauricio Menezes",
    role: "Especialista em IA e Machine Learning",
    description: "Cria soluções inovadoras e eficientes utilizando inteligência artificial de formas práticas e escaláveis.",
    skills: ["Inteligência Artificial", "Machine Learning", "Visão Computacional", "Cloud", "Python"],
    image: "/team/mauricio-menezes.jpg",
  }
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
  "Arquitetura de Software",
  "DevOps",
  "Microsserviços",
  "Big Data Analytics",
  "UX/UI Design",
  "Machine Learning",
  "Análise de Vulnerabilidades",
  "Resposta a Incidentes",
  "Pentest e Red Teaming",
  "Segurança em Nuvem",
  "Gerenciamento de Identidade e Acesso (IAM)",
  "Defesa Cibernética (Blue Team)",
  "Zero Trust Architecture",
  "Hardening de Sistemas"
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
            Conheça os profissionais por trás de nossos projetos de sucesso
          </p>
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
              <Card className="bg-[#0D0D0D] border-[#595956]/20 h-full relative overflow-hidden group">
                <CardContent className="p-6">
                  <div className="mb-4 rounded-xl overflow-hidden group relative">
                    {member.linkedin && (
                      <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                        <Image
                          src={member.image}
                          alt={member.name}
                          width={300}
                          height={300}
                          className="w-full h-auto transition-transform group-hover:scale-105 duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#00010D] to-transparent opacity-60"></div>
                      </a>
                    )}
                    {!member.linkedin && (
                      <>
                        <Image
                          src={member.image}
                          alt={member.name}
                          width={300}
                          height={300}
                          className="w-full h-auto transition-transform group-hover:scale-105 duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#00010D] to-transparent opacity-60"></div>
                      </>
                    )}
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
                <div
                  className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#ff0000] to-[#00ffff]
                    scale-x-0 origin-right group-hover:scale-x-100 transition-transform duration-400 ease-out"
                ></div>
                <div
                  className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#ff0000] to-[#00ffff]
                    scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-400 ease-out"
                ></div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <div className="bg-[#0D0D0D] rounded-2xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
              <div className="flex flex-col justify-">
                <div>
                  <h3 className="text-2xl font-bold text-[#F2F2F0] mb-4">Atuamos em diversas áreas</h3>
                  <p className="text-[#8C8C88] text-xl mb-6">
                    Nossa equipe diversificada reúne experiência combinada em diversas áreas de software,
                    permitindo que entreguemos soluções completas e integradas para qualquer desafio tecnológico.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-5 mt-6">
                  {expertise.map((skill, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center gap-2"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Badge className="bg-[#595956]/20 text-[#8C8C88] cursor-pointer">{skill}</Badge>
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className="flex justify-center items-center">
                <Image
                  src="assets/image-desc.jpg"
                  alt="Equipe MONQ Software"
                  width={500}
                  height={300}
                  className="rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}