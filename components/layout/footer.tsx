import Link from "next/link"
import { Linkedin, Twitter, Instagram, Mail, MapPin, Phone } from "lucide-react"

export function Footer() {
  return (
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
              <Link
                href="https://linkedin.com"
                target="_blank"
                className="text-[#8C8C88] hover:text-[#F2F2F0] transition-colors"
              >
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                className="text-[#8C8C88] hover:text-[#F2F2F0] transition-colors"
              >
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                className="text-[#8C8C88] hover:text-[#F2F2F0] transition-colors"
              >
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-[#F2F2F0] font-bold mb-4">Serviços</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#servicos" className="text-[#8C8C88] hover:text-[#F2F2F0] transition-colors">
                  Aumento de Talentos
                </Link>
              </li>
              <li>
                <Link href="#servicos" className="text-[#8C8C88] hover:text-[#F2F2F0] transition-colors">
                  Engenharia de Produtos
                </Link>
              </li>
              <li>
                <Link href="#servicos" className="text-[#8C8C88] hover:text-[#F2F2F0] transition-colors">
                  Serviços para Startups
                </Link>
              </li>
              <li>
                <Link href="#servicos" className="text-[#8C8C88] hover:text-[#F2F2F0] transition-colors">
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
                <Link href="#equipe" className="text-[#8C8C88] hover:text-[#F2F2F0] transition-colors">
                  Nossa Equipe
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#8C8C88] hover:text-[#F2F2F0] transition-colors">
                  Carreiras
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-[#F2F2F0] font-bold mb-4">Contato</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-[#8C8C88]">
                <MapPin size={16} />
                <span>São Paulo, Brasil</span>
              </li>
              <li>
                <Link
                  href="mailto:contato@monqsoftware.com"
                  className="flex items-center gap-2 text-[#8C8C88] hover:text-[#F2F2F0] transition-colors"
                >
                  <Mail size={16} />
                  <span>contato@monqsoftware.com</span>
                </Link>
              </li>
              <li>
                <Link
                  href="tel:+551199999999"
                  className="flex items-center gap-2 text-[#8C8C88] hover:text-[#F2F2F0] transition-colors"
                >
                  <Phone size={16} />
                  <span>+55 11 9999-9999</span>
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
  )
}
