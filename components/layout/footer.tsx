import Link from "next/link"
import { Mail, MapPin, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#0D0D0D] py-12 border-t border-[#595956]/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Link href="/" className="flex items-center gap-2">
                <img src="/monq-logo.png" alt="MONQ Logo" className="w-8 h-8 rounded-full" />
                <span className="text-[#F2F2F0] font-medium">MONQ Software</span>
              </Link>
            </div>
            <p className="text-[#8C8C88] mb-4">Transformando Ideias em Histórias de Sucesso em Software</p>
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
                  Equipe
                </Link>
              </li>
              <li>
                <Link href="#projeto" className="text-[#8C8C88] hover:text-[#F2F2F0] transition-colors">
                  Projetos
                </Link>
              </li>
              <li>
                <Link href="#processos" className="text-[#8C8C88] hover:text-[#F2F2F0] transition-colors">
                  Processos
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-[#F2F2F0] font-bold mb-4">Contato</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-[#8C8C88]">
                <MapPin size={16} />
                <span>Salvador, Bahia, Brazil</span>
              </li>
              <li>
                <Link
                  href="mailto:contato@monqsoftware.com"
                  className="flex items-center gap-2 text-[#8C8C88] hover:text-[#F2F2F0] transition-colors"
                >
                  <Mail size={16} />
                  <span>monqsoftware@gmail.com</span>
                </Link>
              </li>
              <li>
                <Link
                  href="tel:+551199999999"
                  className="flex items-center gap-2 text-[#8C8C88] hover:text-[#F2F2F0] transition-colors"
                >
                  <Phone size={16} />
                  <span>+55 (71) 9-9964-8913</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-[#595956]/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-[#8C8C88] mb-4 md:mb-0">© 2025 MONQ Software. Todos os direitos reservados.</p>
            <div className="flex gap-6">
                <Link href="https://www.termsfeed.com/live/16725834-26e9-4e8a-8958-b35cb49c74c9" target="_blank" className="text-[#8C8C88] hover:text-[#F2F2F0] transition-colors">
                Política de Privacidade
                </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
