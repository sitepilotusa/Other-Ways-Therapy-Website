export default function Head() {
  // Use absolute URL for better social crawler compatibility
  const siteUrl = process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : process.env.NEXT_PUBLIC_SITE_URL || 'https://otherwaysco.sitepilotpreflight.com';
  const shareImage = `${siteUrl}/other-ways-therapy-social-share-image.jpg`;

  return (
    <>
      {/* Explicit OG/Twitter tags to help crawlers like iMessage/Safari */}
      <meta property="og:image" content={shareImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:type" content="image/jpeg" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={shareImage} />
    </>
  );
}


