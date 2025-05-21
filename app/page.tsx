import { Header } from '@/components/Header'
import { BannerPrincipal } from '@/components/BannerPrincipal'
import { Categorias } from '@/components/Categorias'
import { Novidades } from '@/components/Novidades'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <BannerPrincipal />
      <Categorias />
      <Novidades />
    </main>
  )
} 