"use client";
import { useRef, useState } from "react";
import { Pause, Play, RotateCcw, Volume2, VolumeX } from "lucide-react";

export default function VideoShowcase() {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) { v.play(); setPlaying(true); }
    else { v.pause(); setPlaying(false); }
  };
  const restart = () => {
    const v = videoRef.current;
    if (!v) return;
    v.currentTime = 0;
    v.play();
    setPlaying(true);
  };
  const toggleMute = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
  };

  return (
    <div className="overflow-hidden rounded-4xl border border-imam-100 bg-imam-950 shadow-soft">
      <div className="relative aspect-video bg-black">
        <video
          ref={videoRef}
          src="/videos/about.mp4"
          poster="/images/about-poster.jpg"
          className="video-surface h-full w-full object-cover"
          playsInline
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          onEnded={() => setPlaying(false)}
        />
        {!playing && (
          <button onClick={togglePlay} className="absolute inset-0 grid place-items-center bg-imam-950/30 transition hover:bg-imam-950/20" aria-label="Play video">
            <span className="grid h-20 w-20 place-items-center rounded-full bg-white/95 text-imam-700 shadow-2xl transition hover:scale-105"><Play size={30} fill="currentColor"/></span>
          </button>
        )}
      </div>
      <div className="flex flex-wrap items-center gap-3 border-t border-white/10 bg-imam-950 px-4 py-4 text-white sm:px-6">
        <button onClick={togglePlay} className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2 text-sm font-bold hover:bg-white/15">
          {playing ? <Pause size={17}/> : <Play size={17}/>} {playing ? "Pause" : "Play"}
        </button>
        <button onClick={restart} className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2 text-sm font-bold hover:bg-white/15"><RotateCcw size={17}/> Restart</button>
        <button onClick={toggleMute} className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2 text-sm font-bold hover:bg-white/15">
          {muted ? <VolumeX size={17}/> : <Volume2 size={17}/>} {muted ? "Unmute" : "Mute"}
        </button>
        <span className="ml-auto text-xs font-semibold uppercase tracking-[0.18em] text-imam-200">IMAM University • About</span>
      </div>
    </div>
  );
}
