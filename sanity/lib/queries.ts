import { defineQuery } from "next-sanity";

// Artwork Queries
export const artworksQuery =
  defineQuery(`*[_type == "artwork"] | order(_createdAt desc) {
  _id,
  _createdAt,
  _updatedAt,
  title,
  slug,
  description,
  year,
  materials,
  dimensions,
  image,
  category,
  available,
  featured
}`);

export const featuredArtworksQuery =
  defineQuery(`*[_type == "artwork" && featured == true] | order(year desc) {
  _id,
  title,
  slug,
  description,
  year,
  materials,
  dimensions,
  image,
  category,
  available,
  featured
}`);

export const artworkBySlugQuery =
  defineQuery(`*[_type == "artwork" && slug.current == $slug][0] {
  _id,
  _createdAt,
  _updatedAt,
  title,
  slug,
  description,
  year,
  materials,
  dimensions,
  image,
  category,
  available,
  featured
}`);

export const artworksByCategoryQuery =
  defineQuery(`*[_type == "artwork" && category == $category] | order(year desc) {
  _id,
  title,
  slug,
  description,
  year,
  materials,
  dimensions,
  image,
  category,
  available,
  featured
}`);

export const recentArtworksQuery =
  defineQuery(`*[_type == "artwork" && title != null] | order(year desc) [0...$limit] {
  _id,
  title,
  slug,
  description,
  year,
  materials,
  dimensions,
  image,
  category,
  available,
  featured
}`);

// Pots Queries
export const potsQuery =
  defineQuery(`*[_type == "pots"] | order(_createdAt desc) {
  _id,
  _createdAt,
  _updatedAt,
  image,
  featured
}`);

export const featuredPotsQuery =
  defineQuery(`*[_type == "pots" && featured == true] | order(_createdAt desc) {
  _id,
  image,
  featured
}`);

// Blog Queries
export const blogPostsQuery =
  defineQuery(`*[_type == "blog"] | order(publishedAt desc) {
  _id,
  _createdAt,
  _updatedAt,
  title,
  slug,
  excerpt,
  body,
  featuredImage,
  publishedAt
}`);

export const blogPostBySlugQuery =
  defineQuery(`*[_type == "blog" && slug.current == $slug][0] {
  _id,
  _createdAt,
  _updatedAt,
  title,
  slug,
  excerpt,
  body,
  featuredImage,
  publishedAt
}`);

export const recentBlogPostsQuery =
  defineQuery(`*[_type == "blog"] | order(publishedAt desc) [0...$limit] {
  _id,
  title,
  slug,
  excerpt,
  featuredImage,
  publishedAt
}`);

export const blogSlugsQuery = defineQuery(`*[_type == "blog"].slug.current`);

// About Queries
export const aboutQuery = defineQuery(`*[_type == "about"][0] {
  _id,
  _createdAt,
  _updatedAt,
  fullname,
  profileImage,
  bio,
  availability,
  email,
  socialLinks
}`);

// Slug helpers
export const artworkSlugsQuery = defineQuery(
  `*[_type == "artwork"].slug.current`
);
export const potSlugsQuery = defineQuery(`*[_type == "pots"]._id`);
