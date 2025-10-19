"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

type LazyMapProps = React.ComponentPropsWithoutRef<"iframe"> & {
  /**
   * How far in pixels (or any valid CSS length) from the viewport to start loading the map.
   * Defaults to 200px to begin fetching slightly before it scrolls into view.
   */
  rootMargin?: string;
  /**
   * Optional custom placeholder to render before the map loads.
   */
  placeholder?: ReactNode;
};

export function LazyMap({
  src,
  title,
  className,
  style,
  width,
  height,
  loading,
  rootMargin = "200px",
  placeholder,
  ...rest
}: LazyMapProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    if (shouldLoad) return;
    if (!src) return;
    if (typeof window === "undefined") return;

    const node = containerRef.current;
    if (!node) return;

    if (!("IntersectionObserver" in window)) {
      setShouldLoad(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShouldLoad(true);
            observer.disconnect();
          }
        });
      },
      { rootMargin }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [rootMargin, shouldLoad, src]);

  const resolvedWidth = width ?? "100%";
  const resolvedHeight = height ?? "150";

  const placeholderStyle: CSSProperties = {
    ...(style ?? {}),
    width: typeof resolvedWidth === "number" ? `${resolvedWidth}px` : resolvedWidth,
    height: typeof resolvedHeight === "number" ? `${resolvedHeight}px` : resolvedHeight,
  };

  return (
    <div ref={containerRef}>
      {shouldLoad ? (
        <iframe
          src={src}
          title={title}
          className={className}
          width={resolvedWidth}
          height={resolvedHeight}
          style={style}
          loading={loading ?? "lazy"}
          {...rest}
        />
      ) : (
        placeholder ?? (
          <div
            aria-hidden="true"
            className={`animate-pulse bg-[#e5e1da] ${className ?? ""}`}
            style={placeholderStyle}
          />
        )
      )}
    </div>
  );
}
