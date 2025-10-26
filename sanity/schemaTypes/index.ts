import type { SchemaTypeDefinition } from "sanity";
import about from "./about";
import artwork from "./artwork";
import { blockContentType } from "./blockContent";
import blog from "./blog";
import pots from "./pots";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [artwork, about, pots, blog, blockContentType],
};
