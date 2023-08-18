/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
// await import("./src/env.mjs");
import { next } from 'million/compiler';

console.log('DATABASE_URL', process.env.DATABASE_URL)

/** @type {import("next").NextConfig} */
const nextConfig = {
  swcMinify: true,
  output: 'standalone',
  reactStrictMode: true,
  productionBrowserSourceMaps: true,
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
};

const millionConfig = {
  auto: { rsc: true },
  mute: true,
}
 
export default next(nextConfig, millionConfig);
