"use client";
import { useState } from "react";

export default function SafeImage({ src, fallback = "/images/campus-activity-1.jpg", alt = "", ...props }) {
  const [failed, setFailed] = useState(false);
  return <img src={failed ? fallback : src} alt={alt} onError={() => setFailed(true)} {...props} />;
}
