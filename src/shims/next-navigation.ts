import React, { useSyncExternalStore } from "react";

function subscribe(callback: () => void) {
  window.addEventListener("popstate", callback);
  window.addEventListener("routechange", callback);
  return () => {
    window.removeEventListener("popstate", callback);
    window.removeEventListener("routechange", callback);
  };
}

function getSnapshot() {
  return typeof window !== "undefined" ? window.location.pathname : "/";
}

export function navigateTo(href: string) {
  if (typeof window === "undefined") return;
  if (href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:")) {
    window.location.href = href;
    return;
  }
  const [pathPart, hashPart] = href.split("#");
  const targetPath = pathPart || window.location.pathname;
  const currentPath = window.location.pathname;

  if (targetPath !== currentPath) {
    window.history.pushState({}, "", href);
    window.dispatchEvent(new Event("routechange"));
    if (hashPart) {
      setTimeout(() => {
        const el = document.getElementById(hashPart);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 80);
    } else {
      window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
    }
  } else if (hashPart) {
    window.history.pushState({}, "", href);
    const el = document.getElementById(hashPart);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  } else {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

export function usePathname(): string {
  const raw = useSyncExternalStore(subscribe, getSnapshot, () => "/");
  if (raw.length > 1 && raw.endsWith("/")) {
    return raw.slice(0, -1);
  }
  return raw || "/";
}

export function useRouter() {
  return {
    push: (href: string) => navigateTo(href),
    replace: (href: string) => {
      window.history.replaceState({}, "", href);
      window.dispatchEvent(new Event("routechange"));
    },
    back: () => window.history.back()
  };
}

export function useSearchParams() {
  const search = typeof window !== "undefined" ? window.location.search : "";
  return new URLSearchParams(search);
}
