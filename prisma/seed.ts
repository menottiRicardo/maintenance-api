import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
async function main() {
  await prisma.appointment.deleteMany();
  const appt = await prisma.appointment.create({
    data: {
      date: new Date().toDateString(),
      placa: 'au4539',
      status: 'programada',
    },
  });

  console.log({ appt });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
