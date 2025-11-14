// seedDatabase.js

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const { devLogData } = require("./src/data/devLogData");

async function main() {
  console.log("Starting database seed...");

  for (const entry of devLogData) {
    const log = await prisma.log.create({
      data: {
        // Map ALL fields from your array object to the Prisma model
        date: entry.date,
        entryNumber: entry.entryNumber,
        week: entry.week,
        topic: entry.topic,
        description: entry.description,
      },
    });
    console.log(`Created log entry: ${log.topic}`);
  }

  console.log("Database seeded successfully!");
}

main()
  .catch((e) => {
    console.error("Error seeding database:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
