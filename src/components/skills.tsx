import { SectionHeader } from "./section-header";
import { SkillCard } from "./skill-card";
import "./skills.css";

const content = {
  programming: {
    cards: [
      {
        id: 0,
        image: "JavaScript-Icon.png",
        title: "JavaScript",
      },
      {
        id: 1,
        image: "NodeJs-Icon.png",
        title: "NodeJs",
      },
      {
        id: 2,
        image: "Css3-Icon.png",
        title: "CSS3",
      },
      {
        id: 3,
        image: "Html5-Icon.png",
        title: "Html 5",
      },
      {
        id: 4,
        image: "PostgreSQL-Icon.png",
        title: "PostgreSQL",
      },
      {
        id: 5,
        image: "Express-Icon.png",
        title: "Express",
      },
      {
        id: 6,
        image: "Python-Icon.png",
        title: "Python",
      },
      {
        id: 7,
        image: "React-Icon.png",
        title: "React",
      },
      {
        id: 8,
        image: "CSharp-Icon.png",
        title: "CSharp",
      },
      {
        id: 9,
        image: "Git-Icon.png",
        title: "Git",
      },
      {
        id: 10,
        image: "GreenSock-Icon.png",
        title: "GreenSock",
      },
      {
        id: 11,
        image: "Sass-Icon.png",
        title: "Sass",
      },
      {
        id: 12,
        image: "Redux-Icon.png",
        title: "Redux",
      },
      {
        id: 13,
        image: "Unity-Icon.png",
        title: "Unity",
      },
      {
        id: 14,
        image: "UnrealEngine-Icon.png",
        title: "Unreal 4",
      },
    ],
  },
  art: {
    cards: [
      {
        id: 0,
        image: "AdobePhotoshop-Icon.png",
        title: "Photoshop",
      },
      {
        id: 1,
        image: "AbobeIllustrator-Icon.png",
        title: "Illustrator",
      },
      {
        id: 2,
        image: "AdobeAfterEffects-Icon.png",
        title: "AfterEffects",
      },
      {
        id: 3,
        image: "AdobeXD-Icon.png",
        title: "Experience",
      },
      {
        id: 4,
        image: "Maya-Icon.png",
        title: "Maya",
      },
      {
        id: 5,
        image: "ZBrush-Icon.png",
        title: "ZBrush",
      },
      {
        id: 6,
        image: "SubstanceDesigner-Icon.png",
        title: "Designer",
      },
      {
        id: 7,
        image: "SubstancePainter-Icon.png",
        title: "Painter",
      },
    ],
  },
};

// import SkillCard from '../SkillCard/SkillCard';

export const Skills = () => {
  let programming = content.programming.cards.map((x, i) => {
    return <SkillCard key={i} {...x} />;
  });

  let art = content.art.cards.map((x, i) => {
    return <SkillCard key={i} {...x} />;
  });

  let artSkillsList = [
    "Web Design",
    "Concept Art",
    "Graphic Design",
    "2 & 3D Animation",
    "Digital Painting",
    "Rigging",
    "Story Boarding",
    "Animatics",
    "Color Theory",
    "Composition",
    "Texture Artist",
    "3D Modeler",
  ];

  let artSkills = artSkillsList.map((x, i) => {
    return (
      <li key={i} className="h3">
        {x}
      </li>
    );
  });
  return (
    <div className="Skills" id="Skills">
      <SectionHeader title="Skills" />
      <div className="container">
        <div className="skill-section">
          <div className="sub-header">
            <div className="h2">Programming</div>
          </div>
          <div className="skill-cards-container">
            <div className="grid">{programming}</div>
          </div>
        </div>
        <div className="skill-section">
          <div className="sub-header">
            <div className="h2">Art</div>
          </div>
          <div className="skill-cards-container">
            <div className="grid">{art}</div>
          </div>
          <div className="art-skills">
            <div className="info">
              <div className="card">
                <div className="sub-header-art h2">Artistic Skills</div>
                <div className="description h4">
                  After being a professional artist for many years you acquire a
                  wide set of skills. From 3d Artist to freelance graphic
                  design.
                </div>
              </div>
              <div className="bullet-points">
                <div className="container">
                  <ol>{artSkills}</ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
