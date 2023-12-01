/** @type {import('next').NextConfig} */
const nextConfig = {
  images : {
    domains : ["i.scdn.co", "image-cdn-ak.spotifycdn.com"],
    // remotePatterns : [
    //   {
    //     protocol : "https",
    //     hostname : "i.scdn.co",
    //     pathname : "**"
    //   },
    //   {
    //     protocol : "https",
    //     hostname : "image-cdn-ak.spotifycdn.com",
    //     pathname : "**"
    //   },
    // ]
  },
}

module.exports = nextConfig
