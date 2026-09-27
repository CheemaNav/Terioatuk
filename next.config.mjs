import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  outputFileTracingRoot: projectRoot,
  serverExternalPackages: ["@prisma/client", "@prisma/adapter-pg", "pg"],
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.terioatinfotech.co.uk" }],
        destination: "https://terioatinfotech.co.uk/:path*",
        statusCode: 301,
      },
    ];
  },
};

export default nextConfig;
