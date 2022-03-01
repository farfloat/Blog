/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "",
  generateRobotsTxt: true,
  changefreq: "weekly",
  sitemapSize: 8000,
};
