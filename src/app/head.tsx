import { canonicalBase } from "@/lib/site";

export default function Head() {
  // Use absolute URL for better social crawler compatibility
  const siteUrl = canonicalBase;
  const shareImageAvif = `${siteUrl}/other-ways-therapy-social-share-image.avif`;
  const shareImageJpg = `${siteUrl}/other-ways-therapy-social-share-image.jpg`;

  return (
    <>
      {/* Explicit OG/Twitter tags to help crawlers like iMessage/Safari */}
      <meta property="og:image" content={shareImageAvif} />
      <meta property="og:image:type" content="image/avif" />
      <meta property="og:image" content={shareImageJpg} />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={shareImageAvif} />
      <meta name="twitter:image" content={shareImageJpg} />
    </>
  );
}
