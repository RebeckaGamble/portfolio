import React from "react";
import { FaMoon } from "react-icons/fa";
import { GoSun } from "react-icons/go";
import { useTheme } from "./ThemeContext";

export default function ThemeButton() {
  const { state, dispatch } = useTheme();
  const { theme } = state;

  const toggleTheme = () => {
    document.body.classList.toggle("dark");
    dispatch({ type: theme === "light" ? "dark" : "light" });
  };

  return (
    <>
      <div className="absolute top-3 right-3">
        <button onClick={toggleTheme}>
          {theme === "light" ? <FaMoon /> : <GoSun />}
        </button>
      </div>
    </>
  );
}
