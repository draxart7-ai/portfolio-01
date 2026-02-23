import { SectionHeader } from "./section-header";
import { AboutCard } from "./about-card";
import "./about.css";

const content = [
  {
    id: 0,
    title: "Engineer",
    description:
      "Web applications, video games, mobile games and even virtual reality. Having programed on a variety of platforms as well as languages,  I have been challenged to work within restraints while providing optimal quality.",
  },
  {
    id: 1,
    title: "Artist",
    description:
      "I attended the Art Institute of San Diego for a BS in Media Arts and Animation. I received a solid foundation of the Adobe Suite, 3d modeling, game engines and traditional art skills. Being an Artist gives me perspective to find creative solutions for complex problems.",
  },
  {
    id: 2,
    title: "Animator",
    description:
      "I've animated them all, 2d characters, 3d objects and web elements. Animation adds a layer of quality and a pleasing aesthetic to any project. Having a foundation in animation I can bring subtle, appealing touches that will bring the project to life.",
  },
];
export const About = () => {
  let aboutCards = content.map((x, i) => {
    return <AboutCard key={i} {...x} />;
  });

  return (
    <div className="About">
      <SectionHeader title="About" />
      <div className="container" style={{ padding: "10px" }}>
        <div className="me">
          <img
            src="/assets/alan-01.jpg"
            alt="profile"
            height="300px"
            style={{
              borderRadius: "24px",
              boxShadow: "2px 2px 2px rgba(10, 10, 10, 0.5)",
            }}
          />
          <div className="text">
            <div className="h2 title"> Hello, I am Alan. </div>
            <div className="h5 subtitle">Web Developer | Technical Artist</div>
            <p className="h4 info">
              I love board games, video games, hiking, playing sports, my family
              and life in general. I am an upbeat optimist that enjoys a good
              challenge. With being well organized I feel like a day of planning
              saves a week of coding. I approach all my tasks with clarity and a
              well thought out approach. With a strong ability to foresee issues
              before they arise, I build stable, versatile and tested code.
            </p>
          </div>
        </div>
        <div className="aboutCards-container">{aboutCards}</div>
      </div>
    </div>
  );
};
