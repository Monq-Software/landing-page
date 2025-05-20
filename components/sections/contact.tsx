"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MessageCircle, Mail, Linkedin } from "lucide-react"

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

export function Contact() {
  return (
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
            Estamos aqui para ajudar você a transformar suas ideias em realidade. Vamos discutir como podemos fazer do
            seu próximo projeto de software um sucesso.
          </p>
        </motion.div>
        <motion.div
          className="max-w-md mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <Card className="bg-[#0D0D0D] border-[#595956]/20 hover:shadow-lg hover:shadow-[#595956]/10 transition-all">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-[#F2F2F0] mb-6">
                Vamos conversar sobre a arquitetura da sua próxima solução.
              </h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <Button
                    variant="outline"
                    size="lg"
                    className="flex-1 border-[#595956]/40 text-[#F2F2F0] hover:bg-[#595956]/20 group"
                    onClick={() => window.location.href = 'mailto:monqsoftware@gmail.com'}
                  >
                    <Mail className="mr-2 h-5 w-5 group-hover:translate-y-[-2px] transition-transform" />
                    <span>Email</span>
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="flex-1 border-[#595956]/40 text-[#F2F2F0] hover:bg-[#595956]/20 group"
                    onClick={() => window.open('https://wa.me/5571999648913?text=Tenho%20uma%20ideia%20de%20software')}
                  >
                    <MessageCircle className="mr-2 h-5 w-5 group-hover:translate-y-[-2px] transition-transform" />
                    <span>Whatsapp</span>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
