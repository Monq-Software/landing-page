"use client"

import { useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  Code,
  Users,
  Lightbulb,
  BarChart3,
  CheckCircle,
  Clock,
  Zap,
  ExternalLink,
  MessageCircle,
  Linkedin,
  Mail,
} from "lucide-react"
import { motion } from "framer-motion"

// Animações
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
      <header className="container mx-auto py-6 sticky top-0 z-50 bg-[#00010D]/90 backdrop-blur-sm">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-[#595956] rounded-md flex items-center justify-center">
              <span className="text-[#F2F2F0] font-bold">M</span>
            </div>
            <span className="text-[#F2F2F0] font-medium">MONQ Software</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <Link href="#servicos" className="text-[#8C8C88] hover:text-[#F2F2F0] transition-colors">
              Serviços
            </Link>
            <Link href="#processo" className="text-[#8C8C88] hover:text-[#F2F2F0] transition-colors">
              Processo
            </Link>
            <Link href="#projetos" className="text-[#8C8C88] hover:text-[#F2F2F0] transition-colors">
              Projetos
            </Link>
            <Link href="#equipe" className="text-[#8C8C88] hover:text-[#F2F2F0] transition-colors">
              Equipe
            </Link>
            <Link href="#contato" className="text-[#8C8C88] hover:text-[#F2F2F0] transition-colors">
              Contato
            </Link>
          </div>
          <Button variant="outline" className="hidden md:flex border-[#595956] text-[#F2F2F0] hover:bg-[#595956]/20">
            Blog
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden text-[#F2F2F0]">
            <span className="sr-only">Abrir menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </nav>
      </header>

      <main className="flex-1">
        {/* Seção Hero */}
        <section className="relative overflow-hidden py-20 md:py-32">
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col md:flex-row items-center">
              <motion.div className="md:w-1/2 mb-10 md:mb-0" initial="hidden" animate="visible" variants={fadeIn}>
                <div className="flex gap-1 mb-4">
                  <Badge className="bg-[#595956] hover:bg-[#595956]/80">Software</Badge>
                  <Badge className="bg-[#595956] hover:bg-[#595956]/80">Desenvolvimento</Badge>
                  <Badge className="bg-[#595956] hover:bg-[#595956]/80">Soluções</Badge>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-[#F2F2F0] mb-4 leading-tight">
                  Criando o Software
                  <br />
                  do Futuro Hoje!
                </h1>
                <p className="text-xl text-[#8C8C88] mb-8 max-w-lg">
                  Transformando Ideias em Histórias de Sucesso em Software
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-[#595956] hover:bg-[#595956]/80 text-[#F2F2F0]">
                    <span>Vamos Conversar</span>
                    <MessageCircle className="ml-2 h-5 w-5" />
                  </Button>
                  <Button variant="outline" size="lg" className="border-[#595956] text-[#F2F2F0] hover:bg-[#595956]/20">
                    <span>Ver Projetos</span>
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </motion.div>
              <motion.div
                className="md:w-1/2 flex justify-center"
                initial={{ opacity: 0, rotate: -10 }}
                animate={{ opacity: 1, rotate: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <div className="relative w-80 h-80">
                  <Image
                    src="/abstract-3d-spiral.png"
                    alt="Visualização 3D abstrata"
                    width={400}
                    height={400}
                    className="animate-slow-spin"
                  />
                </div>
              </motion.div>
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#00010D] via-[#00010D]/95 to-[#00010D]"></div>
        </section>

        {/* Seção de Estatísticas */}
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
                    Design
                    <br />
                    Desenvolver
                    <br />
                    Entregar
                  </h2>
                  <p className="text-[#8C8C88] mb-4">
                    Nossa abordagem abrangente para o desenvolvimento de software garante que seu projeto tenha sucesso
                    em todas as etapas.
                  </p>
                </div>
                <Image
                  src="/abstract-code-purple.png"
                  alt="Design Desenvolver Entregar"
                  width={600}
                  height={300}
                  className="w-full h-auto"
                />
              </motion.div>
              <div className="grid grid-cols-1 gap-6">
                <motion.div className="bg-[#0D0D0D] border border-[#595956]/20 p-6 rounded-xl" variants={fadeIn}>
                  <h3 className="text-[#F2F2F0] text-lg mb-2">Habilidades</h3>
                  <div className="flex items-center gap-2 mb-4">
                    <Code className="text-[#8C8C88] h-5 w-5" />
                    <span className="text-[#8C8C88]">Desenvolvimento Full-stack</span>
                  </div>
                  <div className="flex items-center gap-2 mb-4">
                    <Users className="text-[#8C8C88] h-5 w-5" />
                    <span className="text-[#8C8C88]">Design UX/UI</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Lightbulb className="text-[#8C8C88] h-5 w-5" />
                    <span className="text-[#8C8C88]">Arquitetura de Soluções</span>
                  </div>
                </motion.div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <motion.div variants={fadeIn}>
                    <Card className="bg-[#0D0D0D] border-[#595956]/20">
                      <CardContent className="p-6">
                        <div className="text-[#F2F2F0] text-4xl font-bold mb-2">500+</div>
                        <p className="text-[#8C8C88]">Projetos Concluídos</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                  <motion.div variants={fadeIn}>
                    <Card className="bg-[#0D0D0D] border-[#595956]/20">
                      <CardContent className="p-6">
                        <div className="text-[#F2F2F0] text-4xl font-bold mb-2">15+</div>
                        <p className="text-[#8C8C88]">Anos de Experiência</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                  <motion.div variants={fadeIn}>
                    <Card className="bg-[#0D0D0D] border-[#595956]/20">
                      <CardContent className="p-6">
                        <div className="text-[#F2F2F0] text-4xl font-bold mb-2">1M+</div>
                        <p className="text-[#8C8C88]">Horas de Código</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Seção de Serviços */}
        <section id="servicos" className="py-20 bg-[#00010D]">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#F2F2F0] mb-4">Nossos Serviços</h2>
              <p className="text-xl text-[#8C8C88] max-w-3xl mx-auto">
                Soluções abrangentes de software adaptadas às necessidades do seu negócio
              </p>
            </motion.div>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeIn}>
                <Card className="bg-[#0D0D0D] border-[#595956]/20 hover:bg-[#0D0D0D]/80 transition-colors group">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-[#595956]/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#595956]/40 transition-colors">
                      <Users className="text-[#8C8C88] h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold text-[#F2F2F0] mb-2">Aumento de Talentos</h3>
                    <p className="text-[#8C8C88] mb-4">
                      Reforce sua equipe com nossos desenvolvedores qualificados para acelerar a entrega do seu projeto.
                    </p>
                    <Link
                      href="#"
                      className="text-[#595956] flex items-center group-hover:text-[#8C8C88] transition-colors"
                    >
                      Saiba mais
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div variants={fadeIn}>
                <Card className="bg-[#0D0D0D] border-[#595956]/20 hover:bg-[#0D0D0D]/80 transition-colors group">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-[#595956]/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#595956]/40 transition-colors">
                      <Code className="text-[#8C8C88] h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold text-[#F2F2F0] mb-2">Engenharia de Produtos</h3>
                    <p className="text-[#8C8C88] mb-4">
                      Desenvolvimento completo de produtos de software personalizados, do conceito à implantação.
                    </p>
                    <Link
                      href="#"
                      className="text-[#595956] flex items-center group-hover:text-[#8C8C88] transition-colors"
                    >
                      Saiba mais
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div variants={fadeIn}>
                <Card className="bg-[#0D0D0D] border-[#595956]/20 hover:bg-[#0D0D0D]/80 transition-colors group">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-[#595956]/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#595956]/40 transition-colors">
                      <Lightbulb className="text-[#8C8C88] h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold text-[#F2F2F0] mb-2">Serviços para Startups</h3>
                    <p className="text-[#8C8C88] mb-4">
                      Soluções especializadas para startups levarem ideias inovadoras ao mercado rapidamente.
                    </p>
                    <Link
                      href="#"
                      className="text-[#595956] flex items-center group-hover:text-[#8C8C88] transition-colors"
                    >
                      Saiba mais
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div variants={fadeIn}>
                <Card className="bg-[#0D0D0D] border-[#595956]/20 hover:bg-[#0D0D0D]/80 transition-colors group">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-[#595956]/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#595956]/40 transition-colors">
                      <BarChart3 className="text-[#8C8C88] h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold text-[#F2F2F0] mb-2">Consultoria Tecnológica</h3>
                    <p className="text-[#8C8C88] mb-4">
                      Orientação estratégica sobre decisões tecnológicas para otimizar os resultados do seu negócio.
                    </p>
                    <Link
                      href="#"
                      className="text-[#595956] flex items-center group-hover:text-[#8C8C88] transition-colors"
                    >
                      Saiba mais
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Seção de Processo */}
        <section id="processo" className="py-20 bg-[#0D0D0D]">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <Badge className="bg-[#595956] hover:bg-[#595956]/80 mb-4">Nossa Metodologia</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-[#F2F2F0] mb-4">Nosso Processo Ágil</h2>
              <p className="text-xl text-[#8C8C88] max-w-3xl mx-auto">
                Seguimos nossa maneira única de entregar nossos valores de flexibilidade e escalabilidade
              </p>
            </motion.div>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeIn}>
                <Card className="bg-[#00010D] border-[#595956]/20 hover:bg-[#00010D]/80 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-xl font-bold text-[#F2F2F0]">Planejamento</h3>
                      <Badge className="bg-[#595956]">01</Badge>
                    </div>
                    <p className="text-[#8C8C88]">
                      Planejamento abrangente do projeto para definir escopo, cronograma e recursos necessários para o
                      sucesso.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div variants={fadeIn}>
                <Card className="bg-[#00010D] border-[#595956]/20 hover:bg-[#00010D]/80 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-xl font-bold text-[#F2F2F0]">Definindo a Experiência do Usuário</h3>
                      <Badge className="bg-[#595956]">02</Badge>
                    </div>
                    <p className="text-[#8C8C88]">
                      Criação de experiências de usuário intuitivas e envolventes através de design cuidadoso.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div variants={fadeIn}>
                <Card className="bg-[#00010D] border-[#595956]/20 hover:bg-[#00010D]/80 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-xl font-bold text-[#F2F2F0]">Fundações Técnicas</h3>
                      <Badge className="bg-[#595956]">03</Badge>
                    </div>
                    <p className="text-[#8C8C88]">
                      Construção de arquitetura robusta e infraestrutura técnica para suportar sua solução.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div variants={fadeIn}>
                <Card className="bg-[#00010D] border-[#595956]/20 hover:bg-[#00010D]/80 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-xl font-bold text-[#F2F2F0]">Implementação</h3>
                      <Badge className="bg-[#595956]">04</Badge>
                    </div>
                    <p className="text-[#8C8C88]">
                      Desenvolvimento ágil com sprints regulares e integração contínua para código de qualidade.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div variants={fadeIn}>
                <Card className="bg-[#00010D] border-[#595956]/20 hover:bg-[#00010D]/80 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-xl font-bold text-[#F2F2F0]">Ciclo de Feedback</h3>
                      <Badge className="bg-[#595956]">05</Badge>
                    </div>
                    <p className="text-[#8C8C88]">
                      Testes iterativos e refinamento com base no feedback do cliente para garantir a satisfação.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div variants={fadeIn}>
                <Card className="bg-[#00010D] border-[#595956]/20 hover:bg-[#00010D]/80 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-xl font-bold text-[#F2F2F0]">O Lançamento</h3>
                      <Badge className="bg-[#595956]">06</Badge>
                    </div>
                    <p className="text-[#8C8C88]">
                      Implantação tranquila e suporte contínuo para garantir que sua solução prospere em produção.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Seção da Equipe */}
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
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-[#F2F2F0] mb-4">A Equipe MONQ Software</h3>
                  <p className="text-[#8C8C88] mb-6">
                    Nossa equipe diversificada de especialistas reúne décadas de experiência combinada em
                    desenvolvimento de software, design e gerenciamento de projetos para entregar resultados
                    excepcionais para nossos clientes.
                  </p>
                </div>
                <Image
                  src="/software-team-office.png"
                  alt="Equipe MONQ Software"
                  width={1200}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeIn}>
                <Card className="bg-[#0D0D0D] border-[#595956]/20">
                  <CardContent className="p-6">
                    <div className="mb-4 rounded-xl overflow-hidden">
                      <Image
                        src="/male-software-developer-portrait.png"
                        alt="Membro da Equipe"
                        width={300}
                        height={300}
                        className="w-full h-auto"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-[#F2F2F0] mb-1">João Silva</h3>
                    <p className="text-[#8C8C88] mb-3">Arquiteto de Software Líder</p>
                    <p className="text-[#8C8C88] mb-4">
                      Mais de 15 anos de experiência em projetar arquiteturas de software escaláveis e liderar equipes
                      de desenvolvimento.
                    </p>
                    <div className="flex gap-2">
                      <Badge className="bg-[#595956]/20 text-[#8C8C88]">Java</Badge>
                      <Badge className="bg-[#595956]/20 text-[#8C8C88]">AWS</Badge>
                      <Badge className="bg-[#595956]/20 text-[#8C8C88]">Microserviços</Badge>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div variants={fadeIn}>
                <Card className="bg-[#0D0D0D] border-[#595956]/20">
                  <CardContent className="p-6">
                    <div className="mb-4 rounded-xl overflow-hidden">
                      <Image
                        src="/placeholder-xjxpt.png"
                        alt="Membro da Equipe"
                        width={300}
                        height={300}
                        className="w-full h-auto"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-[#F2F2F0] mb-1">Ana Oliveira</h3>
                    <p className="text-[#8C8C88] mb-3">Líder de Desenvolvimento Frontend</p>
                    <p className="text-[#8C8C88] mb-4">
                      Mais de 10 anos especializada na criação de interfaces de usuário responsivas, acessíveis e de
                      alto desempenho.
                    </p>
                    <div className="flex gap-2">
                      <Badge className="bg-[#595956]/20 text-[#8C8C88]">React</Badge>
                      <Badge className="bg-[#595956]/20 text-[#8C8C88]">TypeScript</Badge>
                      <Badge className="bg-[#595956]/20 text-[#8C8C88]">UX/UI</Badge>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div variants={fadeIn}>
                <Card className="bg-[#0D0D0D] border-[#595956]/20">
                  <CardContent className="p-6">
                    <div className="mb-4 rounded-xl overflow-hidden">
                      <Image
                        src="/male-software-developer-portrait.png"
                        alt="Membro da Equipe"
                        width={300}
                        height={300}
                        className="w-full h-auto"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-[#F2F2F0] mb-1">Carlos Santos</h3>
                    <p className="text-[#8C8C88] mb-3">Líder de Desenvolvimento Backend</p>
                    <p className="text-[#8C8C88] mb-4">
                      Mais de 12 anos construindo sistemas backend robustos e escaláveis e otimizando o desempenho de
                      bancos de dados.
                    </p>
                    <div className="flex gap-2">
                      <Badge className="bg-[#595956]/20 text-[#8C8C88]">Node.js</Badge>
                      <Badge className="bg-[#595956]/20 text-[#8C8C88]">Python</Badge>
                      <Badge className="bg-[#595956]/20 text-[#8C8C88]">MongoDB</Badge>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Seção de Projetos */}
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
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeIn}>
                <Card className="bg-[#00010D] border-[#595956]/20 overflow-hidden">
                  <div className="relative">
                    <Image
                      src="/fintech-dashboard.png"
                      alt="Projeto Fintech"
                      width={600}
                      height={300}
                      className="w-full h-auto"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-[#595956]">Fintech</Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-[#F2F2F0] mb-2">Modernização de Plataforma Bancária</h3>
                    <p className="text-[#8C8C88] mb-4">
                      Redesenhamos e reconstruímos uma plataforma bancária legada em uma solução moderna e escalável com
                      segurança e experiência do usuário aprimoradas.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="outline" className="border-[#595956]/40 text-[#8C8C88]">
                        React
                      </Badge>
                      <Badge variant="outline" className="border-[#595956]/40 text-[#8C8C88]">
                        Node.js
                      </Badge>
                      <Badge variant="outline" className="border-[#595956]/40 text-[#8C8C88]">
                        PostgreSQL
                      </Badge>
                      <Badge variant="outline" className="border-[#595956]/40 text-[#8C8C88]">
                        AWS
                      </Badge>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="text-[#8C8C88] h-5 w-5" />
                        <span className="text-[#8C8C88]">40% mais rápido</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="text-[#8C8C88] h-5 w-5" />
                        <span className="text-[#8C8C88]">+200 mil usuários</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div variants={fadeIn}>
                <Card className="bg-[#00010D] border-[#595956]/20 overflow-hidden">
                  <div className="relative">
                    <Image
                      src="/ecommerce-mobile-app.png"
                      alt="Projeto E-commerce"
                      width={600}
                      height={300}
                      className="w-full h-auto"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-[#595956]">E-commerce</Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-[#F2F2F0] mb-2">Plataforma de Varejo Omnichannel</h3>
                    <p className="text-[#8C8C88] mb-4">
                      Desenvolvemos uma solução abrangente de e-commerce integrando experiências de compra online e em
                      loja com inventário em tempo real.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="outline" className="border-[#595956]/40 text-[#8C8C88]">
                        React Native
                      </Badge>
                      <Badge variant="outline" className="border-[#595956]/40 text-[#8C8C88]">
                        GraphQL
                      </Badge>
                      <Badge variant="outline" className="border-[#595956]/40 text-[#8C8C88]">
                        MongoDB
                      </Badge>
                      <Badge variant="outline" className="border-[#595956]/40 text-[#8C8C88]">
                        Azure
                      </Badge>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <BarChart3 className="text-[#8C8C88] h-5 w-5" />
                        <span className="text-[#8C8C88]">35% aumento nas vendas</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="text-[#8C8C88] h-5 w-5" />
                        <span className="text-[#8C8C88]">99,9% de disponibilidade</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div variants={fadeIn}>
                <Card className="bg-[#00010D] border-[#595956]/20 overflow-hidden">
                  <div className="relative">
                    <Image
                      src="/project3.png"
                      alt="Projeto de Saúde"
                      width={600}
                      height={300}
                      className="w-full h-auto"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-[#595956]">Saúde</Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-[#F2F2F0] mb-2">Sistema de Gestão de Pacientes</h3>
                    <p className="text-[#8C8C88] mb-4">
                      Criamos uma plataforma segura e compatível com LGPD para provedores de saúde gerenciarem registros
                      e consultas de pacientes.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="outline" className="border-[#595956]/40 text-[#8C8C88]">
                        Angular
                      </Badge>
                      <Badge variant="outline" className="border-[#595956]/40 text-[#8C8C88]">
                        Java
                      </Badge>
                      <Badge variant="outline" className="border-[#595956]/40 text-[#8C8C88]">
                        Oracle
                      </Badge>
                      <Badge variant="outline" className="border-[#595956]/40 text-[#8C8C88]">
                        GCP
                      </Badge>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <Zap className="text-[#8C8C88] h-5 w-5" />
                        <span className="text-[#8C8C88]">50% fluxos mais rápidos</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="text-[#8C8C88] h-5 w-5" />
                        <span className="text-[#8C8C88]">Zero violações de segurança</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div variants={fadeIn}>
                <Card className="bg-[#00010D] border-[#595956]/20 overflow-hidden">
                  <div className="relative">
                    <Image
                      src="/logistics-dashboard.png"
                      alt="Projeto de Logística"
                      width={600}
                      height={300}
                      className="w-full h-auto"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-[#595956]">Logística</Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-[#F2F2F0] mb-2">
                      Plataforma de Otimização de Cadeia de Suprimentos
                    </h3>
                    <p className="text-[#8C8C88] mb-4">
                      Construímos um sistema de gerenciamento logístico com IA que otimiza rotas e inventário em cadeias
                      de suprimentos globais.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="outline" className="border-[#595956]/40 text-[#8C8C88]">
                        Python
                      </Badge>
                      <Badge variant="outline" className="border-[#595956]/40 text-[#8C8C88]">
                        TensorFlow
                      </Badge>
                      <Badge variant="outline" className="border-[#595956]/40 text-[#8C8C88]">
                        Vue.js
                      </Badge>
                      <Badge variant="outline" className="border-[#595956]/40 text-[#8C8C88]">
                        Kubernetes
                      </Badge>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <BarChart3 className="text-[#8C8C88] h-5 w-5" />
                        <span className="text-[#8C8C88]">28% redução de custos</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="text-[#8C8C88] h-5 w-5" />
                        <span className="text-[#8C8C88]">22% entregas mais rápidas</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
            <motion.div
              className="mt-12 text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <Button variant="outline" size="lg" className="border-[#595956] text-[#F2F2F0] hover:bg-[#595956]/20">
                <span>Ver Todos os Estudos de Caso</span>
                <ExternalLink className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Seção de Contato */}
        <section id="contato" className="py-20 bg-[#00010D]">
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-3xl mx-auto text-center mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#F2F2F0] mb-4">Fale Conosco</h2>
              <p className="text-xl text-[#8C8C88]">
                Estamos aqui para ajudar você a transformar suas ideias em realidade. Vamos discutir como podemos fazer
                do seu próximo projeto de software um sucesso.
              </p>
            </motion.div>
            <motion.div
              className="max-w-md mx-auto"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <Card className="bg-[#0D0D0D] border-[#595956]/20">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-[#F2F2F0] mb-6">
                    Vamos conversar sobre a arquitetura da sua próxima solução.
                  </h3>
                  <div className="space-y-6">
                    <Button size="lg" className="w-full bg-[#595956] hover:bg-[#595956]/80 text-[#F2F2F0]">
                      <MessageCircle className="mr-2 h-5 w-5" />
                      <span>Conectar via WhatsApp</span>
                    </Button>
                    <div className="flex gap-4">
                      <Button
                        variant="outline"
                        size="lg"
                        className="flex-1 border-[#595956]/40 text-[#F2F2F0] hover:bg-[#595956]/20"
                      >
                        <Mail className="mr-2 h-5 w-5" />
                        <span>Email</span>
                      </Button>
                      <Button
                        variant="outline"
                        size="lg"
                        className="flex-1 border-[#595956]/40 text-[#F2F2F0] hover:bg-[#595956]/20"
                      >
                        <Linkedin className="mr-2 h-5 w-5" />
                        <span>LinkedIn</span>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="bg-[#0D0D0D] py-12 border-t border-[#595956]/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-[#595956] rounded-md flex items-center justify-center">
                  <span className="text-[#F2F2F0] font-bold">M</span>
                </div>
                <span className="text-[#F2F2F0] font-medium">MONQ Software</span>
              </div>
              <p className="text-[#8C8C88] mb-4">Transformando Ideias em Histórias de Sucesso em Software</p>
              <div className="flex gap-4">
                <Link href="#" className="text-[#8C8C88] hover:text-[#F2F2F0] transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </Link>
                <Link href="#" className="text-[#8C8C88] hover:text-[#F2F2F0] transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </Link>
                <Link href="#" className="text-[#8C8C88] hover:text-[#F2F2F0] transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </Link>
              </div>
            </div>
            <div>
              <h3 className="text-[#F2F2F0] font-bold mb-4">Serviços</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-[#8C8C88] hover:text-[#F2F2F0] transition-colors">
                    Aumento de Talentos
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-[#8C8C88] hover:text-[#F2F2F0] transition-colors">
                    Engenharia de Produtos
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-[#8C8C88] hover:text-[#F2F2F0] transition-colors">
                    Serviços para Startups
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-[#8C8C88] hover:text-[#F2F2F0] transition-colors">
                    Consultoria Tecnológica
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-[#F2F2F0] font-bold mb-4">Empresa</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-[#8C8C88] hover:text-[#F2F2F0] transition-colors">
                    Sobre Nós
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-[#8C8C88] hover:text-[#F2F2F0] transition-colors">
                    Nossa Equipe
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-[#8C8C88] hover:text-[#F2F2F0] transition-colors">
                    Carreiras
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-[#8C8C88] hover:text-[#F2F2F0] transition-colors">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-[#F2F2F0] font-bold mb-4">Contato</h3>
              <ul className="space-y-2">
                <li className="text-[#8C8C88]">São Paulo, Brasil</li>
                <li>
                  <Link
                    href="mailto:contato@monqsoftware.com"
                    className="text-[#8C8C88] hover:text-[#F2F2F0] transition-colors"
                  >
                    contato@monqsoftware.com
                  </Link>
                </li>
                <li>
                  <Link href="tel:+551199999999" className="text-[#8C8C88] hover:text-[#F2F2F0] transition-colors">
                    +55 11 9999-9999
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-[#595956]/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-[#8C8C88] mb-4 md:mb-0">© 2025 MONQ Software. Todos os direitos reservados.</p>
              <div className="flex gap-6">
                <Link href="#" className="text-[#8C8C88] hover:text-[#F2F2F0] transition-colors">
                  Política de Privacidade
                </Link>
                <Link href="#" className="text-[#8C8C88] hover:text-[#F2F2F0] transition-colors">
                  Termos de Serviço
                </Link>
                <Link href="#" className="text-[#8C8C88] hover:text-[#F2F2F0] transition-colors">
                  Cookies
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
