import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto mt-8 md:mt-16">
      <div className="flex flex-col-reverse md:flex-row md:gap-16 gap-8">
        {/* Bio */}
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
            Hi, I&apos;m Trevor.
          </h1>

          <div className="space-y-5 text-lg leading-relaxed text-[#333]">
            <p>
              I&apos;m a builder and writer.
            </p>

            <p>
              I love working on interesting problems, learning new things,
              and sharing what I find along the way.
            </p>

            <p>
              I write about technology, business, and whatever else I&apos;m
              curious about. You can find my{" "}
              <Link href="/writing" className="text-blue-600 hover:text-blue-800">
                articles here
              </Link>
              .
            </p>

            <p>
              To contact me,{" "}
              <a
                href="mailto:trevor@example.com"
                className="text-blue-600 hover:text-blue-800"
              >
                send me an email
              </a>
              . Or reach out on{" "}
              <a
                href="https://x.com"
                className="text-blue-600 hover:text-blue-800"
                target="_blank"
                rel="noopener noreferrer"
              >
                X
              </a>
              .
            </p>
          </div>
        </div>

        {/* Photo */}
        <div className="shrink-0">
          <Image
            src="/headshot.svg"
            alt="Trevor Grant"
            width={280}
            height={280}
            className="rounded-sm object-cover w-48 h-48 md:w-[280px] md:h-[280px]"
            priority
          />
        </div>
      </div>
    </div>
  );
}
