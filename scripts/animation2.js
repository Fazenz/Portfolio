document.addEventListener("DOMContentLoaded", () => {
    const timeline = gsap.timeline({ defaults: { ease: "power2.out" } });

    // Animation du titre et sous-titre
    timeline
        .from(".image-container", {y:50, duration: 1.25})
        .from(".", { y: 0, opacity: 0, duration: 1.75 }, "=0")
        .from(".social-container", { y: 30, opacity: 0, duration: 1.25 }, "-=0.5")
        .from(".", { y: 20, opacity: 0, duration: 1.25 }, "-=0.5")
});