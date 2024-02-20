import { Html, Main, Head, NextScript } from "next/document";
import React from "react";

const NextDocument = () => {
  return (
    <Html lang="en">
      <Head>
        {/* <!-- Favicon --> */}
        <link rel="icon" href="/profile_picture.png" />

        {/* <!-- Primary Meta Tags --> */}
        <meta name="title" content="Damiel"></meta>
        <meta name="description" content="Damiel | Front End Engineer"></meta>
        <meta name="keywords" content="React, Next, Javascript, SCSS, Redux"></meta>
        {/* <link
          rel="mask-icon"
          href="/icons/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <link rel="shortcut icon" href="/favicon.ico" /> */}

        {/* apple splash screen images  */}
        {/* <link
          rel="apple-touch-startup-image"
          href="/images/apple_splash_2048.png"
          sizes="2048x2732"
        />
        <link
          rel="apple-touch-startup-image"
          href="/images/apple_splash_1668.png"
          sizes="1668x2224"
        />
        <link
          rel="apple-touch-startup-image"
          href="/images/apple_splash_1536.png"
          sizes="1536x2048"
        />
        <link
          rel="apple-touch-startup-image"
          href="/images/apple_splash_1125.png"
          sizes="1125x2436"
        />
        <link
          rel="apple-touch-startup-image"
          href="/images/apple_splash_1242.png"
          sizes="1242x2208"
        />
        <link
          rel="apple-touch-startup-image"
          href="/images/apple_splash_750.png"
          sizes="750x1334"
        />
        <link
          rel="apple-touch-startup-image"
          href="/images/apple_splash_640.png"
          sizes="640x1136"
        /> */}

        {/* <!-- Open Graph / Facebook --> */}
        {/* <meta property="og:type" content="website"></meta>
        <meta property="og:url" content=""></meta>
        <meta property="og:title" content='Gold Apple'></meta>
        <meta property="og:description" content={seoDescription || ""}></meta>
        <meta property="og:image" content={seoImage || ""}></meta> */}

        {/* <!-- Twitter --> */}
        {/* <meta property="twitter:card" content="summary_large_image"></meta>
        <meta property="twitter:url" content={baseUrl}></meta>
        <meta property="twitter:title" content={seoTitle || ""}></meta>
        <meta
          property="twitter:description"
          content={seoDescription || ""}
        ></meta>
        <meta property="twitter:image" content={seoImage || ""}></meta> */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default NextDocument;