/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "http",
				hostname: "localhost",
			},
			{
				protocol: "https",
				hostname: "onlinestore-next-fcc67dfa50c5.herokuapp.com",
			},
		],
	},
};

module.exports = nextConfig;
