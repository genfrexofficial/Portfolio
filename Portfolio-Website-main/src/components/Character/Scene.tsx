import { useEffect, useRef } from "react";
import { useLoading } from "../../context/LoadingProvider";
import { setProgress } from "../Loading";
import { setHoloTimeline, setAllTimeline } from "../utils/GsapScroll";

const Scene = () => {
  const holoCardRef = useRef<HTMLDivElement>(null);
  const { setLoading } = useLoading();

  useEffect(() => {
    // Fast, smooth loading progress for instant page display
    const progress = setProgress((value) => setLoading(value));
    
    // Simulate short graceful transition then activate page
    let currentP = 0;
    const interval = setInterval(() => {
      currentP += 25;
      if (currentP >= 100) {
        clearInterval(interval);
        progress.loaded();
      }
    }, 60);

    // Initialize GSAP scroll timelines
    setHoloTimeline();
    setAllTimeline();

    // 3D Mouse Parallax Tilt for the Real Portrait Card
    const onMouseMove = (event: MouseEvent) => {
      if (!holoCardRef.current) return;
      const x = (event.clientX / window.innerWidth) * 2 - 1;
      const y = (event.clientY / window.innerHeight) * 2 - 1;
      const rotY = x * 14;
      const rotX = -y * 14;
      holoCardRef.current.style.transform = `perspective(1000px) rotateY(${rotY}deg) rotateX(${rotX}deg)`;
    };

    const onMouseLeave = () => {
      if (holoCardRef.current) {
        holoCardRef.current.style.transform = `perspective(1000px) rotateY(0deg) rotateX(0deg)`;
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);

    return () => {
      clearInterval(interval);
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return (
    <div className="character-container">
      <div className="character-model">
        {/* Real Living Portrait of Dharshan Selvaraj with 3D Parallax Tilt */}
        <div className="avatar-holo-card-wrap">
          <div className="avatar-holo-card" ref={holoCardRef}>
            <div className="avatar-media-container">
              <video
                autoPlay
                loop
                muted
                playsInline
                poster="/CEO.webp"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              >
                <source src="/CEO_portfolio_hero_animation.mp4" type="video/mp4" />
                <img
                  src="/CEO_portfolio_hero_animation.webp"
                  alt="Dharshan Selvaraj - HR & Business Analytics"
                />
              </video>
            </div>

            {/* Status Badge */}
            <div className="avatar-badge">
              <div className="avatar-badge-text">
                <h4>Dharshan Selvaraj</h4>
                <p>HR & Business Analytics • Karur</p>
              </div>
              <div className="avatar-badge-status">
                <div className="avatar-badge-dot"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scene;
