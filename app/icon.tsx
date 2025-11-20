import { ImageResponse } from "next/og";
import { readFile } from "fs/promises";
import { join } from "path";

export const runtime = "edge";
export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default async function Icon() {
  const logoPath = join(process.cwd(), "public", "images", "logo.png");
  const imageData = await readFile(logoPath);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img src={`data:image/png;base64,${imageData.toString("base64")}`} />
      </div>
    ),
    {
      ...size,
    }
  );
}
