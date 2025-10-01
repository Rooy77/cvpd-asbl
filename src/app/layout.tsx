import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import AppWrapper from '@/components/AppWrapper'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CVPD - asbl',
  description: "Organisation dotée d'un statut consultatif Spécial à l'ECOSOC aux Nations Unies",
  openGraph: {
    title: 'CVPD - asbl',
    description: "Organisation dotée d'un statut consultatif Spécial à l'ECOSOC aux Nations Unies.",
    url: 'https://cvpd-asbl.vercel.app/',
    siteName: 'CVPD - asbl',
    images: [
      {
        url: 'https://cvpd-asbl.vercel.app/_next/image?url=https%3A%2F%2Fcvpd-asbl.org%2Fimg%2Fusers%2FDDH_Goma4.jpg&w=3840&q=75',
        width: 1200,
        height: 630,
        alt: 'Présentation de CVPD - sarl',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CVPD - asbl',
    description: "Organisation dotée d'un statut consultatif Spécial à l'ECOSOC aux Nations Unies",
    images: ['https://cvpd-asbl.vercel.app/_next/image?url=https%3A%2F%2Fcvpd-asbl.org%2Fimg%2Fusers%2FDDH_Goma4.jpg&w=3840&q=75'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className}>
        <AppWrapper>{children}</AppWrapper>
      </body>
    </html>
  )
}
