/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
    },
    async redirects() {
        return [
            {
                source: '/projects/p/:pid',
                destination: '/projects/p/:pid/boards',
                permanent: true,
            },
        ];
    },
};

module.exports = nextConfig;
