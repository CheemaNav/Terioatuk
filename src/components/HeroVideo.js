"use client";

import { useEffect, useRef, useState } from "react";

export default function HeroVideo() {
  const videoRef = useRef(null);
  const [show, setShow] = useState(true);

  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (motion.matches) {
      setShow(false);
      return;
    }

    const video = videoRef.current;
    if (!video) return;
    video.muted = true;
    video.loop = true;
    const attempt = video.play();
    if (attempt) {
      attempt.catch(() => setShow(false));
    }
  }, []);

  if (!show) return null;

  return (
    <video
      ref={videoRef}
      className="hero-video pointer-events-none absolute inset-0 h-full w-full max-w-none object-cover"
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      aria-hidden="true"
    >
      <source
        src="https://terioatinfotech.com/wp-content/uploads/2025/03/home-banner.mp4"
        type="video/mp4"
      />
    </video>
  );
}
