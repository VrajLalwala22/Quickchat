import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
    log: ["query","error"],
});

export { prisma };
export default prisma;