/* eslint-disable max-len */
/* eslint-disable react/require-default-props */
import React from 'react';
import Head from 'next/head';

interface SEOProps {
  title: string;
  description?: string;
  image?: string;
  site?: string
}

export default function SEO({
  title, description, image, site,
}: SEOProps) {
  const pageTitle = `${title}`;
  // eslint-disable-next-line no-console
  console.log(site);
  const pageImage = image ? `${process.env.DOMAIN}/${image}` : null;
  return (
    <Head>
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      {/*
      <meta name="keywords" content="agência, publicidade, marketing, comunicação, agência de publicidade, agência de marketing, agência de comunicação" />
      <meta property="og:image" content="https://res.cloudinary.com/artcompub/image/upload/v1647373969/artcom_gfwruj.png" />
      <meta name="twitter:card" content="summary" />
      <meta property="og:url" content={`https://www.artcom.com.br/${site}`} />
      <meta property="og:title" content={pageTitle} key="ogtitle" />
      <meta property="og:description" content={description} key="ogdesc" /> */}
      <title>{pageTitle}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      {description && <meta name="description" content={description} />}
      {pageImage && <meta name="image" content={pageImage} />}
    </Head>
  );
}
