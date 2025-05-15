import { Card } from '@/app/ui/dashboard/cards';
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import MostProduct from '@/app/ui/dashboard/MostProducts';
import { lusitana } from '@/app/ui/fonts';
import { fetchRevenuePrisma, fetchMostPopularProducts} from 'app/lib/prisma';

export default async function Page() {
    const revenue = await fetchRevenuePrisma();
    const produklaris = await fetchMostPopularProducts(); 
      
    return (
        <main>
            <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
                Dashboard
            </h1>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            </div>
            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
                <RevenueChart revenue={revenue}  />
                <MostProduct produklaris={produklaris} />
            </div>
        </main>
    );
}