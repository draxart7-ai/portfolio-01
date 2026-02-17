import { useTheme } from "../providers/app-context";
import "./header.css";
import { LogoSvg } from "../assets/icons/LogoSvg";

export const Header = () => {
  const { theme, toggleTheme } = useTheme();
  console.log({ theme, toggleTheme });
  return (
    <div className="app-header">
      <LogoSvg height="40px" />
      header
    </div>
  );
};
