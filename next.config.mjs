/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    FIREBASE_APIKEY: process.env.FIREBASE_APIKEY,
    FBASE_AUTH_DOMAIN: process.env.FBASE_AUTH_DOMAIN,
    NEXT_PUBLIC_FIREBASE_PROJECT_ID: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    FBASE_MESSAGING_SENDER_ID: process.env.FBASE_MESSAGING_SENDER_ID,
    FBASE_APP_ID: process.env.FBASE_APP_ID,
    FBASE_MEASUREMENT_ID: process.env.FBASE_MEASUREMENT_ID,
    FIREBASE_CLIENT_EMAIL: process.env.FIREBASE_CLIENT_EMAIL,
    FIREBASE_PRIVATE_KEY: process.env.FIREBASE_PRIVATE_KEY
  },
  images: {
      unoptimized: true,
      remotePatterns: [
        {
          protocol: 'https',
          hostname: '**', 
          pathname: '/**'
        },
      ],
    },
}

export default nextConfig;