import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto mt-12 md:mt-24">
      <div className="flex gap-8 md:gap-12">
        {/* Sideways name */}
        <div className="hidden md:flex items-end">
          <span className="text-[13px] tracking-[0.3em] uppercase text-muted font-medium -rotate-180 [writing-mode:vertical-lr] select-none">
            Trevor Grant Sidewand
          </span>
        </div>

        <div>
          {/* Photo + Name */}
          <div className="flex items-center gap-6 mb-12">
            <Image
              src="/headshot.svg"
              alt="Trevor Grant Sidewand"
              width={88}
              height={88}
              className="rounded-full object-cover w-[88px] h-[88px]"
              priority
            />
            <div>
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
                Trevor Grant Sidewand
              </h1>
              <p className="text-muted mt-1">Entrepreneur</p>
            </div>
          </div>

          {/* Bio */}
          <div className="space-y-5 text-[17px] leading-relaxed text-[#333]">
            <p>
              I like building things and figuring out how stuff works. Right now
              I&apos;m especially interested in software, AI, and the internet.
            </p>

            <p>
              I write about what I&apos;m learning and thinking about &mdash;
              mostly technology, business, and ideas that don&apos;t fit neatly
              into one category. You can read my{" "}
              <Link href="/writing" className="text-blue-600 hover:text-blue-800 underline underline-offset-2">
                writing here
              </Link>.
            </p>

            <p>
              If you want to get in touch, reach out on{" "}
              <a
                href="https://x.com"
                className="text-blue-600 hover:text-blue-800 underline underline-offset-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                X
              </a>{" "}
              or{" "}
              <a
                href="mailto:trevor@example.com"
                className="text-blue-600 hover:text-blue-800 underline underline-offset-2"
              >
                email me
              </a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
