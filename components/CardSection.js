import React from "react";
import Card from "./Card";
import { useTheme } from "../contexts/ThemeContext";

function CardSection() {
  const { state } = useTheme();
  const { theme, themes } = state;
  const currentTheme = themes[theme];

  return (
    <div
      className={`${
        theme === "dark" ? "bg-[rgb(18,17,17)]" : "bg-slate-50"
      } text-${
        currentTheme.textColor
      } relative p-6 sm:p-8 flex flex-wrap items-center justify-between gap-6 lg:px-0 lg:py-12 lg:w-[80%] 2xl:w-[50%] mx-auto`}
    >
      <h2 className="w-full text-center font-semibold text-2xl lg:text-3xl pb-4 lg:pb-8">
        Projects
      </h2>

      <Card />
    </div>
  );
}

export default CardSection;
