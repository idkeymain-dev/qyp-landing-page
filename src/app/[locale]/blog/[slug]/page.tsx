import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

interface Section {
  heading: string | null;
  body: string;
}

interface Post {
  slug: string;
  title: string;
  date: string;
  description: string;
  tags: string[];
  sections: Section[];
  cta?: string;
}

function getPost(slug: string): Post | null {
  const file = path.join(process.cwd(), "src/content/blog", `${slug}.json`);
  if (!fs.existsSync(file)) return null;
  return JSON.parse(fs.readFileSync(file, "utf-8")) as Post;
}

export function generateStaticParams() {
  const dir = path.join(process.cwd(), "src/content/blog");
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".json"))
    .map((f) => ({ slug: f.replace(".json", "") }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return { title: post.title, description: post.description };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-20 px-6 max-w-2xl mx-auto">
        <Link
          href="/en/blog"
          className="text-sm text-[#6a8a88] hover:text-[#2ec4b6] transition-colors"
        >
          ← Back to blog
        </Link>

        <div className="mt-8 mb-12">
          <time className="text-sm text-[#6a8a88]">{post.date}</time>
          <h1 className="text-3xl font-bold text-[#f4f3f0] mt-2 mb-4 leading-tight">
            {post.title}
          </h1>
          {post.tags?.length > 0 && (
            <div className="flex gap-2 flex-wrap">
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
        </div>

        <article className="prose prose-invert max-w-none">
          {post.sections.map((sec, i) => (
            <div key={i} className="mb-8">
              {sec.heading && (
                <h2 className="text-xl font-semibold text-[#f4f3f0] mb-3">
                  {sec.heading}
                </h2>
              )}
              <p className="text-[#a0a0a8] leading-relaxed">{sec.body}</p>
            </div>
          ))}
        </article>

        {post.cta && (
          <div className="mt-12 border border-[#2ec4b6] rounded-2xl p-6 bg-[#1a1617]">
            <p className="text-[#f4f3f0] mb-4">{post.cta}</p>
            <a
              href="https://play.google.com/store/apps/details?id=com.hermes.nest"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 rounded-full bg-[#2ec4b6] text-[#1a1a1c] font-semibold hover:bg-[#1a9e94] transition-colors"
            >
              Download qyp — free on Android
            </a>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
