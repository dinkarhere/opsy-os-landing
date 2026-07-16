/**
 * Every entrance animation on this site starts at `opacity: 0` and relies on
 * Framer Motion's requestAnimationFrame loop to reveal it. rAF is paused by
 * the browser whenever the tab isn't the visible/foreground one — which
 * happens for real visitors too (a link opened into a backgrounded tab from
 * a social app, iOS Low Power Mode throttling, etc.), not just during
 * automated testing. When that happens the animation never ticks and the
 * page is permanently blank, even after the tab is refocused, because
 * Framer Motion only re-evaluates on its own animation loop.
 *
 * This is a content-visibility guarantee, independent of React/Framer
 * Motion: shortly after load, or the moment the page becomes visible if it
 * wasn't, force every element to `opacity: 1` via a CSS class with
 * `!important`. In the normal case animations finish well within the
 * timeout and this is a no-op. Runs before React mounts so it works even if
 * hydration itself is slow or errors.
 */
function reveal() {
  document.documentElement.classList.add("force-reveal");
}

if (document.visibilityState === "visible") {
  setTimeout(reveal, 1200);
} else {
  reveal();
}

document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "visible") reveal();
});
window.addEventListener("pageshow", reveal);
