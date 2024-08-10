/** @type {import('next').NextConfig} */

import unpluginIcons from "unplugin-icons/webpack";

const nextConfig = {
  reactStrictMode: true,
  webpack(config) {
    config.plugins.push(
      unpluginIcons({
        compiler: "jsx",
        jsx: "react",
      }),
    );

    return config;
  },
};

export default nextConfig;
