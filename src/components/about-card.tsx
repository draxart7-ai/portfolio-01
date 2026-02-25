import "./about-card.css";

interface AboutCardProps {
  id: number;
  title: string;
  description: string;
}
export const AboutCard = ({ id, title, description }: AboutCardProps) => {
  const getIcon = () => {
    switch (title) {
      case "Engineer":
        return <img height="50" src="./assets/a_engineer.png" alt="" />;
      case "Artist":
        return <img height="50" src="./assets/a_artist.png" alt="" />;
      case "Animator":
        return <img height="50" src="./assets/a_animator.png" alt="" />;
      default:
        return <div>No Icon</div>;
    }
  };

  const cssPosition = () => {
    let position = "top";
    if (id === 1) {
      position = "bottom";
    }
    return position;
  };

  return (
    <div className="AboutCard">
      <div className={`info ${cssPosition()}`}>
        <div className="title">
          <div className=" h1 ">{title}</div>
          {getIcon()}
        </div>
        <div className="description h4">{description}</div>
      </div>
    </div>
  );
};
