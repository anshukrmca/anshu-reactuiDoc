import React, { useEffect, useState, type ReactNode } from "react";
import { useLocation } from "react-router-dom";
import DirectAccessURLGuard from "../pages/DirectAccessURLGuard";

interface UrlReferrerCheckProps {
  children: ReactNode;
}

const UrlReferrerCheck: React.FC<UrlReferrerCheckProps> = ({ children }) => {
  const [checked, setChecked] = useState(false);
  const [hasError, setHasError] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const sessionKey = "app-internal-nav";

    // 1️⃣ Check if user has previously navigated inside app
    const hasVisited = sessionStorage.getItem(sessionKey);

    // 2️⃣ Check referrer (may be empty in production)
    const ref = document.referrer;
    const currentHost = window.location.host;
    const isInternalRef = ref && ref.includes(currentHost);

    if (hasVisited || isInternalRef) {
      setHasError(false);
    } else {
      setHasError(true);
    }

    // 3️⃣ Mark as visited for next internal navigation
    sessionStorage.setItem(sessionKey, "true");
    setChecked(true);
  }, [location.pathname]);

  if (!checked) return null;
  if (hasError) return <DirectAccessURLGuard />;

  return <>{children}</>;
};

export default UrlReferrerCheck;
  