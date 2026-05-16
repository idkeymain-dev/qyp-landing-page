import fs from "fs";
import path from "path";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

interface Post {
  slug: string;
  title: string;
  date: string;
  description: string;
  tags: string[];
}

function getPosts(): Post[] {
  const dir = path.join(process.cwd(), "src/content/blog");
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".json"))
    .map((f) => {
      const raw = fs.readFileSync(path.join(dir, f), "utf-8");
      return JSON.parse(raw) as Post;
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export default function BlogPage() {
  const posts = getPosts();

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-20 px-6 max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-[#f4f3f0] mb-3">Blog</h1>
        <p className="text-[#6a8a88] mb-12 text-lg">
          Tips, guides and ideas to help you spend smarter and save more.
        </p>

        {posts.length === 0 ? (
          <p className="text-[#6a8a88]">No posts yet. Check back soon.</p>
        ) : (
          <ul className="space-y-8">
            {posts.map((post) => (
              <li key={post.slug}>
                <Link
                  href={`/en/blog/${post.slug}`}
                  className="group block border border-[#2a2a2e] rounded-2xl p-6 hover:border-[#2ec4b6] transition-colors bg-[#1a1617]"
                >
                  <time className="text-sm text-[#6a8a88]">{post.date}</time>
                  <h2 className="text-xl font-semibold text-[#f4f3f0] mt-1 mb-2 group-hover:text-[#2ec4b6] transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-[#6a8a88] text-sm leading-relaxed">
                    {post.description}
                  </p>
                  {post.tags?.length > 0 && (
                    <div className="flex gap-2 mt-4 flex-wrap">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2 py-1 rounded-full bg-[#2a2a2e] text-[#6a8a88]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </main>
      <Footer />
    </>
  );
}
