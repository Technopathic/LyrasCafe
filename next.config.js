const withMDX = require("@next/mdx")({
    extension: /\.mdx?$/
});

const env = {
    "APP_LOCALE": "en",
    "APP_APPLE_TOUCH_ICON": "/favicon128.png",
    "APP_FAVICON_16x16": "/favicon16.png",
    "APP_FAVICON_32x32": "/favicon32.png",

    "APP_TITLE": "Lyra's Cafe - Pastries & Baked Goods",
    "APP_DESCRIPTION": "Home-made pastries made by Lyra!",
    "APP_TYPE": "website",
    "APP_URL": "https://lyrascafe.fi",
    "APP_IMAGE": "https://lyrascafe.fi/og-image.png",
    "APP_IMAGE_TYPE": "image/png",
    "APP_IMAGE_WIDTH": "1200",
    "APP_IMAGE_HEIGHT": "630",
    "APP_SITE_NAME": "Lyra's Cafe",
    "APP_LOCALE": "en",

    "INSTAGRAM": "",
    "TWITTER": "",
    "GITHUB": "",
    "TWITCH": "",
    "DISCORD": "",
    "KO_FI": "",
    "LINKEDIN": "",
    "YOUTUBE": ""
}

module.exports = withMDX({
    env,
    swcMinify: true,
    pageExtensions: ["js", "jsx", "md", "mdx"]
})