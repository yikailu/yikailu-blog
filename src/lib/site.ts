import { SITE } from "@/config/site";

export function withTrailingSlash(pathname: string) {
  if (pathname === "/") {
    return pathname;
  }

  return pathname.endsWith("/") ? pathname : `${pathname}/`;
}

export function toAbsoluteUrl(pathname: string) {
  return new URL(pathname, `${SITE.website}/`).toString();
}

export function getCanonicalUrl(pathname: string) {
  return toAbsoluteUrl(withTrailingSlash(pathname));
}

export function getPostPath(slug: string) {
  return withTrailingSlash(`/posts/${slug}`);
}

export function getTopicPath(tag: string) {
  return withTrailingSlash(`/topics/${encodeURIComponent(tag)}`);
}
