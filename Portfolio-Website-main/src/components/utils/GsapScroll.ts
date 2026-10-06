import gsap from "gsap";

export function setCharTimeline(..._args: any[]) {}

export function setHoloTimeline() {
  const tl1 = gsap.timeline({
    scrollTrigger: {
      trigger: ".landing-section",
      start: "top top",
      end: "bottom top",
      scrub: true,
      invalidateOnRefresh: true,
    },
  });
  const tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".about-section",
      start: "center 55%",
      end: "bottom top",
      scrub: true,
      invalidateOnRefresh: true,
    },
  });
  const tl3 = gsap.timeline({
    scrollTrigger: {
      trigger: ".whatIDO",
      start: "top top",
      end: "bottom top",
      scrub: true,
      invalidateOnRefresh: true,
    },
  });

  if (window.innerWidth > 1024) {
    tl1
      .to(".landing-container", { opacity: 0, duration: 0.4 }, 0)
      .to(".landing-container", { y: "40%", duration: 0.8 }, 0)
      .fromTo(".about-me", { y: "-50%" }, { y: "0%" }, 0)
      .to(
        ".avatar-holo-card-wrap",
        {
          scale: 0.88,
          x: "-25vw",
          y: "0%",
          opacity: 1,
          duration: 1,
          ease: "power1.out",
        },
        0
      );

    tl2
      .to(".about-section", { y: "30%", duration: 6 }, 0)
      .to(".about-section", { opacity: 0, delay: 3, duration: 2 }, 0)
      .to(
        ".avatar-holo-card-wrap",
        {
          scale: 0.6,
          x: "-30vw",
          opacity: 0,
          pointerEvents: "none",
          duration: 2.2,
          ease: "power2.in",
        },
        0
      )
      .set(
        ".avatar-holo-card-wrap",
        { visibility: "hidden", pointerEvents: "none" },
        2.2
      )
      .fromTo(
        ".what-box-in",
        { display: "none" },
        { display: "flex", duration: 0.1, delay: 2 },
        0
      )
      .fromTo(
        ".what-box",
        { y: "100%" },
        { y: "0%", duration: 5, delay: 2, ease: "power2.inOut" },
        0
      );

    tl3
      .fromTo(".whatIDO", { y: 0 }, { y: "15%", duration: 2 }, 0)
      .set(
        ".avatar-holo-card-wrap",
        { opacity: 0, visibility: "hidden", pointerEvents: "none" },
        0
      );
  } else {
    const tM2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".what-box-in",
        start: "top 70%",
        end: "bottom top",
      },
    });
    tM2.to(".what-box-in", { display: "flex", duration: 0.1, delay: 0 }, 0);

    const tMobileCard = gsap.timeline({
      scrollTrigger: {
        trigger: ".about-section",
        start: "top 60%",
        end: "bottom 90%",
        scrub: true,
      },
    });
    tMobileCard.to(".avatar-holo-card-wrap", {
      scale: 0.7,
      opacity: 0,
      pointerEvents: "none",
    });
  }
}

export function initCardSpotlight() {
  const cards = document.querySelectorAll<HTMLElement>(
    ".credential-card, .testimonial-card, .about-stat-item, .work-card, .what-content, .contact-box"
  );
  cards.forEach((card) => {
    card.addEventListener("mousemove", (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    });
  });
}

export function setAllTimeline() {
  initCardSpotlight();

  const careerTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".career-section",
      start: "top 30%",
      end: "100% center",
      scrub: true,
      invalidateOnRefresh: true,
    },
  });
  careerTimeline
    .fromTo(
      ".career-timeline",
      { maxHeight: "10%" },
      { maxHeight: "100%", duration: 0.5 },
      0
    )
    .fromTo(
      ".career-timeline",
      { opacity: 0 },
      { opacity: 1, duration: 0.1 },
      0
    )
    .fromTo(
      ".career-info-box",
      { opacity: 0 },
      { opacity: 1, stagger: 0.1, duration: 0.5 },
      0
    )
    .fromTo(
      ".career-dot",
      { animationIterationCount: "infinite" },
      {
        animationIterationCount: "1",
        delay: 0.3,
        duration: 0.1,
      },
      0
    );

  if (window.innerWidth > 1024) {
    careerTimeline.fromTo(
      ".career-section",
      { y: 0 },
      { y: "20%", duration: 0.5, delay: 0.2 },
      0
    );
  } else {
    careerTimeline.fromTo(
      ".career-section",
      { y: 0 },
      { y: 0, duration: 0.5, delay: 0.2 },
      0
    );
  }

  // Smooth entrance reveals for credentials, testimonials, stats, and contact
  gsap.fromTo(
    ".credential-card",
    { opacity: 0, y: 40 },
    {
      opacity: 1,
      y: 0,
      stagger: 0.15,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".credentials-grid",
        start: "top 85%",
        toggleActions: "play none none none",
      },
    }
  );

  gsap.fromTo(
    ".testimonial-card",
    { opacity: 0, y: 40 },
    {
      opacity: 1,
      y: 0,
      stagger: 0.2,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".testimonials-grid",
        start: "top 85%",
        toggleActions: "play none none none",
      },
    }
  );

  gsap.fromTo(
    ".about-stat-item",
    { opacity: 0, scale: 0.9, y: 15 },
    {
      opacity: 1,
      scale: 1,
      y: 0,
      stagger: 0.08,
      duration: 0.5,
      ease: "back.out(1.4)",
      scrollTrigger: {
        trigger: ".about-stats-grid",
        start: "top 85%",
        toggleActions: "play none none none",
      },
    }
  );

  gsap.fromTo(
    ".contact-box",
    { opacity: 0, y: 35 },
    {
      opacity: 1,
      y: 0,
      stagger: 0.15,
      duration: 0.75,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".contact-flex",
        start: "top 85%",
        toggleActions: "play none none none",
      },
    }
  );
}
