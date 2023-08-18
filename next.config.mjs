/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
// await import("./src/env.mjs");
import { next } from 'million/compiler';
// import { config } from 'dotenv'

// config({
//   path: '.env.local',
// })

/** @type {import("next").NextConfig} */
const nextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  experimental: {
    serverActions: true,
    forceSwcTransforms: true,
  },
};

const millionConfig = {
  auto: { rsc: true },
  mute: true,
}
 
export default next(nextConfig, millionConfig);
