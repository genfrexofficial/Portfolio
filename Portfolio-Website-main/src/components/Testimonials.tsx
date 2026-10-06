import { FaStar, FaQuoteLeft } from "react-icons/fa6";
import "./styles/Testimonials.css";

interface TestimonialItem {
  name: string;
  role: string;
  company: string;
  image: string;
  quote: string;
  rating: number;
}

const testimonials: TestimonialItem[] = [
  {
    name: "Shubham Raj",
    role: "Co-Founder",
    company: "Garudax",
    image: "/images/live/shubham_garudax.jpg",
    quote:
      "Working with Dharshan has been an absolute pleasure. His expertise in WordPress development and digital marketing helped us achieve a polished, user-friendly website. Dharshan’s ability to understand our requirements and deliver on time was truly impressive. Highly recommended for anyone seeking a reliable and skilled professional.",
    rating: 5,
  },
  {
    name: "Deepak Paramanantham",
    role: "HR Lead",
    company: "Purezza Technologies",
    image: "/images/live/deepak_purezza.jpg",
    quote:
      "Dharshan’s work exceeded all my expectations. He not only designed a visually stunning website but also optimized it for SEO, driving more traffic to our business. His knowledge of digital marketing tools and dedication to perfection is commendable. I couldn’t have asked for a better developer!",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials-section section-container" id="testimonials">
      <div className="testimonials-header">
        <h2>
          Client <span>Endorsements</span>
        </h2>
        <p>
          Trusted feedback from co-founders, team leads, and collaborating organizations.
        </p>
      </div>

      <div className="testimonials-grid">
        {testimonials.map((t, idx) => (
          <div className="testimonial-card" key={idx}>
            <div className="quote-mark">
              <FaQuoteLeft />
            </div>

            <div className="star-rating">
              {[...Array(t.rating)].map((_, i) => (
                <FaStar key={i} className="star-icon" />
              ))}
            </div>

            <p className="testimonial-quote">"{t.quote}"</p>

            <div className="testimonial-author">
              <div className="author-avatar-wrap">
                <img
                  src={t.image}
                  alt={t.name}
                  className="author-avatar"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = "none";
                  }}
                />
              </div>
              <div className="author-info">
                <h4>{t.name}</h4>
                <p>
                  {t.role} • <span>{t.company}</span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
