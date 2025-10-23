import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/:region/:provincia/vender-sin-comision-vendedor-en-:ciudad',
        destination: '/:region/:provincia/:ciudad',
      },
    ];
  },
};

export default nextConfig;
