// GSAP + ScrollTrigger: subtle entrance and scroll reveals.
const spinButton = document.querySelector("#spinButton");
const spinCount = document.querySelector("#spinCount");
let spins = 0;
spinButton.addEventListener("click", () => {
  spins += 1;
  spinCount.textContent = String(spins);
  if (window.gsap) {
    gsap.fromTo(spinButton, {scale: .96}, {scale: 1, duration: .35, ease: "back.out(2)"});
  }
});

if (window.gsap && window.ScrollTrigger && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  gsap.registerPlugin(ScrollTrigger);
  gsap.from(".reel-card", {y: 30, opacity: 0, stagger: .08, duration: .7, ease: "power2.out", delay: .15});
  gsap.utils.toArray(".section").forEach((section) => {
    gsap.from(section, {
      y: 28, opacity: 0, duration: .7, ease: "power2.out",
      scrollTrigger: {trigger: section, start: "top 88%", once: true}
    });
  });
  gsap.from(".fox-card", {
    scale: .88, opacity: 0, stagger: .08, duration: .55, ease: "back.out(1.5)",
    scrollTrigger: {trigger: ".fox-grid", start: "top 85%", once: true}
  });
}
