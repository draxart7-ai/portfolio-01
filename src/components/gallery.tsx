import { SectionHeader } from "./section-header";
import "./gallery.css";

// const content = [];

export const Gallery = () => {
  console.log("hello");
  return (
    <div className="Gallery">
      <SectionHeader title="Gallery" />
      <div className="container" style={{ padding: "10px" }}>
        <div> here is a gallery</div>
      </div>
    </div>
  );
};
