import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

export default function SectionHero({ eyebrow = "IMAM University", title, description, image = "/images/campus-activity-1.jpg" }) {
  return (
    <section className="relative isolate overflow-hidden bg-imam-950 text-white">
      <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover opacity-25" />
      <div className="absolute inset-0 bg-gradient-to-r from-imam-950 via-imam-950/90 to-imam-900/55" />
      <div className="hero-grid absolute inset-0 opacity-40" />
      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="max-w-3xl">
          <div className="mb-5 flex items-center gap-2 text-sm font-semibold text-imam-200">
            <Link href="/" className="inline-flex items-center gap-1 hover:text-white"><Home size={15}/> Home</Link>
            <ChevronRight size={14}/><span>{eyebrow}</span>
          </div>
          <h1 className="text-4xl font-black tracking-[-0.04em] sm:text-5xl lg:text-6xl">{title}</h1>
          {description && <p className="mt-5 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">{description}</p>}
        </div>
      </div>
    </section>
  );
}
