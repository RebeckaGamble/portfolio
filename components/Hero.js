import React from "react";
import { useTheme } from "../contexts/ThemeContext";
import Avatar from "./Avatar";

function Hero() {
  const { state } = useTheme();
  const { theme, themes } = state;
  const currentTheme = themes[theme];

  return (
    <div
      className={`${
        theme === "dark" ? "bg-[rgb(34,31,31)]" : "bg-white"
      } text-${currentTheme.textColor} flex flex-col items-center px-6 lg:px-0 py-10  `}
    >
      <div className="lg:w-[80%] 2xl:w-[50%] mx-auto justify-center flex items-center flex-col">
        <h1 className="font-semibold text-2xl pb-6 leading-6">
          Rebecka Gamble
        </h1>

        <Avatar />
        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam natus
          placeat dicta sit molestiae fugi at deserunt maiores accusamus odit
          minus reprehenderit nulla voluptate tenetur ipsam quo nam reiciendis,
          nesciunt quas libero rerum voluptates debitis omnis. Ea consectetur
          beatae et non!
        </p>
      </div>
    </div>
  );
}

export default Hero;
