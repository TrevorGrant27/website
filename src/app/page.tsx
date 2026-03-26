"use client";

import Image from "next/image";

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto mt-12 md:mt-24">
        <div>
          <div className="flex flex-col-reverse md:flex-row md:items-start md:justify-between md:gap-16 gap-8 mb-12">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Hi, I&apos;m Trevor.
            </h1>
            <Image
              src="/headshot.jpeg"
              alt="Trevor Grant Sidewand"
              width={200}
              height={200}
              className="rounded-sm object-cover w-[160px] h-[160px] md:w-[200px] md:h-[200px] shrink-0"
              priority
            />
          </div>

          {/* Bio */}
          <div className="space-y-5 text-[17px] leading-relaxed text-[#333]">
            <p>
              I&apos;m an entrepreneur.
            </p>

            <p>
              Currently, I&apos;m experimenting with AI while perfecting my bagel recipe.
            </p>

            <p>
              Previously, I founded RWO, a content marketing and go-to-market agency
              helping high-growth startups and enterprise companies build pipeline and
              drive revenue through strategic content, positioning, and GTM execution
              (acquired in 2025).
            </p>

            <p>
              I also have a degree in biomedical engineering, covered the tech industry
              as a journalist, and wrote for The Second City.
            </p>

            <p>
              I love college basketball and complaining about Cleveland sports.
            </p>

            <p>
              I&apos;m born and raised in Cleveland and have lived in Chicago, Paris,
              and Rome. I currently call Austin home alongside my fianc&eacute;e, Carly,
              and two cats, Poseidon and Zeus.
            </p>

            <p>
              To contact me,{" "}
              <button
                type="button"
                onClick={() => {navigator.clipboard.writeText("trevor@rwo.fyi")}}
                className="text-blue-600 hover:text-blue-800 underline underline-offset-2 cursor-pointer"
              >
                send me an email
              </button>
              . Or reach out on{" "}
              <a
                href="https://x.com/trevorisonline"
                className="text-blue-600 hover:text-blue-800 underline underline-offset-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                X
              </a>{" "}
              or{" "}
              <a
                href="https://www.linkedin.com/in/trevorgrantrwo/"
                className="text-blue-600 hover:text-blue-800 underline underline-offset-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>.
            </p>
          </div>
        </div>
    </div>
  );
}
