// metaUtils.ts
import type { MetaFunction, json } from "@remix-run/node";
import he from "he";
// Common base metadata
const stripHtmlTags = (str) => {
  return str.replace(/<\/?[^>]+(>|$)/g, "");
};
const decodeUnicode = (str) => {
  return decodeURIComponent(escape(str));
};
export function getBaseMeta(currentVideo: any) {
  const vdDesc = stripHtmlTags(
    he.decode(decodeUnicode(currentVideo.description))
  );
  return [
    {
      name: "viewport",
      content:
        "width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no",
    },
    { name: "apple-mobile-web-app-capable", content: "yes" },
    {
      name: "description",
      content: vdDesc || "No description available",
    },
    {
      name: "keywords",
      content: currentVideo["media:keywords"] || "no-keywords",
    },
    {
      name: "apple-mobile-web-app-status-bar-style",
      content: "black-translucent",
    },
    { name: "msapplication-tap-highlight", content: "no" },
    {
      name: "google-site-verification",
      content: "yThRoDT_1iDUIum7IPIGT96Y-8rpvmFwlYBBK9EMGXM",
    },
    { httpEquiv: "Content-Type", content: "text/html; charset=UTF-8" },
    { name: "content-language", content: "en" },
    { httpEquiv: "X-UA-Compatible", content: "IE=edge" },
  ];
}

// Common default metadata
export const defaultMeta = [
  {
    title: "Watch Entertainment, Gadgets, Movies, Sports Videos on NDTV Shorts",
  },
  {
    description:
      "Find the latest videos on entertainment, movies, lifestyle, health, sports, education, and more at NDTV Shorts.",
  },
  {
    property: "og:title",
    content:
      "Watch Entertainment, Gadgets, Movies, Sports Videos on NDTV Shorts",
  },
  { property: "og:type", content: "video.other" },
  {
    property: "og:image",
    content: "https://cdn.ndtv.com/common/images/ogndtv.png",
  },

  {
    property: "og:description",
    content:
      "Find the latest videos on entertainment, movies, lifestyle, health, sports, education, and more at NDTV Shorts.",
  },
];
export const defaultMetaHindi = [
  {
    title: "Watch Entertainment, Gadgets, Movies, Sports Videos, देखें मनोरंजन, गैजेट्स, फ़िल्में, खेल वीडियो on NDTV India Shorts",
  },
  {
    description:
      "Find the latest videos on entertainment, movies, lifestyle, health, sports, education, and more at NDTV India Shorts. NDTV इंडिया शॉर्ट्स पर देखें मनोरंजन, फ़िल्में, जीवनशैली, स्वास्थ्य, खेल, शिक्षा और अन्य विषयों पर नवीनतम वीडियो.",
  },
  {
    property: "og:title",
    content:
      "Find the latest videos on entertainment, movies, lifestyle, health, sports, education, and more at NDTV India Shorts. NDTV इंडिया शॉर्ट्स पर देखें मनोरंजन, फ़िल्में, जीवनशैली, स्वास्थ्य, खेल, शिक्षा और अन्य विषयों पर नवीनतम वीडियो. ",
  },
  { property: "og:type", content: "video.other" },
  {
    property: "og:image",
    content: "https://cdn.ndtv.com/common/images/ogndtv.png",
  },

  {
    property: "og:description",
    content:
      "Find the latest videos on entertainment, movies, lifestyle, health, sports, education, and more at NDTV India Shorts. NDTV इंडिया शॉर्ट्स पर देखें मनोरंजन, फ़िल्में, जीवनशैली, स्वास्थ्य, खेल, शिक्षा और अन्य विषयों पर नवीनतम वीडियो. ",
  },
];

// Utility function to generate video metadata
export function getVideoMeta(currentVideo: any, currentVideoUrl: any) {
  let image: any;
  const vdDesc = stripHtmlTags(
    he.decode(decodeUnicode(currentVideo.description))
  );
  const vdTitle = stripHtmlTags(he.decode(decodeUnicode(currentVideo.title)));
  if (currentVideo["media:verticalimage"]!= "") {
    image = currentVideo["media:verticalimage"];
  } else {
    image = currentVideo["media:fullimage"];
  }
  return [
    { title: vdTitle },
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:site",
      content: "@ndtv",
    },
    {
      name: "twitter:url",
      content: currentVideoUrl,
    },
    {
      name: "twitter:description",
      content: vdDesc,
    },
    {
      name: "twitter:image",
      content: image,
    },
    { property: "og:title", content: vdTitle },
    { property: "og:type", content: "video.other" },
    { property: "og:image", content: image },
    { property: "og:url", content: currentVideoUrl },
    { property: "og:description", content: vdDesc },
    {
      "script:ld+json": {
        "@context": "https://schema.org",
        "@type": "VideoObject",
        datePublished: currentVideo.pubDate,
        dateModified: currentVideo.updated_at,
        url: currentVideoUrl,
        headline: vdTitle,
        name: vdTitle,
        uploadDate: currentVideo.pubDate,
        description: vdDesc,
        keywords: currentVideo["media:keywords"],
        thumbnailUrl: currentVideo["media:thumbnail"],
        contentUrl: currentVideo["media:filepath"],
        duration: currentVideo["media:duration"],
        embedUrl: currentVideoUrl,
        potentialAction: {
          "@type": "SeekToAction",
          target: currentVideoUrl,
        },
      },
    },
  ];
}
export function generateVideoSchema(
  currentVideo: any,
  currentVideoUrl: any,
  description: any
) {
  const vdDesc = stripHtmlTags(he.decode(decodeUnicode(description)));
  // console.log("vid_schema description:", vdDesc)
  const vdTitle = stripHtmlTags(he.decode(decodeUnicode(currentVideo.title)));
  return {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    datePublished: currentVideo.pubDate,
    dateModified: currentVideo.updated_at,
    url: currentVideoUrl,
    headline: vdTitle,
    name: vdTitle,
    uploadDate: currentVideo.pubDate,
    description: vdDesc,
    keywords: currentVideo["media:keywords"] || "keywords",
    thumbnailUrl: currentVideo["media:thumbnail"] || "thumbnail url",
    contentUrl: currentVideo["media:filepath"] || "contentUrl",
    duration: currentVideo["media:duration"] || "100",
    embedUrl: currentVideoUrl,
    potentialAction: {
      "@type": "SeekToAction",
      target: currentVideoUrl,
    },
  };
}
export function getCanonicalLink(canonicalLink: any) {
  const canonicalMetaLink = canonicalLink;
  return [{ tagName: "link", rel: "canonical", href: canonicalMetaLink }];
}

// Root Metadata
export const rootMeta = [
  {
    name: "viewport",
    content:
      "width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no",
  },
  { name: "apple-mobile-web-app-capable", content: "yes" },
  {
    name: "title",
    content:
      "Watch Entertainment, Gadgets, Movies, Sports Videos on NDTV Shorts",
  },
  {
    name: "description",
    content:
      "Find the latest videos on entertainment, movies, lifestyle, health, sports, education, and more at NDTV Shorts.",
  },
  {
    name: "keywords",
    content: "NDTV, News, Videos, Shorts, News shorts, Latest trends",
  },

  {
    name: "apple-mobile-web-app-status-bar-style",
    content: "black-translucent",
  },
  { name: "msapplication-tap-highlight", content: "no" },
  {
    name: "google-site-verification",
    content: "yThRoDT_1iDUIum7IPIGT96Y-8rpvmFwlYBBK9EMGXM",
  },
  { httpEquiv: "Content-Type", content: "text/html; charset=UTF-8" },
  { name: "content-language", content: "en" },
  { httpEquiv: "X-UA-Compatible", content: "IE=edge" },
  { tagName: "link", rel: "canonical", href: "https://www.ndtv.com/video" },
];
export const rootMetaHindi = [
  {
    name: "viewport",
    content:
      "width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no",
  },
  { name: "apple-mobile-web-app-capable", content: "yes" },
  {
    name: "title",
    content:
      "Watch Entertainment, Gadgets, Movies, Sports Videos, देखें मनोरंजन, गैजेट्स, फ़िल्में, खेल वीडियो on NDTV India Shorts",
  },
  {
    name: "description",
    content:
      "Find the latest videos on entertainment, movies, lifestyle, health, sports, education, and more at NDTV India Shorts. NDTV इंडिया शॉर्ट्स पर देखें मनोरंजन, फ़िल्में, जीवनशैली, स्वास्थ्य, खेल, शिक्षा और अन्य विषयों पर नवीनतम वीडियो.",
  },
  {
    name: "keywords",
    content: "NDTV India, News, Videos, Shorts, News shorts, Latest trends, shorts in hindi",
  },

  {
    name: "apple-mobile-web-app-status-bar-style",
    content: "black-translucent",
  },
  { name: "msapplication-tap-highlight", content: "no" },
  {
    name: "google-site-verification",
    content: "yThRoDT_1iDUIum7IPIGT96Y-8rpvmFwlYBBK9EMGXM",
  },
  { httpEquiv: "Content-Type", content: "text/html; charset=UTF-8" },
  { name: "content-language", content: "en" },
  { httpEquiv: "X-UA-Compatible", content: "IE=edge" },
  { tagName: "link", rel: "canonical", href: "https://www.ndtv.com/video" },
];

