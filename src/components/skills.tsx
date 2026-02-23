import { SectionHeader } from "./section-header";
import "./skills.css";

const content = [];

export const Skills = () => {
  return (
    <div className="Skills">
      <SectionHeader title="Skills" />
      <div className="container" style={{ padding: "10px" }}>
        <div> here is a list of skills</div>
      </div>
    </div>
  );
};
