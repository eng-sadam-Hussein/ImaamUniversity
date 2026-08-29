"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { navigation, quickLinks, university } from "@/data/site";
import { ChevronDown, ExternalLink, Mail, MapPin, Menu, MessageCircle, X, ArrowUpRight } from "lucide-react";

function DesktopNavItem({ item }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const active = item.href === "/" ? pathname === "/" : pathname?.startsWith(item.href);
  if (!item.children) {
    return <Link prefetch href={item.href} className={`rounded-xl px-3 py-2 text-sm font-extrabold transition ${active ? "bg-imam-50 text-imam-700" : "text-slate-700 hover:bg-imam-50 hover:text-imam-700"}`}>{item.label}</Link>;
  }
  return (
    <div className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <Link prefetch href={item.href} onFocus={() => setOpen(true)} className={`flex items-center gap-1 rounded-xl px-3 py-2 text-sm font-extrabold transition ${active ? "bg-imam-50 text-imam-700" : "text-slate-700 hover:bg-imam-50 hover:text-imam-700"}`}>
        {item.label}<ChevronDown size={14} className={`transition duration-200 ${open ? "rotate-180" : ""}`}/>
      </Link>
      <div className={`absolute left-0 top-full z-50 min-w-[280px] pt-2 transition ${open ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none -translate-y-1 opacity-0"}`}>
        <div className="rounded-2xl border border-slate-100 bg-white p-2 shadow-soft">
          {item.children.map((child) => (
            <Link prefetch key={child.href} href={child.href} className="flex items-center justify-between rounded-xl px-4 py-3 text-sm font-bold text-slate-700 transition hover:bg-imam-50 hover:text-imam-700">
              {child.label}<ArrowUpRight size={14} className="opacity-45"/>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

function MobileAccordion({ item, onNavigate }) {
  const [open, setOpen] = useState(false);
  if (!item.children) return <Link prefetch href={item.href} onClick={onNavigate} className="block border-b border-slate-200 px-1 py-4 text-[15px] font-black text-slate-900">{item.label}</Link>;
  return (
    <div className="border-b border-slate-200">
      <button onClick={() => setOpen(v => !v)} className="flex w-full items-center justify-between px-1 py-4 text-left text-[15px] font-black text-slate-900">
        {item.label}<ChevronDown size={18} className={`transition duration-200 ${open ? "rotate-180" : ""}`}/>
      </button>
      <div className={`grid overflow-hidden transition-all duration-200 ${open ? "grid-rows-[1fr] pb-3" : "grid-rows-[0fr]"}`}>
        <div className="min-h-0 space-y-1 overflow-hidden border-l-2 border-imam-100 pl-3">
          <Link prefetch href={item.href} onClick={onNavigate} className="block rounded-lg px-3 py-2.5 text-sm font-bold text-imam-700 hover:bg-imam-50">Overview</Link>
          {item.children.map(child => <Link prefetch key={child.href} href={child.href} onClick={onNavigate} className="block rounded-lg px-3 py-2.5 text-sm font-semibold text-slate-600 hover:bg-imam-50 hover:text-imam-700">{child.label}</Link>)}
        </div>
      </div>
    </div>
  );
}

export default function SiteHeader() {
  const [mobile, setMobile] = useState(false);
  return (
    <header className="sticky top-0 z-[60] bg-white/95 shadow-[0_1px_0_rgba(19,43,63,.08)] backdrop-blur-xl">
      <div className="hidden bg-imam-950 text-white lg:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-2 text-xs">
          <div className="flex items-center gap-5 text-slate-200">
            <a href={`mailto:${university.email}`} className="flex items-center gap-2 hover:text-white"><Mail size={14}/>{university.email}</a>
            <span className="flex items-center gap-2"><MapPin size={14}/>Mogadishu, Somalia</span>
          </div>
          <div className="flex items-center gap-4">
            {quickLinks.slice(0,3).map(link => <a key={link.title} href={link.href} target="_blank" rel="noreferrer" className="flex items-center gap-1 font-semibold text-imam-100 hover:text-white">{link.title}<ExternalLink size={12}/></a>)}
            <a href={`https://wa.me/${university.whatsapp.replace(/\D/g,"")}`} target="_blank" rel="noreferrer" className="flex items-center gap-1 rounded-full bg-imam-600 px-3 py-1 font-bold"><MessageCircle size={13}/> Chat Us</a>
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link prefetch href="/" className="flex min-w-0 items-center gap-3">
          <img src="/images/imam-logo.jpg" alt="IMAM University logo" className="h-11 w-11 shrink-0 rounded-full border border-imam-100 object-cover shadow-sm sm:h-12 sm:w-12"/>
          <div className="min-w-0 leading-tight">
            <div className="truncate text-[13px] font-black tracking-[0.05em] text-imam-950 sm:text-base">IMAM UNIVERSITY</div>
            <div className="mt-0.5 truncate text-[9px] font-bold uppercase tracking-[0.2em] text-imam-600 sm:text-[10px]">Together for Excellence</div>
          </div>
        </Link>
        <nav className="hidden items-center gap-0.5 xl:flex">{navigation.map(item => <DesktopNavItem key={item.label} item={item}/>)}</nav>
        <div className="hidden items-center gap-2 lg:flex">
          <a href="https://online.imamuniversity.edu.so/" target="_blank" rel="noreferrer" className="rounded-xl border border-imam-200 px-4 py-2.5 text-sm font-black text-imam-700 transition hover:bg-imam-50">Online</a>
          <Link prefetch href="/admissions/apply" className="rounded-xl bg-imam-600 px-4 py-2.5 text-sm font-black text-white shadow-lg shadow-imam-600/20 transition hover:bg-imam-700">Apply Now</Link>
        </div>
        <button onClick={() => setMobile(true)} className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-slate-200 text-imam-950 xl:hidden" aria-label="Open menu"><Menu/></button>
      </div>

      {mobile && (
        <div className="fixed inset-0 z-[100] bg-slate-950/70 backdrop-blur-[2px] xl:hidden" onMouseDown={() => setMobile(false)}>
          <aside onMouseDown={e => e.stopPropagation()} className="absolute right-0 top-0 flex h-[100dvh] w-[min(88vw,340px)] flex-col overflow-hidden bg-white shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-100 px-5 py-5">
              <Link href="/" onClick={() => setMobile(false)} className="flex items-center gap-3">
                <img src="/images/imam-logo.jpg" alt="IMAM University" className="h-10 w-10 rounded-full object-cover"/>
                <div><div className="text-xs font-black text-imam-950">IMAM University</div><div className="mt-1 text-[8px] font-black uppercase tracking-[.16em] text-imam-600">Together for Excellence</div></div>
              </Link>
              <button onClick={() => setMobile(false)} className="grid h-9 w-9 place-items-center rounded-full border border-slate-200 text-slate-700" aria-label="Close menu"><X size={18}/></button>
            </div>
            <div className="flex-1 overflow-y-auto px-5 py-4">
              {navigation.map(item => <MobileAccordion key={item.label} item={item} onNavigate={() => setMobile(false)}/>)}
              <div className="mt-6 grid grid-cols-2 gap-2">
                <a href="https://online.imamuniversity.edu.so/" target="_blank" rel="noreferrer" className="rounded-xl border border-imam-200 px-3 py-3 text-center text-sm font-black text-imam-700">Online</a>
                <Link prefetch href="/admissions/apply" onClick={() => setMobile(false)} className="rounded-xl bg-imam-600 px-3 py-3 text-center text-sm font-black text-white">Apply Now</Link>
              </div>
              <div className="mt-5 rounded-2xl bg-imam-50 p-4 text-xs leading-6 text-slate-600">
                <strong className="text-imam-950">Need help?</strong><br/>Contact Admissions or use the Student Portal and Certificate Verification links from the website footer.
              </div>
            </div>
          </aside>
        </div>
      )}
    </header>
  );
}
