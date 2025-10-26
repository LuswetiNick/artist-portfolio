import { client } from "./client";
import {
  aboutQuery,
  artworkBySlugQuery,
  artworkSlugsQuery,
  artworksByCategoryQuery,
  artworksQuery,
  blogPostBySlugQuery,
  blogPostsQuery,
  blogSlugsQuery,
  featuredArtworksQuery,
  featuredPotsQuery,
  potSlugsQuery,
  potsQuery,
  recentArtworksQuery,
  recentBlogPostsQuery,
} from "./queries";

// Artwork API
export async function getArtworks() {
  return client.fetch(artworksQuery);
}

export async function getFeaturedArtworks() {
  return client.fetch(featuredArtworksQuery);
}

export async function getArtworkBySlug(slug: string) {
  return client.fetch(artworkBySlugQuery, { slug });
}

export async function getArtworksByCategory(category: string) {
  return client.fetch(artworksByCategoryQuery, { category });
}

export async function getRecentArtworks(limit = 3) {
  return client.fetch(recentArtworksQuery, { limit });
}

export async function getArtworkSlugs() {
  return client.fetch(artworkSlugsQuery);
}

// Pots API
export async function getPots() {
  return client.fetch(potsQuery);
}

export async function getFeaturedPots() {
  return client.fetch(featuredPotsQuery);
}

export async function getPotSlugs() {
  return client.fetch(potSlugsQuery);
}

// Blog API
export async function getBlogPosts() {
  return client.fetch(blogPostsQuery);
}

export async function getBlogPostBySlug(slug: string) {
  return client.fetch(blogPostBySlugQuery, { slug });
}

export async function getRecentBlogPosts(limit = 3) {
  return client.fetch(recentBlogPostsQuery, { limit });
}

export async function getBlogSlugs() {
  return client.fetch(blogSlugsQuery);
}

// About API
export async function getAbout() {
  return client.fetch(aboutQuery);
}
