/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = {
  
  images: {
    domains: [
      'avatars.githubusercontent.com', 'lh3.googleusercontent.com', 'robohash.org', 'static-cdn.jtvnw.net', 'twitch-clone-fawn.vercel.app'
    ]
  }
}
