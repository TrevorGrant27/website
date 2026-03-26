import { notFound } from "next/navigation";
import Link from "next/link";
import { posts } from "@/data/posts";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} — Trevor Grant`,
    description: post.description,
  };
}

function renderMarkdown(content: string) {
  const lines = content.trim().split("\n");
  const elements: React.ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    if (line.startsWith("## ")) {
      elements.push(
        <h2 key={i} className="text-xl font-semibold mt-8 mb-4">
          {line.slice(3)}
        </h2>
      );
    } else if (line.startsWith("> ")) {
      elements.push(
        <blockquote
          key={i}
          className="border-l-2 border-border pl-4 italic text-muted my-4"
        >
          {line.slice(2)}
        </blockquote>
      );
    } else if (line.startsWith("- ")) {
      const items: string[] = [];
      while (i < lines.length && lines[i].startsWith("- ")) {
        items.push(lines[i].slice(2));
        i++;
      }
      elements.push(
        <ul key={`ul-${i}`} className="list-disc list-inside space-y-1 my-4 text-muted">
          {items.map((item, j) => (
            <li key={j} dangerouslySetInnerHTML={{ __html: inlineFormat(item) }} />
          ))}
        </ul>
      );
      continue;
    } else if (/^\d+\.\s/.test(line)) {
      const items: string[] = [];
      while (i < lines.length && /^\d+\.\s/.test(lines[i])) {
        items.push(lines[i].replace(/^\d+\.\s/, ""));
        i++;
      }
      elements.push(
        <ol key={`ol-${i}`} className="list-decimal list-inside space-y-1 my-4 text-muted">
          {items.map((item, j) => (
            <li key={j} dangerouslySetInnerHTML={{ __html: inlineFormat(item) }} />
          ))}
        </ol>
      );
      continue;
    } else if (line.trim() === "") {
      // skip empty lines
    } else {
      elements.push(
        <p
          key={i}
          className="my-4 leading-relaxed text-muted"
          dangerouslySetInnerHTML={{ __html: inlineFormat(line) }}
        />
      );
    }
    i++;
  }

  return elements;
}

function inlineFormat(text: string): string {
  return text
    .replace(/\*\*(.+?)\*\*/g, "<strong class='text-foreground font-semibold'>$1</strong>")
    .replace(/\*(.+?)\*/g, "<em>$1</em>");
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="max-w-2xl">
      <Link
        href="/writing"
        className="text-sm text-muted hover:text-foreground transition-colors no-underline"
      >
        &larr; Back to writing
      </Link>
      <header className="mt-6 mb-8">
        <h1 className="text-3xl font-bold tracking-tight mb-2">{post.title}</h1>
        <p className="text-sm text-muted">{post.date}</p>
      </header>
      <div className="prose">{renderMarkdown(post.content)}</div>
    </article>
  );
}
