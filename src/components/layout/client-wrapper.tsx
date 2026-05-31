"use client";

import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Loader from "@/components/loader";

export default function ClientWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 1. On refresh, if there is a hash (#contact), remove it
    if (window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname);
    }

    // 2. Force scroll to top
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && <Loader onFinish={() => setLoading(false)} />}
      </AnimatePresence>

      <div className={`${loading ? "invisible" : "visible"}`}>{children}</div>
    </>
  );
}
