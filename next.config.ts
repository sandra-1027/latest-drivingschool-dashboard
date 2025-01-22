// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
//   // reactStrictMode: true,
//   reactStrictMode: false,

// };

// export default nextConfig;


import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        // Rewrite for auth-related APIs
        source: '/api/auth/:path*', 
        destination: 'https://our-demos.com/n/drivingschool_api/api/auth/:path*',
      },
    
      {
        // Rewrite for auth-related APIs
        source: '/api/admin/:path*', 
        destination: 'https://our-demos.com/n/drivingschool_api/api/admin/:path*',
      },
     
    ];
  },
};

export default nextConfig;