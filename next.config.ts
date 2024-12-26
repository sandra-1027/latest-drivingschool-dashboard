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
        destination: 'https://our-demos.com/n/op2doctor_api/api/auth/:path*',
      },
    
      // {
      //   // Rewrite for auth-related APIs
      //   source: '/api/auth/:path*', 
      //   destination: ' http://localhost/WORKS/drivingschool_api/api/auth/:path*',
      // },
     
    ];
  },
};

export default nextConfig;