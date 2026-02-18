import "./section-header.css";
interface SectionHeaderProps {
  title: string;
}

export const SectionHeader = ({ title }: SectionHeaderProps) => {
  return (
    <div className="SectionHeader">
      <div className="h1 title uni">{title}</div>
    </div>
  );
};
