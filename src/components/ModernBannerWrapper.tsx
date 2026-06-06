// BannerWrapper.tsx
"use client";
import { usePathname } from "next/navigation";
import ModernPageBanner from "@/components/ModernPageBanner";

export default function BannerWrapper() {
  const pathname = usePathname();
  const isRootLocale = /^\/(tr|en)$/.test(pathname);

  return !isRootLocale ? <ModernPageBanner /> : null;
}
