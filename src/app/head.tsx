export default function Head() {
  const siteUrl = process.env.VERCEL_URL 
    ? `https://${process.env.VERCEL_URL}`
    : process.env.NODE_ENV === 'development' 
    ? 'http://localhost:3000'
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


