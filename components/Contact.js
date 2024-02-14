import React from "react";
import Link from "next/link";
import { useTheme } from "../contexts/ThemeContext";


function Contact() {
  const { state } = useTheme();
  const { theme, themes } = state;
  const currentTheme = themes[theme];

  return (
    <footer className={` h-auto w-full bottom-0 flex flex-col text-white text-[16px] lg:text-[18px] ${theme === "dark" ? "bg-[rgb(34,31,31)]" : "bg-gradient-to-bl from-[#9E2DA8] to-[#FC3A79]"} 
    `}>
      <div className="font-semibold p-4 mx-auto lg:py-8">
        <h3 className="text-lg lg:text-xl py-1">Contact</h3>
        <p className="">
          Name: <span className="font-normal">Rebecka Gamble</span>
        </p>
        <p>
          Phone: <span className="font-normal">073-124 93 33</span>
        </p>
        <p>
          Email:{" "}
          <span className="font-normal">
            <Link href="mailto:rebecka@hotmail.com">rebecka@hotmail.com</Link>
          </span>
        </p>
        <p>
          Github:{" "}
          <span className="font-normal">
            <Link href="https://github.com/RebeckaGamble">
              https://github.com/RebeckaGamble
            </Link>
          </span>{" "}
        </p>
      </div>
    </footer>
  );
}

export default Contact;
