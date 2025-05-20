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
    title: "Modelo de Machine Learning para Classificação de Sequências Virais",
    description:
      "Desenvolvemos um modelo de aprendizado de máquina não supervisionado para a classificação de sequências genômicas do SARS-CoV-2, o vírus responsável pela COVID-19. Esse modelo é capaz de identificar a qual espécie uma sequência viral pertence e detectar potenciais novas variantes.",
    image: "assets/place-holder.png",
    technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "Jupyter", "BioPython"],
    stats: [
      { icon: CheckCircle, text: "Alta acurácia de classificação." },
      { icon: BarChart3, text: "Milhares de sequências analisadas." },
    ],
  },
  {
    title: "Chat Inteligente para Extração de Dados em Documentos",
    description:
      "Desenvolvemos uma solução de chat interativo, similar ao ChatGPT, que permite a extração de informações relevantes de documentos carregados (PDF, DOCX, TXT, CSV, XLSX, JSON e XML), por meio de consultas em linguagem natural.",
    image: "assets/place-holder.png",
    technologies: ["Python", "LangChain", "OpenAI API", "Pinecone", "FastAPI", "PDF.js"],
    stats: [
      { icon: Users, text: "Usado em jurídico, RH e financeiro." },
      { icon: CheckCircle, text: "Respostas em segundos." },
    ],
  },
  {
    title: "Sistema de IA Multimodal",
    description:
      "Desenvolvemos uma solução de inteligência artificial multimodal voltada para o reconhecimento e extração automática de caracteres de placas de veículos em vídeos capturados por câmeras de segurança. A tecnologia combina modelos de detecção de objetos com LLMs para análise precisa e em tempo real.",
    image: "assets/place-holder.png",
    technologies: ["Python", "TensorFlow", "PyTorch", "OCR", "OpenCV", "GCP"],
    stats: [
      { icon: CheckCircle, text: "95% de precisão média." },
      { icon: BarChart3, text: "70% de redução no tempo de análise." },
    ],
  },
  {
    title: "Sistema de Captura e Identificação Biométrica",
    description:
      "Implementamos um conjunto de aplicações para captura biométrica com reconhecimento facial, leitura de impressões digitais e assinatura eletrônica, em conformidade com padrões do FBI, NIST e portarias estaduais, para validação de documentos civis e pesquisa biométrica avançada, compatível com sistemas ABIS.",
    image: "assets/place-holder.png",
    technologies: ["C#", ".NET Core e Framework", "BioAPI", "SQL Server", "Docker", "WSQ", "EBTS", "NIST SDK"],
    stats: [
      { icon: CheckCircle, text: "Conforme FBI e NIST." },
      { icon: Users, text: "Centenas de milhares de registros processados." },
    ],
  },
  {
    title: "Sistema de Digitalização de Documentos",
    description:
      "Desenvolvemos soluções com OCR e GED para transformar arquivos físicos em acervos digitais indexados, pesquisáveis e acessíveis com alto nível de controle e rastreabilidade.",
    image: "assets/place-holder.png",
    technologies: ["C#", "Tesseract OCR", "Elasticsearch", "Node.js", "Python", "Electron", "Azure", "MongoDB"],
    stats: [
      { icon: BarChart3, text: "Acervo com milhares de documentos." },
      { icon: CheckCircle, text: "Indexação com filtros avançados." },
    ],
  },
  {
    title: "Integração de Gateways de Pagamento",
    description:
      "Integramos sistemas corporativos a gateways de pagamento com emissão de boletos, geração de notas fiscais e ordens de serviço automatizadas, otimizando rotinas financeiras e operacionais.",
    image: "assets/place-holder.png",
    technologies: ["C#", ".NET Core e Framework", "REST APIs", "ERP Integrations", "SQLServer", "Python", "Azure Functions"],
    stats: [
      { icon: Clock, text: "Processamento em tempo real." },
      { icon: BarChart3, text: "Automação de 90% das rotinas." },
    ],
  },
  {
    title: "Integração entre Órgãos Públicos",
    description:
      "Desenvolvemos integrações entre órgãos órgãos de governo estadual e federal e secretarias públicas, promovendo troca segura, ágil e estruturada de dados conforme exigências contratuais e legais.",
    image: "assets/place-holder.png",
    technologies: ["C#", ".NET Core e Framework", "SQL Server", "REST APIs", "Azure"],
    stats: [
      { icon: CheckCircle, text: "Conformidade com normas governamentais." },
    ],
  },
  {
    title: "Infraestrutura e Segurança da Informação",
    description:
      "Implementamos infraestruturas escaláveis e seguras com CI/CD, redundância, proxies e práticas rígidas de segurança da informação para ambientes críticos e de alta disponibilidade.",
    image: "assets/place-holder.png",
    technologies: ["Terraform", "Docker", "Kubernetes", "Azure", "GitHub Actions"],
    stats: [
      { icon: CheckCircle, text: "Aderência à ISO/IEC 27001." },
    ],
  },
  {
    title: "Aplicações Mobile com Design Moderno",
    description:
      "Desenvolvemos apps mobile com interfaces modernas, intuitivas e responsivas, focando na melhor experiência do usuário e alto desempenho.",
    image: "assets/place-holder.png",
    technologies: ["React Native", "Flutter", "Figma", "Firebase", "Expo"],
    stats: [
      { icon: Users, text: "Alcance em larga escala." },
    ],
  }
];

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
          <h2 className="text-3xl md:text-4xl font-bold text-[#F2F2F0] mb-4">Projetos</h2>
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