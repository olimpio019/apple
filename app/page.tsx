import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import BannerPrincipal from '@/components/BannerPrincipal'
import Categorias from '@/components/Categorias'
import Novidades from '@/components/Novidades'
import { Status } from '@prisma/client'
import Link from 'next/link'

export default async function Home() {
  const session = await getServerSession(authOptions)

  const products = await prisma.product.findMany({
    where: {
      status: Status.AVAILABLE,
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
      <div className="flex justify-end gap-4 p-4">
        {!session ? (
          <>
            <Link href="/login">
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Entrar
              </button>
            </Link>
            <Link href="/register">
              <button className="bg-gray-200 text-blue-700 px-4 py-2 rounded hover:bg-gray-300">
                Cadastrar
              </button>
            </Link>
          </>
        ) : (
          <Link href="/profile">
            <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
              Perfil
            </button>
          </Link>
        )}
      </div>
      <BannerPrincipal />
      <div className="container py-8 space-y-8">
        <Categorias />
        <Novidades products={products} />
      </div>
    </main>
  )
} 