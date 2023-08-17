import { prisma } from '../src/server/db'

async function main() {
  const response = await prisma.cache.findMany()
  console.log(response)
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
