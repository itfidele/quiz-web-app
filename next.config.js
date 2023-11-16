/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    basePath: "/quiz-web-app",
    images: {
        unoptimized: true,
        remotePatterns: [
			{
				protocol: "https",
				hostname: "github.com",
				port: "",
				pathname: "/*.png",
			},
		],
    },
}

module.exports = nextConfig
