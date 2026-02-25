import "./skill-card.css";
interface SkillCardProps {
  image: string;
  title: string;
}
export const SkillCard = ({ image, title }: SkillCardProps) => {
  return (
    <div className="SkillCard">
      <img src={`/icons/${image}`} style={{ width: "60px" }} alt={image} />
      <div className="h5">{title}</div>
    </div>
  );
};
