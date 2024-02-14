import React from "react";
import ThemeButton from "../contexts/ThemeButton";
import { useTheme } from "../contexts/ThemeContext";
import Link from "next/link";

function Header() {
  const { state } = useTheme();
  const { theme, themes } = state;
  const currentTheme = themes[theme];

  return (
    <div
      className={`${
        theme === "dark"
          ? "bg-[rgb(18,17,17)] text-yellow-300 shadow-white"
          : "bg-white shadow-slate-300"
      } text-${
        currentTheme.textColor
      } fixed z-10 flex w-full h-[80px] items-center justify-center shadow-sm`}
    >
      <div className="fixed top-0 left-1">
        <Link href={"/"} className="">
          <img src="./logo.png" alt="logo" width={80} height={80} />
        </Link>
      </div>
      <h1 className="font-semibold text-[44px] lg:text-[54px] inline-block text-transparent bg-gradient-to-bl from-[#9E2DA8] to-[#FC3A79] bg-clip-text ">
        Portfolio
      </h1>
      <div className="fixed top-3 right-3">
        <ThemeButton />
      </div>
    </div>
  );
}

export default Header;
