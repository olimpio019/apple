'use client'

import { ProductCard } from './product-card'
import { useEffect, useState } from 'react'

type Product = {
  id: string
  name: string
  description: string
  price: number
  images: string[]
  condition: 'NEW' | 'USED'
  seller: {
    name: string
    image: string | null
  }
}

export function ProductGrid() {
  const [products, setProducts] = useState<Product[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function loadProducts() {
      try {
        const response = await fetch('http://localhost:3000/api/products')
        if (!response.ok) {
          throw new Error('Erro ao carregar produtos')
        }
        const data = await response.json()
        setProducts(data)
      } catch (error) {
        console.error('Erro ao carregar produtos:', error)
      } finally {
        setIsLoading(false)
      }
    }

    loadProducts()
  }, [])

  if (isLoading) {
    return (
      <div className="text-center py-12">
        <h3 className="text-lg font-medium text-muted-foreground">
          Carregando produtos...
        </h3>
      </div>
    )
  }

  if (products.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-lg font-medium text-muted-foreground">
          Nenhum produto encontrado
        </h3>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
} 