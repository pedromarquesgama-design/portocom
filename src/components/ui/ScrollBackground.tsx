"use client";

import { useEffect, useState } from "react";

export function ScrollBackground() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.7);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Fixed site background — appears once past the hero, then sticks */}
      <div
        aria-hidden="true"
        className={`fixed inset-0 z-0 pointer-events-none bg-cover bg-center transition-opacity duration-700 ${
          visible ? "opacity-100" : "opacity-0"
        }`}
        style={{ backgroundImage: "url(/images/background.jpg)" }}
      />
      {/* Light vignette for text readability */}
      <div
        aria-hidden="true"
        className={`fixed inset-0 pointer-events-none z-[1] bg-gradient-to-b from-[#0A0A0E]/40 via-transparent to-[#0A0A0E]/60 transition-opacity duration-700 ${
          visible ? "opacity-100" : "opacity-0"
        }`}
        style={{
          backgroundImage:
            "radial-gradient(circle at 50% 50%, rgba(10, 10, 14, 0.1) 0%, rgba(10, 10, 14, 0.35) 80%, rgba(10, 10, 14, 0.7) 100%)",
        }}
      />
    </>
  );
}
