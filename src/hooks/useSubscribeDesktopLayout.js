import { useSyncExternalStore } from "react";

const MD_MEDIA_QUERY = "(min-width: 768px)";

const subscribeDesktop = (onChange) => {
  const mediaQuery = window.matchMedia(MD_MEDIA_QUERY);
  mediaQuery.addEventListener("change", onChange);
  return () => mediaQuery.removeEventListener("change", onChange);
};

export function useSubscribeDesktopLayout() {
  const isDesktop = useSyncExternalStore(
    subscribeDesktop,
    () => window.matchMedia(MD_MEDIA_QUERY).matches,
    () => false,
  );

  return isDesktop;
}
