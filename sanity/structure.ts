import type { StructureResolver } from "sanity/structure";

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("About")
        .schemaType("about")
        .child(S.document().schemaType("about")),
      S.listItem()
        .title("Artworks")
        .schemaType("artwork")
        .child(S.documentTypeList("artwork").title("Artworks")),
      S.listItem()
        .title("Pots")
        .schemaType("pots")
        .child(S.documentTypeList("pots").title("Pots")),
      S.listItem()
        .title("Blog")
        .schemaType("blog")
        .child(S.documentTypeList("blog").title("Blog")),
    ]);
