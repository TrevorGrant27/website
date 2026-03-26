import Link from "next/link";
import { posts } from "@/data/posts";

const recentPosts = posts.slice(0, 3);

export default function Home() {
  return (
    <div className="max-w-2xl">
      {/* Hero / Intro */}
      <section className="mb-16">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
          Hey, I&apos;m Trevor 👋
        </h1>
        <p className="text-lg text-muted leading-relaxed">
          I&apos;m a builder, writer, and lifelong learner. This is my corner of the
          internet where I share what I&apos;m thinking about, working on, and
          learning along the way.
        </p>
      </section>

      {/* Recent Writing */}
      <section className="mb-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-xl font-semibold tracking-tight">Recent Writing</h2>
          <Link
            href="/writing"
            className="text-sm text-muted hover:text-foreground transition-colors"
          >
            View all &rarr;
          </Link>
        </div>
        <div className="flex flex-col gap-8">
          {recentPosts.map((post) => (
            <article key={post.slug} className="group">
              <Link href={`/writing/${post.slug}`} className="no-underline">
                <div className="flex flex-col gap-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium group-hover:text-muted transition-colors">
                      {post.title}
                    </h3>
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
      </section>

      {/* Currently */}
      <section>
        <h2 className="text-xl font-semibold tracking-tight mb-4">Currently</h2>
        <ul className="list-disc list-inside text-muted space-y-2">
          <li>Building this site</li>
          <li>Reading &amp; writing more</li>
          <li>Exploring new ideas</li>
        </ul>
      </section>
    </div>
  );
}
