import { PrismaClient } from "@/generated/prisma";
import { LatestInvoice } from "./definitions";
import { formatCurrency } from "./utils";
import { Invoice } from "./definitions";
import { MostProducts } from "./definitions";

const prisma = new PrismaClient();

export async function fetchRevenuePrisma() {
  try {
    const data = await prisma.revenue.findMany();
    return data;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch revenue data.");
  }
}

// export async function fetchLatestInvoicesPrisma() {
//   try {
//     const data = await prisma.invoices.findMany({
//       take: 5,
//       orderBy: {
//         date: "desc",
//       },
//       include: {
//         customer: {
//           select: {
//             name: true,
//             image_url: true,
//             email: true,
//           },
//         },
//       },
//     });

//     const latestInvoices = data.map((invoice) => ({
//       amount: formatCurrency(invoice.amount),
//       name: invoice.customer.name,
//       image_url: invoice.customer.image_url,
//       email: invoice.customer.email,
//       id: invoice.id,
//     })) as unknown as LatestInvoice[];

//     return latestInvoices;
//   } catch (error) {
//     console.error("Database Error:", error);
//     throw new Error("Failed to fetch the latest invoices.");
//   }
// }
export async function fetchMostPopularProducts() {
  try {
    const MostProduct = await prisma.MostProducts.groupBy({
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
          id_produk: item.id_product,
          nama_produk: product?.nama_produk || 'Produk tidak ditemukan',
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
  }catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch popular products data.");
  }
}