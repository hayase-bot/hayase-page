/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://hayasebot.app',
    generateRobotsTxt: true, // (optional)
    // ...other options
}