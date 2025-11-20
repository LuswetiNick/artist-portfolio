import type { Metadata } from "next";
import { siteConfig } from "./siteConfig";

type BuildMetaParams = {
  title?: string;
  description?: string;
  pathname?: string;
  image?: string | null;
};

export function getDefaultMetadata(): Metadata {
  return {
    title: siteConfig.title,
    description: siteConfig.description,
    metadataBase: new URL(siteConfig.url),
    openGraph: {
      title: siteConfig.title,
      description: siteConfig.description,
      url: siteConfig.url,
      siteName: siteConfig.title,

      locale: "en-US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: siteConfig.title,
      description: siteConfig.description,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },
    icons: {
      icon: [
        { url: "/images/logo.png" },
        { url: "/favicon.ico" },
      ],
      apple: "/images/logo.png",
    },
  } as Metadata;
}

export function buildMetadata({
  title,
  description,
  pathname,
  image,
}: BuildMetaParams): Metadata {
  const base = getDefaultMetadata();
  const mergedTitle = title
    ? `${title} | ${siteConfig.title}`
    : (base.title ?? undefined);
  const meta: Metadata = {
    ...base,
    title: mergedTitle,
    description: description ?? base.description ?? undefined,
    openGraph: {
      ...(base.openGraph ?? {}),
      title: mergedTitle,
      description: description ?? base.description ?? undefined,
      url: pathname ? `${siteConfig.url}${pathname}` : base.openGraph?.url,
      images: image ? [image] : base.openGraph?.images,
    },
    twitter: {
      ...(base.twitter ?? {}),
      title: mergedTitle,
      description: description ?? base.description ?? undefined,
      images: image ? [image] : base.twitter?.images,
    },
  };

  return meta;
}
