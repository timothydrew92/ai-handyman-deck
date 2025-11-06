/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/deck',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
