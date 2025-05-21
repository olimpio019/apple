import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import BannerPrincipal from '@/components/BannerPrincipal'
import Categorias from '@/components/Categorias'
import Novidades from '@/components/Novidades'
import { Status } from '@prisma/client'

export default async function Home() {
  const session = await getServerSession(authOptions)

  const products = await prisma.product.findMany({
    where: {
      status: Status.ACTIVE,
    },
    include: {
      seller: {
        select: {
          name: true,
          image: true,
        },
      },
    },
    orderBy: {
      createdAt: 'desc',
    },
    take: 8,
  })

  return (
    <main className="flex-1">
      <BannerPrincipal />
      <div className="container py-8 space-y-8">
        <Categorias />
        <Novidades products={products} />
      </div>
    </main>
  )
} 