import { getCollection, type CollectionEntry } from "astro:content";

export type BlogPost = CollectionEntry<"posts">;

const dateFormatter = new Intl.DateTimeFormat("zh-CN", {
  year: "numeric",
  month: "long",
  day: "numeric"
});

export async function getAllPosts() {
  const posts = await getCollection("posts", ({ data }) => !data.draft);

  return posts.sort((a, b) => {
    return b.data.pubDate.getTime() - a.data.pubDate.getTime();
  });
}

export function getFeaturedPost(posts: BlogPost[]) {
  return posts.find((post) => post.data.featured) ?? posts[0];
}

export function getRemainingPosts(posts: BlogPost[], featuredPost?: BlogPost) {
  return posts.filter((post) => post.id !== featuredPost?.id);
}

export function getAllTags(posts: BlogPost[]) {
  return [...new Set(posts.flatMap((post) => post.data.tags))].sort((a, b) =>
    a.localeCompare(b, "zh-CN")
  );
}

export function getPostsByTag(posts: BlogPost[], tag: string) {
  return posts.filter((post) => post.data.tags.includes(tag));
}

export function formatDate(date: Date) {
  return dateFormatter.format(date);
}
