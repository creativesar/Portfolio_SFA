/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: '/api/:path*',
        headers: [
          { key: 'Access-Control-Allow-Credentials', value: 'true' },
          { key: 'Access-Control-Allow-Origin', value: process.env.NEXT_PUBLIC_URL || '*' },
          { key: 'Access-Control-Allow-Methods', value: 'POST' },
          { key: 'Content-Security-Policy', value: "default-src 'self'" }
        ]
      }
    ]
  }
};

export default nextConfig;
