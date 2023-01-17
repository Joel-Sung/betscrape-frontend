/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  env: {
    supabase_URL: process.env.SUPABASE_URL,
    supabase_KEY: process.env.SUPABASE_KEY,
  }
}

module.exports = nextConfig
