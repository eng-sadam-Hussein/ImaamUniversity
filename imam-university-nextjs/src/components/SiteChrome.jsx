"use client";
import { usePathname } from "next/navigation";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";
import RouteMotion from "./RouteMotion";

export default function SiteChrome({ children }) {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith("/admin");
  if (isAdmin) return children;
  return (
    <>
      <SiteHeader />
      <main><RouteMotion>{children}</RouteMotion></main>
      <SiteFooter />
    </>
  );
}
