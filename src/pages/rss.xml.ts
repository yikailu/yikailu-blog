import rss from "@astrojs/rss";
import { SITE } from "@/config/site";
import { getAllPosts } from "@/lib/posts";
import { getPostPath } from "@/lib/site";

export async function GET() {
  const posts = await getAllPosts();

  return rss({
    title: SITE.title,
    description: SITE.description,
    site: SITE.website,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: getPostPath(post.slug)
    })),
    customData: `<language>${SITE.lang}</language><copyright>© ${new Date().getFullYear()} ${SITE.author}</copyright>`
  });
}
