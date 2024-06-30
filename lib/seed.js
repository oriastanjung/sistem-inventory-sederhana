require('dotenv').config();
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
async function main() {
  // Create companies
  const perusahaan1 = await prisma.perusahaan.create({
    data: {
      nama_perusahaan: "PT. MEGA MARITIM BATAM",
    },
  });

  const perusahaan2 = await prisma.perusahaan.create({
    data: {
      nama_perusahaan: "PT. PUTRA LAUTAN MANDIRI",
    },
  });
  const perusahaan3 = await prisma.perusahaan.create({
    data: {
      nama_perusahaan: "PT. SNEPAC MULTI PERKASA",
    },
  });

  console.log({ perusahaan1, perusahaan2, perusahaan3 });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
