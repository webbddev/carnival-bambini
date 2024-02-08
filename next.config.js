/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['cdn.sanity.io'],
  },
};

module.exports = nextConfig;

// latest (none-deprecated) remote patterns configuration
// apply if console returns related warnings

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'cdn.sanity.io',
//         pathname: '**',
//       },
//     ],
//   },
// };

// module.exports = nextConfig;
