import { useEffect, useRef } from "react";
import { seo, SectionSEO } from "../data/content";

/**
 * Watches every section with a matching id in `seo` and updates
 * document.title + <meta name="description"> to that section's
 * values whenever it becomes the dominant section in the viewport.
 *
 * This gives every section its own effective SEO identity even
 * though the site is a single page/route.
 */
export function useSectionSEO() {
  const currentId = useRef<string>("home");

  useEffect(() => {
    const descriptionTag = document.querySelector('meta[name="description"]');

    const applySEO = (data: SectionSEO) => {
      if (currentId.current === data.id) return;
      currentId.current = data.id;
      document.title = data.title;
      if (descriptionTag) descriptionTag.setAttribute("content", data.description);
    };

    const sections = Object.values(seo)
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) {
          const data = seo[visible.target.id];
          if (data) applySEO(data);
        }
      },
      { threshold: [0.15, 0.3, 0.5, 0.7], rootMargin: "-80px 0px -40% 0px" }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}
