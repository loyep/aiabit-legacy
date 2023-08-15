// Importing env files here to validate on build
import '@aiabit/auth/env.mjs'
// import './env.mjs'

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,
  /** Enables hot reloading for local packages without a build step */
  transpilePackages: ['@aiabit/trpc', '@aiabit/auth', '@aiabit/db'],
  /** We already do linting and typechecking as separate tasks in CI */
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
}

export default config
