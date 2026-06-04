"use client";

import { useEffect, useState } from "react";
import LoadingScreen from "@/components/ui/LoadingScreen";

export default function ClientLoader({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2400);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return <>{children}</>;
}