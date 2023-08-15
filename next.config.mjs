/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
// await import("./src/env.mjs");
import million from 'million/compiler';

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
  auto: true,
  // if you're using RSC:
  // auto: { rsc: true },
}
 
export default million.next(nextConfig, millionConfig);
