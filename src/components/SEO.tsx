/* eslint-disable max-len */
/* eslint-disable react/require-default-props */
import React from 'react';
import Head from 'next/head';

interface SEOProps {
  title: string;
  description?: string;
}

export default function SEO({
  title, description,
}: SEOProps) {
  const pageTitle = `${title}`;
  return (
    <Head>
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="keywords" content="Chá, Bebidas, Atelier do chá, lojas de cha, lugar para comprar chá" />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Atelier do Chá" />
      <meta property="og:title" content={pageTitle} key="ogtitle" />
      <meta property="og:image" content="https://res.cloudinary.com/artcompub/image/upload/v1650299996/atelierdocha/atelier_c704ky.png" />
      <meta property="og:image:width" content="1536" />
      <meta property="og:image:height" content="1536" />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:url" content="https://www.atelierdocha.com" />
      <meta property="og:description" content={description} key="ogdesc" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:description" content="LEVE A SUA VIDA MAIS LEVE, LEVE ATELIER DO CHÁ PARA SUA VIDA" />
      <meta name="twitter:image" content="https://res.cloudinary.com/artcompub/image/upload/v1650299996/atelierdocha/atelier_c704ky.png" />
      <title>{pageTitle}</title>
      {description && <meta name="description" content={description} />}
    </Head>
  );
}
