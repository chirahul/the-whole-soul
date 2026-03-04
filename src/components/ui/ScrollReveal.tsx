"use client";

import { useEffect } from "react";

const ALL_SELECTOR =
  ".reveal, .reveal-left, .reveal-right, .reveal-scale, .stagger-children";
const NOT_ACTIVE_SELECTOR =
  ".reveal:not(.active), .reveal-left:not(.active), .reveal-right:not(.active), .reveal-scale:not(.active), .stagger-children:not(.active)";

function activateInViewport() {
  document.querySelectorAll(NOT_ACTIVE_SELECTOR).forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight + 100 && rect.bottom > -100) {
      el.classList.add("active");
    }
  });
}

export function ScrollReveal() {
  useEffect(() => {
    // Step 1: Immediately activate elements already in viewport
    // (BEFORE enabling the CSS hiding via data-scroll-ready)
    activateInViewport();

    // Step 2: Now enable CSS animations for remaining below-fold elements
    document.documentElement.setAttribute("data-scroll-ready", "");

    // Step 3: Observe remaining elements for scroll-based reveal
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("active");
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "60px 0px" }
    );

    document.querySelectorAll(NOT_ACTIVE_SELECTOR).forEach((el) => {
      observer.observe(el);
    });

    // Step 4: Watch for dynamically added content (Suspense boundaries, etc.)
    const mutationObserver = new MutationObserver(() => {
      requestAnimationFrame(() => {
        document.querySelectorAll(NOT_ACTIVE_SELECTOR).forEach((el) => {
          const rect = el.getBoundingClientRect();
          if (rect.top < window.innerHeight + 100 && rect.bottom > -100) {
            el.classList.add("active");
          } else {
            observer.observe(el);
          }
        });
      });
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    // Step 5: Failsafe — force-show everything after 3s no matter what
    const failsafe = setTimeout(() => {
      document
        .querySelectorAll(NOT_ACTIVE_SELECTOR)
        .forEach((el) => el.classList.add("active"));
    }, 3000);

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
      clearTimeout(failsafe);
    };
  }, []);

  return null;
}
