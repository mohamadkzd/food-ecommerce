import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode:false,
  images :{
      remotePatterns:[
          {
              protocol:'http',
              hostname:'localhost'
          }
      ]
  }
};

export default nextConfig;
