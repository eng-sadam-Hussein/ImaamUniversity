import Link from "next/link";
import { Facebook, Mail, MapPin, Phone, ShieldCheck } from "lucide-react";
import { university } from "@/data/site";

export default function SiteFooter() {
  return (
    <footer className="bg-imam-950 text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_.8fr_.8fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <img src="/images/imam-logo.jpg" alt="IMAM University" className="h-14 w-14 rounded-full border border-white/15 object-cover"/>
              <div><div className="font-black tracking-[0.05em]">IMAM UNIVERSITY</div><div className="mt-1 text-xs font-bold uppercase tracking-[0.2em] text-imam-300">Together for Excellence</div></div>
            </div>
            <p className="mt-5 max-w-md text-sm leading-7 text-slate-300">{university.description}</p>
            <a href="https://www.facebook.com/sadam.hussain.mo.alim.mohamed" target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-bold text-white transition hover:bg-white/10"><Facebook size={17}/> Facebook</a>
          </div>
          <div>
            <h3 className="font-black">Quick Links</h3>
            <div className="mt-4 space-y-3 text-sm text-slate-300"><Link href="/about" className="block hover:text-white">About Us</Link><Link href="/academics" className="block hover:text-white">Academics</Link><Link href="/admissions" className="block hover:text-white">Admissions</Link><Link href="/research" className="block hover:text-white">Research</Link><Link href="/media/news" className="block hover:text-white">News & Media</Link><Link href="/contact" className="block hover:text-white">Contact</Link></div>
          </div>
          <div>
            <h3 className="font-black">Student Services</h3>
            <div className="mt-4 space-y-3 text-sm text-slate-300"><a href="https://ocms.imamuniversity.edu.so/studentsPortal/login" target="_blank" rel="noreferrer" className="block hover:text-white">Student Portal</a><a href="https://ocms.imamuniversity.edu.so/hemis-verification" target="_blank" rel="noreferrer" className="block hover:text-white">Certificate Verification</a><a href="https://online.imamuniversity.edu.so/" target="_blank" rel="noreferrer" className="block hover:text-white">Online Learning</a><Link href="/students/alumni" className="block hover:text-white">Alumni</Link><Link href="/admin" className="block hover:text-white">Admin Panel</Link></div>
          </div>
          <div>
            <h3 className="font-black">Contact</h3>
            <div className="mt-4 space-y-4 text-sm text-slate-300"><div className="flex gap-3"><MapPin size={18} className="mt-0.5 shrink-0 text-imam-300"/><span>{university.location}</span></div><div className="flex gap-3"><Mail size={18} className="shrink-0 text-imam-300"/><a href={`mailto:${university.email}`}>{university.email}</a></div><div className="flex gap-3"><Phone size={18} className="shrink-0 text-imam-300"/><span>{university.phones.join(" • ")}</span></div></div>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-slate-400 md:flex-row md:items-center md:justify-between">
          <span>© 2026 IMAM University. All Rights Reserved.</span>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2"><span className="inline-flex items-center gap-2"><ShieldCheck size={14}/> Professional Next.js Website</span><a href="https://www.facebook.com/sadam.hussain.mo.alim.mohamed" target="_blank" rel="noreferrer" className="font-bold text-imam-200 hover:text-white">Developed by Sadam Hussein Mohamed</a></div>
        </div>
      </div>
    </footer>
  );
}
