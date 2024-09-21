/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "picsum.photos"
            }
        ]
    },
    output: "export",
    basePath: '/quiz-app',
    distDir: 'build'
};

export default nextConfig;
