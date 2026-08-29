"use client";
import { useEffect, useRef, useState } from "react";

export default function AnimatedCounter({ value = 0, suffix = "", duration = 1200 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting || started.current) return;
      started.current = true;
      const start = performance.now();
      const tick = (now) => {
        const progress = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - progress, 3);
        setCount(Math.round(value * eased));
        if (progress < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, { threshold: 0.35 });
    observer.observe(node);
    return () => observer.disconnect();
  }, [value, duration]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}
