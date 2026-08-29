"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, CheckCircle2, ExternalLink, FlaskConical, GraduationCap, Languages, Lightbulb, Play, ShieldCheck, Sparkles } from "lucide-react";
import MotionReveal from "@/components/MotionReveal";
import AnimatedCounter from "@/components/AnimatedCounter";
import SafeImage from "@/components/SafeImage";
import { centers, events, faculties, news, onlineImages, quickLinks, rector, stats, university } from "@/data/site";

const iconMap = { Languages, Lightbulb };

export default function HomePage() {
  return (
    <>
      <section className="relative isolate min-h-[760px] overflow-hidden bg-imam-950 text-white lg:min-h-[820px]">
        <video src="/videos/about.mp4" poster="/images/about-poster.jpg" autoPlay muted loop playsInline className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-imam-950 via-imam-950/86 to-imam-950/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-imam-950 via-transparent to-imam-950/20" />
        <div className="hero-grid absolute inset-0 opacity-25" />
        <div className="relative mx-auto flex min-h-[760px] max-w-7xl items-center px-4 py-24 sm:px-6 lg:min-h-[820px] lg:px-8">
          <div className="max-w-4xl">
            <motion.div initial={{opacity:0,y:14}} animate={{opacity:1,y:0}} transition={{duration:.45}} className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-imam-100 backdrop-blur"><Sparkles size={14}/> Together for Excellence</motion.div>
            <motion.h1 initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:.58,delay:.05}} className="mt-7 max-w-4xl text-5xl font-black leading-[.98] tracking-[-0.055em] sm:text-6xl lg:text-8xl">Upholding Islamic <span className="text-imam-300">Values.</span><br/>Building Somalia&apos;s Future Through Education.</motion.h1>
            <motion.p initial={{opacity:0,y:18}} animate={{opacity:1,y:0}} transition={{duration:.52,delay:.12}} className="mt-7 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">{university.secondaryTagline}. Discover a modern academic environment designed around knowledge, research, professional growth and meaningful service.</motion.p>
            <motion.div initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} transition={{duration:.5,delay:.18}} className="mt-9 flex flex-wrap gap-3">
              <Link prefetch href="/academics" className="inline-flex items-center gap-2 rounded-2xl bg-imam-500 px-6 py-4 text-sm font-black text-white shadow-xl shadow-imam-500/25 transition hover:-translate-y-1 hover:bg-imam-400">Explore Programs <ArrowRight size={18}/></Link>
              <Link prefetch href="/admissions/apply" className="inline-flex items-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-6 py-4 text-sm font-black text-white backdrop-blur transition hover:-translate-y-1 hover:bg-white/15">Apply Now <GraduationCap size={18}/></Link>
              <Link prefetch href="/about" className="inline-flex items-center gap-2 rounded-2xl px-5 py-4 text-sm font-black text-white/90 hover:text-white"><span className="grid h-9 w-9 place-items-center rounded-full bg-white/10"><Play size={15} fill="currentColor"/></span> Discover IMAM</Link>
            </motion.div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid overflow-hidden rounded-t-4xl border border-white/10 bg-white/10 backdrop-blur-xl sm:grid-cols-2 lg:grid-cols-4">
              {quickLinks.map(item => <a key={item.title} href={item.href} target="_blank" rel="noreferrer" className="group flex items-center justify-between border-white/10 px-5 py-5 text-sm font-black text-white transition hover:bg-white/10 sm:border-r">{item.title}<ArrowRight size={17} className="transition group-hover:translate-x-1"/></a>)}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <MotionReveal className="grid gap-4 lg:grid-cols-[1fr_1fr]">
            <a href="https://online.imamuniversity.edu.so/" target="_blank" rel="noreferrer" className="group relative overflow-hidden rounded-4xl bg-imam-950 p-7 text-white shadow-soft sm:p-9">
              <div className="hero-grid absolute inset-0 opacity-30"/><div className="relative"><span className="text-xs font-black uppercase tracking-[.2em] text-imam-300">Digital Learning</span><h2 className="mt-3 text-3xl font-black">Online Learning</h2><p className="mt-3 max-w-lg leading-7 text-slate-300">Access the university&apos;s online learning environment and continue your academic journey through connected digital services.</p><span className="mt-6 inline-flex items-center gap-2 text-sm font-black text-imam-200">Open Online Platform <ExternalLink size={16}/></span></div>
            </a>
            <Link prefetch href="/admissions/apply" className="group relative overflow-hidden rounded-4xl bg-gradient-to-br from-imam-600 to-imam-800 p-7 text-white shadow-soft sm:p-9">
              <div className="absolute -right-10 -top-10 h-44 w-44 rounded-full bg-white/10"/><div className="relative"><span className="text-xs font-black uppercase tracking-[.2em] text-imam-100">Admissions</span><h2 className="mt-3 text-3xl font-black">Apply to IMAM University</h2><p className="mt-3 max-w-lg leading-7 text-imam-50">Explore your study level, prepare your documents and use the redesigned multi-step application experience.</p><span className="mt-6 inline-flex items-center gap-2 text-sm font-black">Start Application <ArrowRight size={16}/></span></div>
            </Link>
          </MotionReveal>
        </div>
      </section>

      <section className="bg-imam-50 py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.05fr_.95fr] lg:px-8">
          <MotionReveal>
            <span className="text-xs font-black uppercase tracking-[0.2em] text-imam-600">About IMAM University</span>
            <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] text-imam-950 sm:text-5xl">Education rooted in values and focused on the future.</h2>
            <p className="mt-6 text-base leading-8 text-slate-600">{university.description}</p>
            <p className="mt-4 text-base leading-8 text-slate-600">This redesigned experience brings academic programs, admissions, research, student services, centers and university updates into one clear, professional digital destination.</p>
            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {stats.map(item => <div key={item.label} className="rounded-2xl border border-imam-100 bg-white p-4 shadow-card"><div className="text-2xl font-black text-imam-700"><AnimatedCounter value={item.value} suffix={item.suffix}/></div><div className="mt-1 text-xs font-bold leading-5 text-slate-500">{item.label}</div></div>)}
            </div>
            <Link prefetch href="/about" className="mt-8 inline-flex items-center gap-2 rounded-xl bg-imam-950 px-5 py-3 text-sm font-black text-white hover:bg-imam-800">About the University <ArrowRight size={17}/></Link>
          </MotionReveal>
          <MotionReveal delay={0.08} className="grid grid-cols-2 gap-4">
            <img src="/images/campus-activity-1.jpg" alt="IMAM University student activity" className="h-72 w-full rounded-4xl object-cover shadow-card"/>
            <SafeImage src={onlineImages.lecture} fallback="/images/presentation-2.jpg" alt="University lecture environment" className="mt-10 h-72 w-full rounded-4xl object-cover shadow-card"/>
            <div className="col-span-2 -mt-2 flex items-center gap-4 rounded-3xl bg-imam-950 p-5 text-white shadow-card"><ShieldCheck className="text-imam-300"/><div><div className="font-black">Together for Excellence</div><div className="mt-1 text-sm text-slate-300">Excellence • Integrity • Innovation • Service</div></div></div>
          </MotionReveal>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <MotionReveal className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between"><div><span className="text-xs font-black uppercase tracking-[0.2em] text-imam-600">Academic Pathways</span><h2 className="mt-3 text-4xl font-black tracking-[-0.04em] text-imam-950">Bachelor, Master & Diploma Programs</h2><p className="mt-3 max-w-2xl leading-7 text-slate-600">Explore undergraduate faculties, graduate opportunities and professional diploma pathways in a structured academic catalogue.</p></div><Link prefetch href="/academics" className="inline-flex items-center gap-2 text-sm font-black text-imam-700">View all academics <ArrowRight size={17}/></Link></MotionReveal>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {faculties.map((faculty,i) => <MotionReveal key={faculty.title} delay={i*.03}><Link prefetch href={`/academics/undergraduate#${faculty.slug}`} className="group block h-full overflow-hidden rounded-3xl border border-imam-100 bg-white shadow-card transition hover:-translate-y-1 hover:shadow-soft"><div className="relative h-52 overflow-hidden"><img src={faculty.image} alt={faculty.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105"/><div className="absolute inset-0 bg-gradient-to-t from-imam-950/75 to-transparent"/><span className="absolute bottom-4 left-4 rounded-full bg-white/90 px-3 py-1 text-[11px] font-black uppercase tracking-[0.14em] text-imam-700">Undergraduate</span></div><div className="p-6"><h3 className="text-xl font-black text-imam-950">{faculty.title}</h3><p className="mt-3 text-sm leading-7 text-slate-600">{faculty.description}</p><span className="mt-5 inline-flex items-center gap-2 text-sm font-black text-imam-700">Explore faculty <ArrowRight size={16}/></span></div></Link></MotionReveal>)}
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">{[{title:"Bachelor Programs",text:"Six academic faculties",href:"/academics/undergraduate",icon:GraduationCap},{title:"Master Programs",text:"10+ graduate programs",href:"/academics/postgraduate",icon:BookOpen},{title:"Diploma Programs",text:"Professional pathways",href:"/academics/diploma",icon:FlaskConical}].map(item => <Link prefetch key={item.title} href={item.href} className="flex items-center gap-4 rounded-2xl border border-imam-100 bg-imam-50 p-5 transition hover:-translate-y-1 hover:bg-white hover:shadow-card"><span className="grid h-12 w-12 place-items-center rounded-2xl bg-imam-100 text-imam-700"><item.icon/></span><div><div className="font-black text-imam-950">{item.title}</div><div className="mt-1 text-sm text-slate-500">{item.text}</div></div></Link>)}</div>
        </div>
      </section>

      <section className="bg-imam-50 py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="grid gap-10 lg:grid-cols-[.78fr_1.22fr] lg:items-center"><MotionReveal><span className="text-xs font-black uppercase tracking-[0.2em] text-imam-600">Rector&apos;s Message</span><h2 className="mt-4 text-4xl font-black tracking-[-0.04em] text-imam-950">Leadership committed to learning, innovation and excellence.</h2><p className="mt-5 leading-8 text-slate-600">{rector.message[0]}</p><p className="mt-4 leading-8 text-slate-600">{rector.message[2]}</p><div className="mt-6"><div className="font-black text-imam-950">{rector.name}</div><div className="text-sm font-bold text-imam-600">The Rector</div></div><Link prefetch href="/about/welcome" className="mt-6 inline-flex items-center gap-2 text-sm font-black text-imam-700">Read full message <ArrowRight size={17}/></Link></MotionReveal><MotionReveal delay={.06} className="relative overflow-hidden rounded-4xl bg-imam-950 shadow-soft"><SafeImage src={rector.image} fallback="/images/about-poster.jpg" alt={`${rector.name}, Rector of IMAM University`} className="h-[520px] w-full object-cover object-top opacity-95"/><div className="absolute inset-0 bg-gradient-to-t from-imam-950 via-transparent to-transparent"/><div className="absolute bottom-0 left-0 right-0 p-7 text-white"><div className="text-2xl font-black">Together for Excellence</div><div className="mt-2 text-sm text-slate-300">Education • Research • Integrity • Service</div></div></MotionReveal></div></div>
      </section>

      <section className="relative overflow-hidden bg-imam-950 py-20 text-white lg:py-24"><div className="hero-grid absolute inset-0 opacity-30"/><div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><MotionReveal className="text-center"><span className="text-xs font-black uppercase tracking-[0.2em] text-imam-300">Specialized Centers</span><h2 className="mt-3 text-4xl font-black tracking-[-0.04em]">Language, creativity and innovation beyond the classroom.</h2></MotionReveal><div className="mt-10 grid gap-6 md:grid-cols-2">{centers.map(center => { const Icon=iconMap[center.icon]; return <MotionReveal key={center.slug}><Link prefetch href={`/centers/${center.slug}`} className="group block overflow-hidden rounded-4xl border border-white/10 bg-white/5 backdrop-blur transition hover:-translate-y-1 hover:bg-white/10"><SafeImage src={center.image} fallback="/images/presentation-1.jpg" alt={center.title} className="h-56 w-full object-cover opacity-80"/><div className="p-8"><span className="grid h-14 w-14 place-items-center rounded-2xl bg-imam-500 text-white"><Icon/></span><h3 className="mt-6 text-2xl font-black">{center.title}</h3><p className="mt-3 leading-8 text-slate-300">{center.description}</p><span className="mt-6 inline-flex items-center gap-2 font-black text-imam-300">Explore center <ArrowRight size={17}/></span></div></Link></MotionReveal>})}</div></div></section>

      <section className="bg-white py-20 lg:py-24"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><MotionReveal className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between"><div><span className="text-xs font-black uppercase tracking-[0.2em] text-imam-600">Latest Updates</span><h2 className="mt-3 text-4xl font-black tracking-[-0.04em] text-imam-950">News & university life</h2></div><Link prefetch href="/media/news" className="inline-flex items-center gap-2 text-sm font-black text-imam-700">View all news <ArrowRight size={17}/></Link></MotionReveal><div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">{news.slice(0,6).map((item,i)=><MotionReveal key={item.title} delay={i*.03}><article className="h-full overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-card"><img src={item.image} alt={item.title} className="h-56 w-full object-cover"/><div className="p-6"><div className="text-xs font-black uppercase tracking-[0.14em] text-imam-600">{item.category} • {item.date}</div><h3 className="mt-3 text-xl font-black leading-snug text-imam-950">{item.title}</h3><p className="mt-3 text-sm leading-7 text-slate-600">{item.excerpt}</p></div></article></MotionReveal>)}</div></div></section>

      <section className="bg-imam-50 py-20 lg:py-24"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><MotionReveal className="grid gap-8 lg:grid-cols-[.9fr_1.1fr] lg:items-center"><div><span className="text-xs font-black uppercase tracking-[0.2em] text-imam-600">Campus Life</span><h2 className="mt-3 text-4xl font-black tracking-[-0.04em] text-imam-950">Learn, grow, lead and serve.</h2><p className="mt-5 leading-8 text-slate-600">Students grow through academics, presentations, research, collaborative learning, leadership activities and community engagement.</p><div className="mt-6 space-y-3">{["Academic learning and research","Student leadership and collaboration","Community service and social responsibility","Professional and practical development","Digital skills and innovation","Career awareness and lifelong learning"].map(x=><div key={x} className="flex items-center gap-3 text-sm font-bold text-slate-700"><CheckCircle2 size={18} className="text-imam-600"/>{x}</div>)}</div></div><div className="grid grid-cols-2 gap-4">{events.slice(0,3).map((event,i)=><div key={event.title} className={i===0?"col-span-2":""}><img src={event.image} alt={event.title} className={`w-full rounded-3xl object-cover shadow-card ${i===0?"h-72":"h-52"}`}/><div className="mt-2 text-sm font-black text-imam-950">{event.title}</div></div>)}</div></MotionReveal></div></section>

      <section className="bg-white py-20 lg:py-24"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><MotionReveal className="overflow-hidden rounded-[2.5rem] bg-gradient-to-r from-imam-950 to-imam-700 px-6 py-12 text-white shadow-soft sm:px-10 lg:flex lg:items-center lg:justify-between lg:px-14"><div className="max-w-2xl"><div className="text-xs font-black uppercase tracking-[0.2em] text-imam-200">Admissions</div><h2 className="mt-3 text-4xl font-black tracking-[-0.04em]">Your next chapter can start at IMAM University.</h2><p className="mt-4 leading-8 text-slate-200">Explore academic programs, review admission requirements and submit your application through the professional online application workflow.</p></div><div className="mt-8 flex flex-wrap gap-3 lg:mt-0"><Link prefetch href="/admissions/apply" className="rounded-2xl bg-white px-6 py-4 text-sm font-black text-imam-950">Apply Now</Link><Link prefetch href="/admissions" className="rounded-2xl border border-white/20 px-6 py-4 text-sm font-black">Admission Guide</Link></div></MotionReveal></div></section>
    </>
  );
}
