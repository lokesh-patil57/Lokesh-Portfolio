import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
  const sectionRef = useRef(null);
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const project3Ref = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [
      project1Ref.current,
      project2Ref.current,
      project3Ref.current,
    ];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          <div ref={project1Ref} className="first-project-wrapper">
            <div className="image-wrapper">
              <img src="/images/project1.png" alt="SIH" />
            </div>
            <div className="text-content">
              <h2>
                Smart-AYUSH Registration Portal , Smart India Hackathon-2024
              </h2>
              <p className="text-white-50 md:text-xl">
                An website built with React Native, MongoDB , & TailwindCSS for
                a fast , secure and user-friendly experience.
              </p>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={project2Ref}>
              <div className="image-wrapper bg-[#FFEFDB]">
                <img
                  src="/images/project2.png"
                  alt="FinAssist"
                />
              </div>
              <h2>Financial Assistance Platform</h2>
            </div>

            <div className="project" ref={project3Ref}>
              <div className="image-wrapper bg-[#FFE7EB]">
                <img src="/images/project3.png" alt="CyberAware" />
              </div>
              <h2>Cyber Awareness Platform</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowcaseSection;
