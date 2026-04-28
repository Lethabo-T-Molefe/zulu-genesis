import { fieldsData } from "@/data/fieldsData";

export interface StaticRouteEntry {
  path: string;
  changefreq: "daily" | "weekly" | "monthly" | "yearly";
  priority: string;
}

export const staticRouteEntries: StaticRouteEntry[] = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/about", changefreq: "monthly", priority: "0.9" },
  { path: "/fields", changefreq: "weekly", priority: "0.9" },
  { path: "/philosophies", changefreq: "monthly", priority: "0.8" },
  { path: "/solution-lab", changefreq: "monthly", priority: "0.8" },
  { path: "/academia", changefreq: "monthly", priority: "0.8" },
  { path: "/services", changefreq: "monthly", priority: "0.8" },
  { path: "/join", changefreq: "monthly", priority: "0.7" },
  { path: "/contact", changefreq: "monthly", priority: "0.7" },
];

export function getFieldRouteEntries(): StaticRouteEntry[] {
  return fieldsData.map((field) => ({
    path: `/fields/${field.slug}`,
    changefreq: "monthly",
    priority: "0.7",
  }));
}

export function getAllPublicRouteEntries(): StaticRouteEntry[] {
  return [...staticRouteEntries, ...getFieldRouteEntries()];
}

export function getKnownPaths(): Set<string> {
  return new Set(getAllPublicRouteEntries().map((route) => route.path));
}
