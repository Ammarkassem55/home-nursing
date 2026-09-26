import { useEffect } from "react";

const SITE_NAME = "محمد صلاح شرف الدين | تمريض منزلي";

function setMetaTag(name, content) {
  if (!content) return;

  let tag = document.querySelector(`meta[name="${name}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("name", name);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

function setOgTag(property, content) {
  if (!content) return;

  let tag = document.querySelector(`meta[property="${property}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("property", property);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

export default function Seo({
  title,
  description,
  keywords,
  image = "/favicon.png",
}) {
  useEffect(() => {
    const fullTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME;
    document.title = fullTitle;

    setMetaTag("description", description);
    setMetaTag("keywords", keywords);

    setOgTag("og:title", fullTitle);
    setOgTag("og:description", description);
    setOgTag("og:type", "website");
    setOgTag("og:locale", "ar_SA");
    setOgTag("og:image", image);
  }, [title, description, keywords, image]);

  return null;
}
