import { useTheme } from "../providers/app-context"; // Use the custom hook

export const Header = () => {
  const { theme, toggleTheme } = useTheme();
  console.log({ theme, toggleTheme });
  return <div>header</div>;
};
