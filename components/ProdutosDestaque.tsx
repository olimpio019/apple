'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Status } from '@prisma/client'

interface Product {
  id: string
  name: string
  description: string
  price: number
  images: string[]
  condition: string
  status: Status
  seller: {
    name: string
    image: string | null
  }
}

interface ProdutosDestaqueProps {
  products: Product[]
}

export default function ProdutosDestaque({ products }: ProdutosDestaqueProps) {
  return (
    <section className="py-8">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Produtos em Destaque
        <span className="font-normal text-gray-500 block text-base mt-1">
          Os melhores produtos Apple com os melhores preços
        </span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl"
          >
            <div className="relative h-48 w-full">
              <Image
                src={product.images[0]}
                alt={product.name}
                fill
                className="object-cover"
              />
              <div className="absolute top-2 right-2">
                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium ${
                    product.condition === 'NEW'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-yellow-100 text-yellow-800'
                  }`}
                >
                  {product.condition === 'NEW' ? 'Novo' : 'Usado'}
                </span>
              </div>
            </div>

            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2 line-clamp-2">
                {product.name}
              </h3>
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                {product.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xl font-bold text-blue-700">
                  R$ {product.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                </span>
                <Link
                  href={`/product/${product.id}`}
                  className="bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-800 transition-colors"
                >
                  Ver mais
                </Link>
              </div>
              <div className="mt-4 flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden">
                  {product.seller.image ? (
                    <Image
                      src={product.seller.image}
                      alt={product.seller.name}
                      width={32}
                      height={32}
                      className="object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-blue-100 text-blue-700 font-medium">
                      {product.seller.name.charAt(0)}
                    </div>
                  )}
                </div>
                <span className="text-sm text-gray-600">{product.seller.name}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
} 