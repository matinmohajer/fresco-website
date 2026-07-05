import type { MetadataRoute } from "next";

const baseUrl = "https://fresco.xarp.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/support", "/privacy"];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.6,
  }));
}
