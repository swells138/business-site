/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**.oaiusercontent.com',
            },
        ],
    },
}

export default nextConfig

