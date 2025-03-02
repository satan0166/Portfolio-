import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const handleThemeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTheme(e.target.checked ? "dark" : "light");
  };

  return (
    <label className="switch">
      <input 
        type="checkbox" 
        checked={theme === "dark"}
        onChange={handleThemeChange}
      />
      <div className="slider">
        <div className="slider-btn">
          <div className="light"></div>
          <div className="texture"></div>
          <div className="texture"></div>
          <div className="texture"></div>
          <div className="light"></div>
        </div>
      </div>
    </label>
  );
}