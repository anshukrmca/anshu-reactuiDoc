// UrlReferrerCheck.tsx
import React, { useEffect, useState, type ReactNode } from "react";
import DirectAccessURLGuard from "../pages/DirectAccessURLGuard";

interface UrlReferrerCheckProps {
  children: ReactNode;
}

const UrlReferrerCheck: React.FC<UrlReferrerCheckProps> = ({ children }) => {
  const [hasError, setHasError] = useState(false);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const ref = document.referrer;
    const currentHost = window.location.host;
    const isInternalRef = ref.includes(currentHost);

    const navEntries = performance.getEntriesByType("navigation") as PerformanceNavigationTiming[];
    const navType = navEntries[0]?.type; // "navigate", "reload", "back_forward"

    // ✅ Logic:
    // 1. Allow if internal navigation
    // 2. Allow if page reload or back/forward
    // 3. Block if new tab or first-time direct access
    if (isInternalRef || navType === "reload" || navType === "back_forward") {
      setHasError(false);
    } else {
      setHasError(true);
    }

    setChecked(true);
  }, []);

  if (!checked) return null; // wait until check completes
  if (hasError) return <DirectAccessURLGuard />;

  return <>{children}</>;
};

export default UrlReferrerCheck;
