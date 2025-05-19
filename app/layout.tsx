import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Monq Software',
  description: 'Transformando Ideias em Histórias de Sucesso em Software',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  )
}
