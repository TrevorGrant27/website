import Link from "next/link";
import { posts } from "@/data/posts";

export const metadata = {
  title: "Writing — Trevor Grant",
  description: "Articles and essays by Trevor Grant.",
};

export default function WritingPage() {
  return (
    <div className="max-w-2xl">
      <h1 className="text-3xl font-bold tracking-tight mb-2">Writing</h1>
      <p className="text-muted mb-12">
        Ideas, lessons, and things I&apos;m thinking about.
      </p>

      <div className="flex flex-col">
        {posts.map((post, i) => (
          <article
            key={post.slug}
            className={`group py-6 ${i !== posts.length - 1 ? "border-b border-border" : ""}`}
          >
            <Link href={`/writing/${post.slug}`} className="no-underline">
              <div className="flex flex-col gap-1">
                <div className="flex items-center justify-between">
                  <h2 className="font-medium group-hover:text-muted transition-colors">
                    {post.title}
                  </h2>
                  <span className="text-sm text-muted shrink-0 ml-4">
                    {post.date}
                  </span>
                </div>
                <p className="text-sm text-muted">{post.description}</p>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
