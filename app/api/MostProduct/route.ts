// app/api/most-popular-products/route.ts
import { NextResponse } from 'next/server'
import { Prisma } from '@/generated/prisma'


const prisma = new PrismaClient()
async function fetchMostPopularProducts() {
  try {
    const MostProduct = await prisma.mostProducts.groupBy({
      by: ["id_product"],
      _sum: {
        jumlah_beli: true
      },
    });

    // Langkah 2: Mendapatkan data produk lengkap (nama dan harga)
    const productDetails = await Promise.all(
      MostProduct.map(async (item) => {
        const product = await prisma.products.findUnique({
          where: {
            id_product: item.id_product
          },
          select: {
            id_product: true,
            nama_produk: true,
            harga: true
          }
        });

        return {
          id: item.id_product,
          nama: product?.nama_produk || 'Produk tidak ditemukan',
          harga: product?.harga || 0,
          jumlah_beli: item._sum.jumlah_beli || 0
        };
      })
    );

    // Langkah 3: Mengurutkan produk dari yang paling banyak dibeli
    const sortedProducts = productDetails.sort((a, b) => 
      (b.jumlah_beli || 0) - (a.jumlah_beli || 0)
    );

    return sortedProducts;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch popular products data.");
  }
}

// GET handler untuk API endpoint
export async function GET() {
  try {
    const data = await fetchMostPopularProducts();
    
    // Menambahkan format currency untuk harga dalam respons API
    const formattedData = data.map(product => ({
      ...product,
      harga_formatted: formatCurrency(product.harga)
    }));
    
    return NextResponse.json({ 
      status: 'success',
      data: formattedData
    });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json(
      { 
        status: 'error', 
        message: 'Failed to fetch popular products data' 
      },
      { status: 500 }
    );
  }
}

// Fungsi helper untuk format currency
function formatCurrency(amount: number) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR'
  }).format(amount);
}