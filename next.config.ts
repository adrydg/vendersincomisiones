import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      // Rewrite para comunidades multiprovinciales (ej: /cataluna/barcelona/vender-sin-comision-vendedor-en-ciudad)
      {
        source: '/:region/:provincia/vender-sin-comision-vendedor-en-:ciudad',
        destination: '/:region/:provincia/:ciudad',
      },
      // Rewrite para comunidades uniprovinciales (ej: /madrid/vender-sin-comision-vendedor-en-ciudad)
      {
        source: '/:region/vender-sin-comision-vendedor-en-:ciudad',
        destination: '/:region/:ciudad',
      },
    ];
  },
};

export default nextConfig;
