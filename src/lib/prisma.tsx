import { PrismaClient } from "@prisma/client";
import path from "path";

const prismaClientSingleton = () => {
  // Only modify for Vercel deployments
  if (process.env.VERCEL) {
    // Get absolute path to Linux binary
    const binaryPath = path.join(
      __dirname,
      "../../node_modules/.prisma/client/query-engine-rhel-openssl-3.0.x"
    );
    
    // Use environment variable instead of internal option
    process.env.PRISMA_QUERY_ENGINE_BINARY = binaryPath;
  }

  return new PrismaClient();
};

declare const globalThis: {
  prismaGlobal: ReturnType<typeof prismaClientSingleton>;
} & typeof global;

const prisma = globalThis.prismaGlobal ?? prismaClientSingleton();

export default prisma;

if (process.env.NODE_ENV !== "production") globalThis.prismaGlobal = prisma;