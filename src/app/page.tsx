import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto mt-12 md:mt-24">
        <div>
          {/* Photo + Name */}
          <div className="flex items-center gap-6 mb-12">
            <Image
              src="/headshot.jpeg"
              alt="Trevor Grant Sidewand"
              width={140}
              height={140}
              className="rounded-full object-cover w-[120px] h-[120px] md:w-[140px] md:h-[140px]"
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
              I&apos;m an entrepreneur.
            </p>

            <p>
              Co-founded RWO, a content marketing and go-to-market agency
              helping high-growth startups and enterprise companies build
              pipeline and drive revenue through strategic content, positioning,
              and GTM execution (acquired by Jayne Agency).
            </p>
          </div>
        </div>
    </div>
  );
}
