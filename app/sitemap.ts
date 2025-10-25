import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://monitlyai-site.vercel.app";
  const paths = ["/", "/product", "/solutions", "/company", "/partners", "/security", "/privacy", "/terms", "/news"];
  return paths.map((p) => ({ url: `${base}${p}`, changeFrequency: "weekly", priority: p === "/" ? 1 : 0.7 }));
}
