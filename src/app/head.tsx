export default function Head() {
  // Prioritize the custom staging domain for the test site
  const siteUrl = process.env.NODE_ENV === 'development' 
    ? 'http://localhost:3000'
    : process.env.VERCEL_URL?.includes('sitepilotpreflight')
    ? "https://otherwaysco.sitepilotpreflight.com"
    : process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "https://otherwaystherapy.com";
  const share = `${siteUrl}/other-ways-therapy-social-share-image.jpg`;
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


