import { PrismaClient } from '@/generated/prisma';

// This prevents TypeScript errors in the global scope
declare global {
  var prisma: PrismaClient | undefined;
}

// This creates a single instance of PrismaClient and caches it in the global object.
// This is the recommended approach to prevent creating too many database connections
// during development with Next.js's hot-reloading.
const prisma = global.prisma || new PrismaClient();

if (process.env.NODE_ENV !== 'production') {
  global.prisma = prisma;
}

export default prisma;