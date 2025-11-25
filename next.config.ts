import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        pathname: "/PokeAPI/sprites/master/sprites/pokemon/**",
      },
    ],
    unoptimized: true, // Desabilita otimização de imagens no build estático
  },
  output: "export", // Para deploy estático no Firebase
};

export default nextConfig;