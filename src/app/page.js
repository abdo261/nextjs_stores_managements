import prisma from '@/lib/prisma'
export default async function Home() {
  const stores = await prisma.store.findMany()
  return (
   <section> 
    Home {stores.length}
   </section>
  );
}
