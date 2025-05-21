import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    const session = await getServerSession(authOptions);

    if (!session || session.user.role !== 'ADMIN') {
      return new NextResponse('Não autorizado', { status: 401 });
    }

    const products = await prisma.product.findMany({
      include: {
        seller: {
          select: {
            name: true,
            email: true
          }
        },
        purchases: {
          include: {
            buyer: {
              select: {
                name: true,
                email: true
              }
            }
          },
          orderBy: {
            createdAt: 'desc'
          },
          take: 1
        }
      },
      orderBy: {
        createdAt: 'desc'
      }
    });

    const formattedProducts = products.map(product => ({
      ...product,
      buyer: product.purchases[0]?.buyer || null
    }));

    return NextResponse.json(formattedProducts);
  } catch (error) {
    console.error('Erro ao buscar produtos:', error);
    return new NextResponse('Erro interno do servidor', { status: 500 });
  }
} 