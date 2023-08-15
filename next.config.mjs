/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
// await import("./src/env.mjs");
import { next } from 'million/compiler';

/** @type {import("next").NextConfig} */
const nextConfig = {
  swcMinify: true,
  output: 'standalone',
  reactStrictMode: true,
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
