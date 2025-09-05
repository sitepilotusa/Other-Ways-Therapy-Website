export default function Head() {
  // Simple relative URL - let the platform resolve the domain
  const share = "/other-ways-therapy-social-share-image.jpg";
  return (
    <>
      {/* Explicit OG/Twitter tags to help crawlers like iMessage/Safari */}
      <meta property="og:image" content={share} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={share} />
    </>
  );
}


